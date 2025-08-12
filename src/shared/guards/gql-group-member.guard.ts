import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

import { GroupService } from "@/src/modules/group/group.service";

@Injectable()
export class GqlGroupMembershipGuard implements CanActivate {
  public constructor(private readonly groupService: GroupService) {}
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { userId } = ctx.getContext().req.session;
    const groupId = ctx.getArgs().groupId;

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
