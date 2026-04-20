import { forwardRef, Module } from "@nestjs/common";

import { GqlChatMembershipGuard } from "@/src/shared/guards/gql-chat-membership.guard";

import { SessionModule } from "../../auth/session/session.module";
import { ChatModule } from "../chat.module";

import { ChatDraftMessageResolver } from "./chat-draft-message.resolver";
import { FileModule } from "./file/file.module";
import { MessageResolver } from "./message.resolver";
import { MessageService } from "./message.service";

@Module({
  providers: [
    MessageResolver,
    MessageService,
    ChatDraftMessageResolver,
    GqlChatMembershipGuard
  ],
  imports: [FileModule, forwardRef(() => ChatModule), SessionModule]
})
export class MessageModule {}
