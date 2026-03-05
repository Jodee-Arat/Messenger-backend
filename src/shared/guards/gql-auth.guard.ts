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

    // Сначала пробуем авторизоваться через JWT (для мобильных клиентов)
    const authHeader = request.headers.authorization;
    if (authHeader) {
      const [type, token] = authHeader.split(" ");
      if (type === "Bearer" && token) {
        try {
          const payload = await this.jwtService.verifyAsync(token);
          const user = await this.prismaService.user.findUnique({
            where: {
              id: payload.userId // Предполагается, что в токене есть 'userId'
            }
          });

          if (user) {
            request.user = user;
            return true;
          }
        } catch (error) {
          // Логируем ошибку для отладки, но не выбрасываем её
          console.error("JWT verification failed:", error.message);
        }
      }
    }

    // Если JWT-токен не сработал, пробуем авторизоваться через сессию (для веб-версии)
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

    // Если ни один из методов не сработал
    throw new UnauthorizedException("Пользователь не авторизован");
  }
}
