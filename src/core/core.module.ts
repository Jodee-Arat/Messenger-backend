import { ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { AccountModule } from "../modules/auth/account/account.module";
import { SessionModule } from "../modules/auth/session/session.module";
import { ChatModule } from "../modules/chat/chat.module";
import { CryptoModule } from "../modules/crypto/crypto.module";
import { StorageModule } from "../modules/libs/storage/storage.module";
import { IS_DEV_ENV } from "../shared/utils/is-dev.util";

import { getGraphqlConfig } from "./config/graphql.config";
import { PrismaModule } from "./prisma/prisma.module";
import { RedisModule } from "./redis/redis.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: !IS_DEV_ENV
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getGraphqlConfig
    }),
    PrismaModule,
    RedisModule,
    StorageModule,
    AccountModule,
    SessionModule,
    ChatModule,
    CryptoModule
  ]
})
export class CoreModule {}
