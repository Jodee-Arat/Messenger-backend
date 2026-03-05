import { Module } from "@nestjs/common";

import { SessionModule } from "../auth/session/session.module";
import { GroupModule } from "../group/group.module";

import { ChatResolver } from "./chat.resolver";
import { ChatService } from "./chat.service";
import { MessageModule } from "./message/message.module";
import { RoleModule } from "./role/role.module";

@Module({
  providers: [ChatResolver, ChatService],
  imports: [MessageModule, GroupModule, SessionModule, RoleModule],
  exports: [ChatService]
})
export class ChatModule {}
