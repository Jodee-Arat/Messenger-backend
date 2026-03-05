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

@Injectable()
export class SessionService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
    private readonly jwtService: JwtService
  ) {}

  public async findSessionsByUser(req: Request) {
    const userId = req.session.userId;

    if (!userId) {
      throw new UnauthorizedException("Unauthorized");
    }

    const keys = await this.redisService.keys("*");

    const userSessions = [];

    for (const key of keys) {
      const sessionData = await this.redisService.get(key);
      if (sessionData) {
        const session = JSON.parse(sessionData);
        if (session.userId === userId) {
          userSessions.push({ ...session, id: key.split(":")[1] });
        }
      }
    }
    userSessions.sort((a, b) => b.createdAt - a.createdAt);
    return userSessions.filter((session) => session.id !== req.session.id);
  }

  public async findCurrentSession(req: Request) {
    const sessionId = req.session.id;

    const sessionData = await this.redisService.get(
      `${this.configService.getOrThrow("SESSION_FOLDER")}${sessionId}`
    );

    if (!sessionData) {
      throw new NotFoundException("Session not found");
    }

    const session = JSON.parse(sessionData);

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
    return destroySession(req, this.configService);
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
}
