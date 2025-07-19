import { Module } from "@nestjs/common";

import { ChatResolver } from "./chat.resolver";
import { ChatService } from "./chat.service";
import { MessageModule } from "./message/message.module";

@Module({
  providers: [ChatResolver, ChatService],
  imports: [MessageModule],
  exports: [ChatService]
})
export class ChatModule {}
