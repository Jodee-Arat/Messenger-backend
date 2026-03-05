import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { GraphQLUpload, Upload } from "graphql-upload";

import { User } from "@/prisma/generated";
import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";
import { IsMemberGroup } from "@/src/shared/decorators/group/is-member-group.decorator";
import { FileValidationPipe } from "@/src/shared/pipes/file-validation.pipe";

import { FiltersInput } from "../inputs/filters.input";

import { GroupService } from "./group.service";
import { ChangeGroupInfoInput } from "./inputs/change-group-info.input";
import { CreateGroupInput } from "./inputs/create-group.input";
import { GroupModel } from "./models/group.model";

@Resolver("Group")
export class GroupResolver {
  private readonly pubSub: PubSub;
  constructor(private readonly groupService: GroupService) {
    this.pubSub = new PubSub();
  }

  @Authorization()
  @Query(() => Boolean, { name: "checkGroupAccess" })
  public async checkGroupAccess(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string
  ) {
    return await this.groupService.checkGroupAccess(userId, groupId);
  }

  @Authorization()
  @Query(() => [GroupModel], { name: "findAllGroupsByUser" })
  public async findAllGroupsByUser(
    @Authorized("id") userId: string,
    @Args("filters") input: FiltersInput
  ) {
    return await this.groupService.findAllGroupsByUser(userId, input);
  }

  @Authorization()
  @IsMemberGroup()
  @Query(() => GroupModel, { name: "findGroupByGroupId" })
  public async findGroupByGroupId(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string
  ) {
    return await this.groupService.findGroupByGroupId(userId, groupId);
  }

  @Authorization()
  @IsMemberGroup()
  @Mutation(() => String, { name: "changeGroupAvatar" })
  public async changeAvatar(
    @Authorized() user: User,
    @Args("groupId") groupId: string,
    @Args("avatar", { type: () => GraphQLUpload }, FileValidationPipe)
    avatar: Upload
  ) {
    return this.groupService.changeAvatar(user, groupId, avatar);
  }

  @Authorization()
  @IsMemberGroup()
  @Mutation(() => Boolean, { name: "removeGroupAvatar" })
  public async removeAvatar(
    @Authorized() user: User,
    @Args("groupId") groupId: string
  ) {
    return this.groupService.removeAvatar(user, groupId);
  }

  @Authorization()
  @IsMemberGroup()
  @Mutation(() => Boolean, { name: "changeGroupInfo" })
  public async changeGroupInfo(
    @Authorized() user: User,
    @Args("groupId") groupId: string,
    @Args("data") input: ChangeGroupInfoInput
  ) {
    return this.groupService.changeInfo(user, groupId, input);
  }

  @Subscription(() => GroupModel, {
    name: "groupAdded",
    filter: (payload, variables) => {
      let isCorrectUser = false;

      for (const users of payload.groupAdded.members) {
        if (users.userId === variables.userId) {
          isCorrectUser = true;
          break;
        }
      }

      return isCorrectUser;
    }
  })
  public groupAdded(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("GROUP_ADDED");
  }

  @Subscription(() => GroupModel, {
    name: "groupDeleted",
    filter: (payload, variables) => {
      let isCorrectUser = false;

      for (const users of payload.groupDeleted.members) {
        if (users.userId === variables.userId) {
          isCorrectUser = true;
          break;
        }
      }

      return isCorrectUser;
    }
  })
  public groupDeleted(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("GROUP_DELETED");
  }

  @Authorization()
  @Mutation(() => GroupModel, { name: "createGroup" })
  public async createGroup(
    @Authorized("id") creatorId: string,
    @Args("data") input: CreateGroupInput
  ) {
    const group = await this.groupService.createGroup(creatorId, input);
    this.pubSub.publish("GROUP_ADDED", { groupAdded: group });
    return group;
  }

  @Authorization()
  @IsMemberGroup()
  @Mutation(() => Boolean, { name: "deleteGroup" })
  public async deleteGroup(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string
  ) {
    const group = await this.groupService.deleteGroup(userId, groupId);
    if (group) {
      this.pubSub.publish("GROUP_DELETED", { groupDeleted: group });
    }
    return group ? true : false;
  }

  @Authorization()
  @IsMemberGroup()
  @Mutation(() => Boolean, { name: "inviteMemberToGroup" })
  public async inviteMemberToGroup(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string,
    @Args("targetUserId") targetUserId: string
  ) {
    return this.groupService.inviteMember(userId, groupId, targetUserId);
  }

  @Authorization()
  @IsMemberGroup()
  @Mutation(() => Boolean, { name: "removeMemberFromGroup" })
  public async removeMemberFromGroup(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string,
    @Args("targetUserId") targetUserId: string
  ) {
    return this.groupService.removeMember(userId, groupId, targetUserId);
  }
}
