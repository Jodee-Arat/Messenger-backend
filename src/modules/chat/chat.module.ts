import { Module } from "@nestjs/common";

import { GroupModule } from "../group/group.module";

import { ChatResolver } from "./chat.resolver";
import { ChatService } from "./chat.service";
import { MessageModule } from "./message/message.module";

@Module({
  providers: [ChatResolver, ChatService],
  imports: [MessageModule, GroupModule],
  exports: [ChatService]
})
export class ChatModule {}
