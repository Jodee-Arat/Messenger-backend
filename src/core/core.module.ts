import { ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";

import { AccountModule } from "../modules/auth/account/account.module";
import { ProfileModule } from "../modules/auth/profile/profile.module";
import { SessionModule } from "../modules/auth/session/session.module";
import { ChatModule } from "../modules/chat/chat.module";
import { FriendshipModule } from "../modules/friendship/friendship.module";
import { StorageModule } from "../modules/libs/storage/storage.module";
import { SecretModule } from "../modules/secret/secret.module";
import { IS_DEV_ENV } from "../shared/utils/is-dev.util";

import { getGraphqlConfig } from "./config/graphql.config";
import { PrismaModule } from "./prisma/prisma.module";
import { PrismaService } from "./prisma/prisma.service";
import { RedisModule } from "./redis/redis.module";
import { RedisService } from "./redis/redis.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: !IS_DEV_ENV
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule, SessionModule, PrismaModule, RedisModule],
      inject: [ConfigService, PrismaService, RedisService, JwtService],
      useFactory: getGraphqlConfig
    }),
    PrismaModule,
    RedisModule,
    StorageModule,
    AccountModule,
    SessionModule,
    ChatModule,
    FriendshipModule,
    ProfileModule,
    SecretModule
  ]
})
export class CoreModule {}
