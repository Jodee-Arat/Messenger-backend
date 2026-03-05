import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";

import { GroupRoleService } from "./group-role.service";
import { UpsertGroupRoleInput } from "./inputs/upsert-group-role.input";
import { GroupRoleModel } from "./models/group-role.model";
import { MemberRoleModel } from "./models/member-role.model";

@Resolver("GroupRole")
export class GroupRoleResolver {
  private readonly pubSub: PubSub;
  constructor(private readonly groupRoleService: GroupRoleService) {
    this.pubSub = new PubSub();
  }

  @Authorization()
  @Query(() => MemberRoleModel, { name: "getMemberRole" })
  public async getMemberRole(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string
  ) {
    const role = await this.groupRoleService.getMemberRole(userId, groupId);

    return role;
  }

  @Authorization()
  @Query(() => [GroupRoleModel], { name: "getGroupRoles" })
  public async getGroupRoles(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string
  ) {
    return await this.groupRoleService.getGroupRoles(userId, groupId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "upsertGroupRole" })
  public async upsertGroupRole(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string,
    @Args("data") input: UpsertGroupRoleInput
  ) {
    const role = await this.groupRoleService.upsertGroupRole(
      userId,
      groupId,
      input
    );

    this.pubSub.publish("GROUP_UPSERTED_ROLE", {
      groupUpsertedRole: role
    });
    return !!role;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "deleteGroupRole" })
  public async deleteGroupRole(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string,
    @Args("roleId") roleId: string
  ) {
    const role = await this.groupRoleService.deleteGroupRole(
      userId,
      groupId,
      roleId
    );
    this.pubSub.publish("GROUP_DELETED_ROLE", { groupDeletedRole: role });
    return !!role;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "assignGroupRoleToMember" })
  public async assignGroupRoleToMember(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string,
    @Args("roleId") roleId: string,
    @Args("memberId") memberId: string
  ) {
    const role = await this.groupRoleService.assignRoleToMember(
      userId,
      groupId,
      roleId,
      memberId
    );
    this.pubSub.publish("GROUP_ASSIGNED_ROLE", {
      groupAssignedRole: role
    });
    return !!role;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "removeGroupRoleFromMember" })
  public async removeGroupRoleFromMember(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string,
    @Args("roleId") roleId: string,
    @Args("memberId") memberId: string
  ) {
    const role = await this.groupRoleService.removeRoleFromMember(
      userId,
      groupId,
      roleId,
      memberId
    );
    this.pubSub.publish("GROUP_REMOVED_ROLE", {
      groupRemovedRole: role
    });
    return !!role;
  }

  @Subscription(() => GroupRoleModel, {
    name: "groupUpsertedRole",
    filter: (payload, variables) =>
      payload.groupUpsertedRole.groupId === variables.groupId
  })
  public groupUpsertedRole(@Args("groupId") groupId: string) {
    return this.pubSub.asyncIterableIterator("GROUP_UPSERTED_ROLE");
  }

  @Subscription(() => GroupRoleModel, {
    name: "groupDeletedRole",
    filter: (payload, variables) =>
      payload.groupDeletedRole.groupId === variables.groupId
  })
  public groupDeletedRole(@Args("groupId") groupId: string) {
    return this.pubSub.asyncIterableIterator("GROUP_DELETED_ROLE");
  }

  @Subscription(() => GroupRoleModel, {
    name: "groupAssignedRole",
    filter: (payload, variables) =>
      payload.groupAssignedRole.groupId === variables.groupId
  })
  public groupAssignedRole(@Args("groupId") groupId: string) {
    return this.pubSub.asyncIterableIterator("GROUP_ASSIGNED_ROLE");
  }

  @Subscription(() => GroupRoleModel, {
    name: "groupRemovedRole",
    filter: (payload, variables) =>
      payload.groupRemovedRole.groupId === variables.groupId
  })
  public groupRemovedRole(@Args("groupId") groupId: string) {
    return this.pubSub.asyncIterableIterator("GROUP_REMOVED_ROLE");
  }
}
