import { forwardRef, Module } from "@nestjs/common";

import { SessionModule } from "@/src/modules/auth/session/session.module";
import { GqlChatMembershipGuard } from "@/src/shared/guards/gql-chat-membership.guard";

import { ChatModule } from "../../chat.module";

import { FileResolver } from "./file.resolver";
import { FileService } from "./file.service";

@Module({
  providers: [FileResolver, FileService, GqlChatMembershipGuard],
  imports: [forwardRef(() => ChatModule), SessionModule]
})
export class FileModule {}
