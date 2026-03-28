import { Module } from "@nestjs/common";

import { SessionModule } from "../auth/session/session.module";
import { ChatModule } from "../chat/chat.module";

import { SecretResolver } from "./secret.resolver";
import { SecretService } from "./secret.service";

@Module({
  imports: [SessionModule, ChatModule],
  providers: [SecretResolver, SecretService]
})
export class SecretModule {}
