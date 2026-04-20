import { Parent, ResolveField, Resolver } from "@nestjs/graphql";

import { ChatDraftMessageModel } from "./models/chat-draft-message.model";

@Resolver(() => ChatDraftMessageModel)
export class ChatDraftMessageResolver {
  @ResolveField(() => String)
  public text(@Parent() draftMessage: ChatDraftMessageModel) {
    return draftMessage.text ?? "";
  }
}
