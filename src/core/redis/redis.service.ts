import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Redis from "ioredis";

const REDIS_CONNECT_TIMEOUT_MS = 10000;

@Injectable()
export class RedisService
  extends Redis
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(RedisService.name);

  public constructor(configService: ConfigService) {
    super(configService.getOrThrow<string>("REDIS_URI"), {
      connectTimeout: REDIS_CONNECT_TIMEOUT_MS,
      lazyConnect: true,
      maxRetriesPerRequest: 3,
      retryStrategy: (attempt) => {
        if (attempt > 3) {
          return null;
        }

        return Math.min(attempt * 500, 2000);
      }
    });

    this.on("error", (error) => {
      this.logger.error(error.message, error.stack);
    });
  }

  public async onModuleInit() {
    if (this.status === "ready") {
      return;
    }

    let timeout: NodeJS.Timeout | undefined;

    try {
      await Promise.race([
        this.connect(),
        new Promise<never>((_, reject) => {
          timeout = setTimeout(() => {
            reject(
              new Error(
                `Redis connection timed out after ${REDIS_CONNECT_TIMEOUT_MS}ms`
              )
            );
          }, REDIS_CONNECT_TIMEOUT_MS);
        })
      ]);

      this.logger.log("Connected to Redis");
    } finally {
      if (timeout) {
        clearTimeout(timeout);
      }
    }
  }

  public onModuleDestroy() {
    this.disconnect();
  }
}
