import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  UnauthorizedException
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";

import { PrismaService } from "@/src/core/prisma/prisma.service";

@Injectable()
export class GqlAuthGuard implements CanActivate {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    if (request.user?.id) {
      return true;
    }

    const authHeader = request.headers.authorization;
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

    throw new UnauthorizedException("РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ РЅРµ Р°РІС‚РѕСЂРёР·РѕРІР°РЅ");
  }
}
