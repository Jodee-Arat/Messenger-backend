import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

import { ChatService } from "@/src/modules/chat/chat.service";

@Injectable()
export class GqlChatMembershipGuard implements CanActivate {
  public constructor(private readonly chatService: ChatService) {}
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const userId = request.user?.id ?? request.session?.userId;
    const chatId = ctx.getArgs().chatId;

    if (!userId) {
      throw new ForbiddenException("User is not authorized");
    }

    const isUserInChat = await this.chatService.isUserInChat(userId, chatId);
    if (!isUserInChat) {
      throw new ForbiddenException("Chat not found or user is not a member");
    }
    return isUserInChat;
  }
}
