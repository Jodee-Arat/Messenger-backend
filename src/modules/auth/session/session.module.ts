import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";

import { ms } from "@/src/shared/utils/ms.util";

import { SessionResolver } from "./session.resolver";
import { SessionService } from "./session.service";

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: (config.getOrThrow<string>("JWT_EXPIRES_IN") ||
            "1h") as any
        }
      })
    })
  ],
  providers: [SessionResolver, SessionService],
  exports: [JwtModule]
})
export class SessionModule {}
