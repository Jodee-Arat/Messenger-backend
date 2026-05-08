import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

import { GroupService } from "@/src/modules/group/group.service";
import { getGraphqlRequest } from "@/src/shared/utils/gql-request.util";

@Injectable()
export class GqlGroupMembershipGuard implements CanActivate {
  public constructor(private readonly groupService: GroupService) {}
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = getGraphqlRequest(context);
    const userId = request?.user?.id ?? request?.session?.userId;
    const groupId = ctx.getArgs().groupId;

    if (!userId) {
      throw new ForbiddenException("User is not authorized");
    }

    const isUserInGroup = await this.groupService.isUserInGroup(
      userId,
      groupId
    );
    if (!isUserInGroup) {
      throw new ForbiddenException("Group not found or user is not a member");
    }
    return isUserInGroup;
  }
}
