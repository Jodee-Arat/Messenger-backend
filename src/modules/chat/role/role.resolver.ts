import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";

import { UpsertChatRoleInput } from "./inputs/upsert-chat-role.input";
import { ChatRoleModel } from "./models/chat-role.model";
import { MemberChatRoleModel } from "./models/member-chat-role.model";
import { RoleService } from "./role.service";

@Resolver("Role")
export class RoleResolver {
  private readonly pubSub: PubSub;
  constructor(private readonly roleService: RoleService) {
    this.pubSub = new PubSub();
  }

  @Authorization()
  @Query(() => MemberChatRoleModel, { name: "getMemberChatRole" })
  public async getMemberChatRole(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.roleService.getMemberChatRole(userId, chatId);
  }

  @Authorization()
  @Query(() => [ChatRoleModel], { name: "getChatRoles" })
  public async getChatRoles(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.roleService.getChatRoles(userId, chatId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "upsertChatRole" })
  public async upsertChatRole(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("data") input: UpsertChatRoleInput
  ) {
    const role = await this.roleService.upsertChatRole(userId, chatId, input);

    this.pubSub.publish("CHAT_UPSERTED_ROLE", { chatUpsertedRole: role });
    return !!role;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "deleteChatRole" })
  public async deleteChatRole(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("roleId") roleId: string
  ) {
    const role = await this.roleService.deleteChatRole(userId, chatId, roleId);
    this.pubSub.publish("CHAT_DELETED_ROLE", { chatDeletedRole: role });
    return !!role;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "assignRoleToUser" })
  public async assignRoleToUser(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("roleId") roleId: string,
    @Args("memberId") memberId: string
  ) {
    const role = await this.roleService.assignRoleToUser(
      userId,
      chatId,
      roleId,
      memberId
    );
    this.pubSub.publish("CHAT_ASSIGNED_ROLE", { chatAssignedRole: role });
    return !!role;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "removeRoleFromUser" })
  public async removeRoleFromUser(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("roleId") roleId: string,
    @Args("memberId") memberId: string
  ) {
    const role = await this.roleService.removeRoleFromUser(
      userId,
      chatId,
      roleId,
      memberId
    );
    this.pubSub.publish("CHAT_REMOVED_ROLE", { chatRemovedRole: role });
    return !!role;
  }

  @Subscription(() => ChatRoleModel, {
    name: "chatUpsertedRole",
    filter: (payload, variables) =>
      payload.chatUpsertedRole.chatId === variables.chatId
  })
  public chatUpsertedRole(@Args("chatId") chatId: string) {
    return this.pubSub.asyncIterableIterator("CHAT_UPSERTED_ROLE");
  }

  @Subscription(() => ChatRoleModel, {
    name: "chatDeletedRole",
    filter: (payload, variables) =>
      payload.chatDeletedRole.chatId === variables.chatId
  })
  public chatDeletedRole(@Args("chatId") chatId: string) {
    return this.pubSub.asyncIterableIterator("CHAT_DELETED_ROLE");
  }

  @Subscription(() => ChatRoleModel, {
    name: "chatAssignedRole",
    filter: (payload, variables) =>
      payload.chatAssignedRole.chatId === variables.chatId
  })
  public chatAssignedRole(@Args("chatId") chatId: string) {
    return this.pubSub.asyncIterableIterator("CHAT_ASSIGNED_ROLE");
  }

  @Subscription(() => ChatRoleModel, {
    name: "chatRemovedRole",
    filter: (payload, variables) =>
      payload.chatRemovedRole.chatId === variables.chatId
  })
  public chatRemovedRole(@Args("chatId") chatId: string) {
    return this.pubSub.asyncIterableIterator("CHAT_REMOVED_ROLE");
  }
}
