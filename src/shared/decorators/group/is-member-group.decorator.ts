import { applyDecorators, UseGuards } from "@nestjs/common";

import { GqlGroupMembershipGuard } from "../../guards/gql-group-member.guard";

export function IsMemberGroup() {
  return applyDecorators(UseGuards(GqlGroupMembershipGuard));
}
