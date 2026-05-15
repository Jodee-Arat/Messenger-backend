import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { GraphQLUpload, Upload } from "graphql-upload";

import { User } from "@prisma/client";
import { Authorization } from "../../shared/decorators/auth/auth.decorator";
import { Authorized } from "../../shared/decorators/auth/authorized.decorator";
import { IsMemberGroup } from "../../shared/decorators/group/is-member-group.decorator";
import { FileValidationPipe } from "../../shared/pipes/file-validation.pipe";
import { appPubSub } from "../../shared/utils/pubsub.util";

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

  private async publishGroupUpsert(userId: string, groupId: string) {
    const group = await this.groupService.findGroupByGroupId(userId, groupId);

    if (group) {
      this.pubSub.publish("GROUP_ADDED", { groupAdded: group });
    }
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
    const result = await this.groupService.changeAvatar(user, groupId, avatar);
    await this.publishGroupUpsert(user.id, groupId);
    return result;
  }

  @Authorization()
  @IsMemberGroup()
  @Mutation(() => Boolean, { name: "removeGroupAvatar" })
  public async removeAvatar(
    @Authorized() user: User,
    @Args("groupId") groupId: string
  ) {
    const result = await this.groupService.removeAvatar(user, groupId);

    if (result) {
      await this.publishGroupUpsert(user.id, groupId);
    }

    return result;
  }

  @Authorization()
  @IsMemberGroup()
  @Mutation(() => Boolean, { name: "changeGroupInfo" })
  public async changeGroupInfo(
    @Authorized() user: User,
    @Args("groupId") groupId: string,
    @Args("data") input: ChangeGroupInfoInput
  ) {
    const result = await this.groupService.changeInfo(user, groupId, input);

    if (result) {
      await this.publishGroupUpsert(user.id, groupId);
    }

    return result;
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
    const result = await this.groupService.inviteMember(
      userId,
      groupId,
      targetUserId
    );

    if (result) {
      await this.publishGroupUpsert(userId, groupId);
    }

    return result;
  }

  @Authorization()
  @IsMemberGroup()
  @Mutation(() => Boolean, { name: "removeMemberFromGroup" })
  public async removeMemberFromGroup(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string,
    @Args("targetUserId") targetUserId: string
  ) {
    const result = await this.groupService.removeMember(
      userId,
      groupId,
      targetUserId
    );

    this.pubSub.publish("GROUP_DELETED", {
      groupDeleted: {
        id: result.groupId,
        members: [{ userId: result.removedUserId }]
      }
    });

    for (const chat of result.removedChats) {
      appPubSub.publish("CHAT_DELETED", {
        chatDeleted: {
          id: chat.id,
          isSecret: chat.isSecret,
          groupId: chat.groupId,
          members: [{ userId: result.removedUserId }]
        }
      });

      if (chat.isSecret) {
        appPubSub.publish("SECRET_KEY_ROTATION", {
          secretKeyRotation: { chatId: chat.id, members: chat.members }
        });
      }
    }

    return true;
  }
}
