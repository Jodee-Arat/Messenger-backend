import { ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { parse as parseCookie } from "cookie";
import { signedCookie } from "cookie-parser";
import { IncomingMessage } from "http";
import { join } from "path";

import { User } from "@prisma/client";
import { isDev } from "../../shared/utils/is-dev.util";
import { parseBoolean } from "../../shared/utils/parse-boolean.util";

import { PrismaService } from "../prisma/prisma.service";
import { RedisService } from "../redis/redis.service";

type SubscriptionConnectionParams = {
  authToken?: string | null;
  sessionId?: string | null;
};

type SubscriptionContextRequest = {
  headers: Record<string, string | string[] | undefined>;
  session?: {
    userId: string;
  };
  user?: User;
};

async function resolveUserFromJwt(
  authHeader: string | undefined,
  jwtService: JwtService,
  prismaService: PrismaService
) {
  if (!authHeader) {
    return null;
  }

  const [type, token] = authHeader.split(" ");
  if (type !== "Bearer" || !token) {
    return null;
  }

  try {
    const payload = await jwtService.verifyAsync<{ userId: string }>(token);
    return prismaService.user.findUnique({
      where: {
        id: payload.userId
      }
    });
  } catch {
    return null;
  }
}

async function resolveUserFromSession(
  request: IncomingMessage | undefined,
  configService: ConfigService,
  prismaService: PrismaService,
  redisService: RedisService
) {
  const cookieHeader = request?.headers.cookie;
  if (!cookieHeader) {
    return null;
  }

  const cookies = parseCookie(cookieHeader);
  const rawSessionCookie =
    cookies[configService.getOrThrow<string>("SESSION_NAME")];

  if (!rawSessionCookie) {
    return null;
  }

  const sessionId = signedCookie(
    rawSessionCookie,
    configService.getOrThrow<string>("COOKIES_SECRET")
  );

  if (!sessionId || typeof sessionId !== "string") {
    return null;
  }

  const sessionData = await redisService.get(
    `${configService.getOrThrow<string>("SESSION_FOLDER")}${sessionId}`
  );

  if (!sessionData) {
    return null;
  }

  try {
    const session = JSON.parse(sessionData) as { userId?: string };
    if (!session.userId) {
      return null;
    }

    const user = await prismaService.user.findUnique({
      where: {
        id: session.userId
      }
    });

    if (!user) {
      return null;
    }

    return {
      user,
      session: {
        userId: user.id
      }
    };
  } catch {
    return null;
  }
}

async function buildSubscriptionRequest(
  connectionParams: SubscriptionConnectionParams | undefined,
  request: IncomingMessage | undefined,
  configService: ConfigService,
  prismaService: PrismaService,
  redisService: RedisService,
  jwtService: JwtService
) {
  const headers = {
    ...(request?.headers ?? {})
  };

  const authHeader =
    typeof connectionParams?.authToken === "string"
      ? connectionParams.authToken
      : typeof headers.authorization === "string"
        ? headers.authorization
        : undefined;

  if (authHeader) {
    headers.authorization = authHeader;
  }

  if (typeof connectionParams?.sessionId === "string") {
    headers["x-session-id"] = connectionParams.sessionId;
  }

  const req: SubscriptionContextRequest = {
    headers
  };

  const jwtUser = await resolveUserFromJwt(
    authHeader,
    jwtService,
    prismaService
  );

  if (jwtUser) {
    req.user = jwtUser;
    return { req };
  }

  const sessionAuth = await resolveUserFromSession(
    request,
    configService,
    prismaService,
    redisService
  );

  if (sessionAuth) {
    req.user = sessionAuth.user;
    req.session = sessionAuth.session;
  }

  return { req };
}

export function getGraphqlConfig(
  configService: ConfigService,
  prismaService: PrismaService,
  redisService: RedisService,
  jwtService: JwtService
): ApolloDriverConfig {
  const isDevelopment = isDev(configService);
  const introspectionEnabled =
    isDevelopment ||
    parseBoolean(configService.get<string>("GRAPHQL_INTROSPECTION") ?? "false");

  return {
    playground: isDevelopment,
    introspection: introspectionEnabled,
    path: configService.getOrThrow<string>("GRAPHQL_PREFIX"),
    autoSchemaFile: isDevelopment
      ? join(process.cwd(), "src/core/graphql/schema.gql")
      : true,
    sortSchema: true,
    context: ({ req, res }) => ({ req, res }),
    installSubscriptionHandlers: true,
    subscriptions: {
      "subscriptions-transport-ws": {
        onConnect: async (
          connectionParams: SubscriptionConnectionParams,
          _socket,
          context
        ) =>
          buildSubscriptionRequest(
            connectionParams,
            context.request,
            configService,
            prismaService,
            redisService,
            jwtService
          )
      }
    }
  };
}
