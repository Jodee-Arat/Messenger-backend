import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { RedisStore } from "connect-redis";
import { graphqlUploadExpress } from "graphql-upload";

import { CoreModule } from "./core/core.module";
import { RedisService } from "./core/redis/redis.service";
import { ms, StringValue } from "./shared/utils/ms.util";
import { parseBoolean } from "./shared/utils/parse-boolean.util";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const session = require("express-session");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieParser = require("cookie-parser");

const BOOTSTRAP_TIMEOUT_MS = 45000;

function logStartupStep(step: string) {
  console.log(`[Bootstrap] ${step}`);
}

async function withBootstrapTimeout(promise: Promise<void>) {
  let timeout: NodeJS.Timeout | undefined;

  try {
    await Promise.race([
      promise,
      new Promise<never>((_, reject) => {
        timeout = setTimeout(() => {
          reject(
            new Error(`Bootstrap timed out after ${BOOTSTRAP_TIMEOUT_MS}ms`)
          );
        }, BOOTSTRAP_TIMEOUT_MS);
      })
    ]);
  } finally {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
}

function resolveCookieDomain(config: ConfigService) {
  const domain = config.get<string>("SESSION_DOMAIN")?.trim();

  if (!domain || domain === "localhost") {
    return undefined;
  }

  return domain;
}

function resolveCorsOrigin(config: ConfigService) {
  const origins = config
    .getOrThrow<string>("ALLOWED_ORIGIN")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return origins.length === 1 ? origins[0] : origins;
}

function resolveApplicationPort(config: ConfigService) {
  return Number(
    process.env.PORT ?? config.getOrThrow<string>("APPLICATION_PORT")
  );
}

async function bootstrap() {
  logStartupStep("Creating Nest application");
  const app = await NestFactory.create(CoreModule, {
    rawBody: true,
    bodyParser: false
  });
  logStartupStep("Nest application created");

  app.getHttpAdapter().getInstance().set("trust proxy", 1);

  logStartupStep("Resolving providers");
  const config = app.get(ConfigService);
  const redis = app.get(RedisService);
  const sessionDomain = resolveCookieDomain(config);
  logStartupStep("Providers resolved");

  logStartupStep("Registering body parser");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const bodyParser = require("body-parser");
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

  logStartupStep("Registering cookie parser and global pipes");
  app.use(cookieParser(config.getOrThrow<string>("COOKIES_SECRET")));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  );

  logStartupStep("Registering session middleware");
  app.use(
    session({
      secret: config.getOrThrow<string>("SESSION_SECRET"),
      name: config.getOrThrow<string>("SESSION_NAME"),
      resave: false,
      saveUninitialized: false,
      store: new RedisStore({
        client: redis,
        prefix: config.getOrThrow<string>("SESSION_FOLDER")
      }),
      cookie: {
        domain: sessionDomain,
        path: "/",
        maxAge: ms(config.getOrThrow<StringValue>("SESSION_MAX_AGE")),
        httpOnly: parseBoolean(config.getOrThrow<string>("SESSION_HTTP_ONLY")),
        secure: parseBoolean(config.getOrThrow<string>("SESSION_SECURE")),
        sameSite: "lax"
      }
    })
  );

  logStartupStep("Registering GraphQL upload middleware");
  app.use(
    config.getOrThrow<string>("GRAPHQL_PREFIX"),
    graphqlUploadExpress({ maxFileSize: 50 * 1024 * 1024, maxFiles: 10 })
  );

  logStartupStep("Enabling CORS");
  app.enableCors({
    origin: resolveCorsOrigin(config),
    credentials: true,
    exposedHeaders: ["set-cookie"]
  });

  logStartupStep("Registering healthcheck");
  app.getHttpAdapter().getInstance().get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  const port = resolveApplicationPort(config);
  logStartupStep(`Listening on port ${port}`);
  await app.listen(port);
  logStartupStep(`Listening on port ${port}`);
}

withBootstrapTimeout(bootstrap()).catch((error: unknown) => {
  const message = error instanceof Error ? error.stack : String(error);
  Logger.error(message, undefined, "Bootstrap");
  console.error(`[Bootstrap] ${message}`);
  process.exit(1);
});
