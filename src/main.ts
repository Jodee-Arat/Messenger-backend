import { ValidationPipe } from "@nestjs/common";
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

// cookie-parser в CJS, используем require для корректного вызова как функции
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieParser = require("cookie-parser");

async function bootstrap() {
  // bodyParser: false — отключаем дефолтный Express body-parser (лимит ~100KB),
  // чтобы использовать свой с лимитом 50MB для base64-файлов секретного чата
  const app = await NestFactory.create(CoreModule, {
    rawBody: true,
    bodyParser: false
  });

  const config = app.get(ConfigService);
  const redis = app.get(RedisService);

  // Свой body-parser с увеличенным лимитом — ДО всех остальных middleware
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const bodyParser = require("body-parser");
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

  // Важно: session middleware должен стоять до GraphQL и роутов
  app.use(cookieParser(config.getOrThrow<string>("COOKIES_SECRET")));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  );

  app.use(
    session({
      secret: config.getOrThrow<string>("SESSION_SECRET"),
      name: config.getOrThrow<string>("SESSION_NAME"), // совпадает с Cookie: session
      resave: false,
      saveUninitialized: false,
      store: new RedisStore({
        client: redis,
        prefix: config.getOrThrow<string>("SESSION_FOLDER")
      }),
      cookie: {
        // В DEV лучше не указывать domain, чтобы cookie работал на IP/localhost
        // Если требуется, можно управлять через ENV, но по умолчанию убираем домен
        // domain: config.get<string>("SESSION_DOMAIN") ?? undefined,
        path: "/",
        maxAge: ms(config.getOrThrow<StringValue>("SESSION_MAX_AGE")),
        httpOnly: parseBoolean(config.getOrThrow<string>("SESSION_HTTP_ONLY")),
        secure: parseBoolean(config.getOrThrow<string>("SESSION_SECURE")),
        sameSite: "lax"
      }
    })
  );

  // GraphQL upload после session, чтобы иметь доступ к req.session
  app.use(
    config.getOrThrow<string>("GRAPHQL_PREFIX"),
    graphqlUploadExpress({ maxFileSize: 50 * 1024 * 1024, maxFiles: 10 })
  );

  app.enableCors({
    origin: config.getOrThrow<string>("ALLOWED_ORIGIN"),
    credentials: true,
    exposedHeaders: ["set-cookie"]
  });

  await app.listen(config.getOrThrow<number>("APPLICATION_PORT"));
}
bootstrap();
