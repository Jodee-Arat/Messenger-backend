import { Module } from "@nestjs/common";

import { SessionModule } from "../auth/session/session.module";

import { SecretResolver } from "./secret.resolver";
import { SecretService } from "./secret.service";

@Module({
  imports: [SessionModule],
  providers: [SecretResolver, SecretService]
})
export class SecretModule {}
