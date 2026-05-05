import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { verify } from "argon2";
import { Request } from "express";
import { verify as verifyTotp } from "otplib";

import { PrismaService } from "@/src/core/prisma/prisma.service";
import { RedisService } from "@/src/core/redis/redis.service";
import { getSessionMetadata } from "@/src/shared/utils/session-metadata.util";
import { destroySession, saveSession } from "@/src/shared/utils/session.util";

import { LoginInput } from "./inputs/login.input";

type AuthenticatedRequest = Request & {
  user?: {
    id?: string;
  };
};

@Injectable()
export class SessionService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
    private readonly jwtService: JwtService
  ) {}

  public async findSessionsByUser(req: Request) {
    const userId = this.getAuthenticatedUserId(req as AuthenticatedRequest);
    const currentSessionId = this.getCurrentSessionId(req as AuthenticatedRequest);
    const sessionPrefix =
      this.configService.getOrThrow<string>("SESSION_FOLDER");

    const keys = await this.redisService.keys(`${sessionPrefix}*`);

    const userSessions = [];

    for (const key of keys) {
      const sessionData = await this.redisService.get(key);
      if (sessionData) {
        const session = JSON.parse(sessionData);

        if (
          session.userId === userId &&
          session.createdAt &&
          session.metadata
        ) {
          userSessions.push({
            ...session,
            id: key.slice(sessionPrefix.length)
          });
        }
      }
    }

    userSessions.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return currentSessionId
      ? userSessions.filter((session) => session.id !== currentSessionId)
      : userSessions;
  }

  public async findCurrentSession(req: Request) {
    const authenticatedReq = req as AuthenticatedRequest;
    const userId = this.getAuthenticatedUserId(authenticatedReq);
    const sessionId = this.getCurrentSessionId(authenticatedReq);

    if (!sessionId) {
      throw new NotFoundException("Session not found");
    }

    const sessionData = await this.redisService.get(
      `${this.configService.getOrThrow<string>("SESSION_FOLDER")}${sessionId}`
    );

    if (!sessionData) {
      throw new NotFoundException("Session not found");
    }

    const session = JSON.parse(sessionData);

    if (session.userId !== userId) {
      throw new NotFoundException("Session not found");
    }

    return {
      ...session,
      id: sessionId
    };
  }

  public async loginUser(req: Request, input: LoginInput, userAgent: string) {
    const { login, password, pin } = input;

    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [{ username: { equals: login } }, { email: { equals: login } }]
      }
    });

    if (!user || user.isDeactivated) {
      throw new NotFoundException("User not found");
    }

    const isValidPassword = await verify(user.password, password);
    if (!isValidPassword) {
      throw new UnauthorizedException("Invalid password");
    }

    if (user.isTotpEnabled) {
      if (!pin) {
        throw new UnauthorizedException("TOTP code is required");
      }

      if (!user.totpSecret) {
        throw new UnauthorizedException("TOTP secret not configured");
      }

      const totpResult = await verifyTotp({
        token: pin,
        secret: user.totpSecret
      });

      if (!totpResult.valid) {
        throw new UnauthorizedException("Invalid TOTP code");
      }
    }

    const metadata = getSessionMetadata(req, userAgent);
    const savedUser = await saveSession(req, user, metadata);

    const tokens = await this.generateTokens(user.id);
    return {
      user: savedUser,
      message: "null",
      sessionId: req.sessionID,
      ...tokens
    };
  }

  public async logoutUser(req: Request) {
    const authenticatedReq = req as AuthenticatedRequest;
    const userId = this.getAuthenticatedUserId(authenticatedReq);
    const sessionId = this.getCurrentSessionId(authenticatedReq);

    if (sessionId) {
      await this.deleteSessionByIdForUser(sessionId, userId);
    }

    if (req.session?.userId) {
      return destroySession(req, this.configService);
    }

    req.res?.clearCookie(this.configService.getOrThrow<string>("SESSION_NAME"));
    return true;
  }

  public async clearSession(req: Request) {
    req.res.clearCookie(this.configService.getOrThrow<string>("SESSION_NAME"));
    return true;
  }

  public async generateTokens(userId: string) {
    const payload = { userId };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: "15d"
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: "30d"
    });

    return { accessToken, refreshToken };
  }

  public async refreshToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync<{ userId: string }>(
        token
      );

      const user = await this.prismaService.user.findUnique({
        where: { id: payload.userId }
      });

      if (!user) {
        throw new UnauthorizedException("User not found");
      }

      return this.jwtService.signAsync({ userId: user.id });
    } catch (err) {
      throw new UnauthorizedException("Invalid or expired refresh token");
    }
  }

  private getAuthenticatedUserId(req: AuthenticatedRequest) {
    const userId = req.user?.id ?? req.session?.userId;

    if (!userId) {
      throw new UnauthorizedException("Unauthorized");
    }

    return userId;
  }

  private getCurrentSessionId(req: AuthenticatedRequest) {
    if (req.session?.userId && req.session.id) {
      return req.session.id;
    }

    const header = req.headers["x-session-id"];

    if (typeof header === "string" && header.trim()) {
      return header.trim();
    }

    if (Array.isArray(header)) {
      const first = header.find(
        (value) => typeof value === "string" && value.trim().length > 0
      );

      if (first) {
        return first.trim();
      }
    }

    return null;
  }

  public async removeSession(req: Request, sessionId: string) {
    const authenticatedReq = req as AuthenticatedRequest;
    const userId = this.getAuthenticatedUserId(authenticatedReq);

    const deleted = await this.deleteSessionByIdForUser(sessionId, userId);

    if (!deleted) {
      throw new NotFoundException("Session not found");
    }

    return true;
  }

  private getSessionKeyCandidates(sessionId: string) {
    const sessionPrefix =
      this.configService.getOrThrow<string>("SESSION_FOLDER");
    const normalizedSessionId = sessionId.startsWith(sessionPrefix)
      ? sessionId.slice(sessionPrefix.length)
      : sessionId;

    return Array.from(
      new Set([
        `${sessionPrefix}${normalizedSessionId}`,
        `${sessionPrefix}${sessionId}`
      ])
    );
  }

  private async deleteSessionByIdForUser(sessionId: string, userId: string) {
    const sessionKeys = this.getSessionKeyCandidates(sessionId);

    for (const sessionKey of sessionKeys) {
      const sessionData = await this.redisService.get(sessionKey);

      if (!sessionData) {
        continue;
      }

      try {
        const session = JSON.parse(sessionData) as { userId?: string };

        if (session.userId === userId) {
          await this.redisService.del(sessionKey);
          return true;
        }
      } catch {
        continue;
      }
    }

    return false;
  }
}
