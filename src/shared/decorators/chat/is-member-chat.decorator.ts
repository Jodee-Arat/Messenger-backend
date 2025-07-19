import { applyDecorators, UseGuards } from "@nestjs/common";

import { GqlChatMembershipGuard } from "../../guards/gql-chat-membership.guard";

export function IsMemberChat() {
  return applyDecorators(UseGuards(GqlChatMembershipGuard));
}
