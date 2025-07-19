import { forwardRef, Module } from "@nestjs/common";

import { GqlChatMembershipGuard } from "@/src/shared/guards/gql-chat-membership.guard";

import { ChatModule } from "../chat.module";

import { FileModule } from "./file/file.module";
import { MessageResolver } from "./message.resolver";
import { MessageService } from "./message.service";

@Module({
  providers: [MessageResolver, MessageService, GqlChatMembershipGuard],
  imports: [FileModule, forwardRef(() => ChatModule)]
})
export class MessageModule {}
