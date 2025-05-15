import { Module } from "@nestjs/common";
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from "@nestjs/config";
import { IS_DEV_ENV } from "../shared/utils/is-dev.util";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { getGraphqlConfig } from "./config/graphql.config";
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: !IS_DEV_ENV,

      
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigModule],
      useFactory: getGraphqlConfig
    })
    ,PrismaModule, RedisModule],
})
export class CoreModule {}
