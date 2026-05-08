import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  UnauthorizedException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

import { PrismaService } from "@/src/core/prisma/prisma.service";
import { RedisService } from "@/src/core/redis/redis.service";
import { getGraphqlRequest } from "@/src/shared/utils/gql-request.util";

@Injectable()
export class GqlAuthGuard implements CanActivate {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = getGraphqlRequest(context);
    if (!request) {
      throw new UnauthorizedException("GraphQL request context not found");
    }

    const headers = request.headers ?? {};
    const authHeader = this.getHeader(headers.authorization);

    if (request.user?.id) {
      if (authHeader) {
        const sessionId = this.getSessionIdFromHeader(
          headers["x-session-id"]
        );

        if (
          !sessionId ||
          !(await this.isSessionActiveForUser(sessionId, request.user.id))
        ) {
          throw new UnauthorizedException("Session not found");
        }
      }

      return true;
    }

    if (authHeader) {
      const [type, token] = authHeader.split(" ");
      if (type === "Bearer" && token) {
        try {
          const payload = await this.jwtService.verifyAsync<{ userId: string }>(
            token
          );
          const user = await this.prismaService.user.findUnique({
            where: {
              id: payload.userId
            }
          });

          if (user) {
            const sessionId = this.getSessionIdFromHeader(
              headers["x-session-id"]
            );

            if (
              !sessionId ||
              !(await this.isSessionActiveForUser(sessionId, user.id))
            ) {
              throw new UnauthorizedException("Session not found");
            }

            request.user = user;
            return true;
          }
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "unknown error";
          console.error("JWT verification failed:", message);
        }
      }
    }

    if (typeof request.session?.userId !== "undefined") {
      const user = await this.prismaService.user.findUnique({
        where: {
          id: request.session.userId
        }
      });

      if (user) {
        request.user = user;
        return true;
      }
    }

    throw new UnauthorizedException(
      "РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ РЅРµ Р°РІС‚РѕСЂРёР·РѕРІР°РЅ"
    );
  }

  private getSessionIdFromHeader(header: unknown) {
    if (typeof header === "string" && header.trim()) {
      return header.trim();
    }

    if (Array.isArray(header)) {
      const first = header.find(
        (value) => typeof value === "string" && value.trim().length > 0
      );

      return first?.trim() ?? null;
    }

    return null;
  }

  private getHeader(header: unknown) {
    if (typeof header === "string") {
      return header;
    }

    if (Array.isArray(header)) {
      return header.find((value) => typeof value === "string") ?? undefined;
    }

    return undefined;
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

  private async isSessionActiveForUser(sessionId: string, userId: string) {
    const sessionKeys = this.getSessionKeyCandidates(sessionId);

    for (const sessionKey of sessionKeys) {
      const sessionData = await this.redisService.get(sessionKey);

      if (!sessionData) {
        continue;
      }

      try {
        const session = JSON.parse(sessionData) as { userId?: string };
        if (session.userId === userId) {
          return true;
        }
      } catch {
        continue;
      }
    }

    return false;
  }
}
