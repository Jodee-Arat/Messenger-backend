import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";

import { FriendshipService } from "./friendship.service";
import { FriendshipModel } from "./models/friendship.model";

@Resolver("Friendship")
export class FriendshipResolver {
  private readonly pubSub: PubSub;

  constructor(private readonly friendshipService: FriendshipService) {
    this.pubSub = new PubSub();
  }

  @Authorization()
  @Query(() => [FriendshipModel], { name: "getFriends" })
  public async getFriends(@Authorized("id") userId: string) {
    return this.friendshipService.getFriends(userId);
  }

  @Authorization()
  @Query(() => [FriendshipModel], { name: "getIncomingFriendRequests" })
  public async getIncomingFriendRequests(@Authorized("id") userId: string) {
    return this.friendshipService.getIncomingRequests(userId);
  }

  @Authorization()
  @Query(() => [FriendshipModel], { name: "getOutgoingFriendRequests" })
  public async getOutgoingFriendRequests(@Authorized("id") userId: string) {
    return this.friendshipService.getOutgoingRequests(userId);
  }

  @Authorization()
  @Query(() => [FriendshipModel], { name: "getBlockedUsers" })
  public async getBlockedUsers(@Authorized("id") userId: string) {
    return this.friendshipService.getBlockedUsers(userId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "sendFriendRequestByUsername" })
  public async sendFriendRequestByUsername(
    @Authorized("id") userId: string,
    @Args("username") username: string
  ) {
    const friendship = await this.friendshipService.sendFriendRequestByUsername(
      userId,
      username
    );
    this.pubSub.publish("FRIEND_REQUEST_SENT", {
      friendRequestSent: friendship
    });
    return !!friendship;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "sendFriendRequest" })
  public async sendFriendRequest(
    @Authorized("id") userId: string,
    @Args("friendId") friendId: string
  ) {
    const friendship = await this.friendshipService.sendFriendRequest(
      userId,
      friendId
    );
    this.pubSub.publish("FRIEND_REQUEST_SENT", {
      friendRequestSent: friendship
    });
    return !!friendship;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "acceptFriendRequest" })
  public async acceptFriendRequest(
    @Authorized("id") userId: string,
    @Args("friendshipId") friendshipId: string
  ) {
    const friendship = await this.friendshipService.acceptFriendRequest(
      userId,
      friendshipId
    );
    this.pubSub.publish("FRIEND_REQUEST_ACCEPTED", {
      friendRequestAccepted: friendship
    });
    return !!friendship;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "declineFriendRequest" })
  public async declineFriendRequest(
    @Authorized("id") userId: string,
    @Args("friendshipId") friendshipId: string
  ) {
    const friendship = await this.friendshipService.declineFriendRequest(
      userId,
      friendshipId
    );
    this.pubSub.publish("FRIEND_REQUEST_DECLINED", {
      friendRequestDeclined: friendship
    });
    return !!friendship;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "cancelFriendRequest" })
  public async cancelFriendRequest(
    @Authorized("id") userId: string,
    @Args("friendshipId") friendshipId: string
  ) {
    const friendship = await this.friendshipService.cancelFriendRequest(
      userId,
      friendshipId
    );
    this.pubSub.publish("FRIEND_REQUEST_CANCELLED", {
      friendRequestCancelled: friendship
    });
    return !!friendship;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "removeFriend" })
  public async removeFriend(
    @Authorized("id") userId: string,
    @Args("friendshipId") friendshipId: string
  ) {
    const friendship = await this.friendshipService.removeFriend(
      userId,
      friendshipId
    );
    this.pubSub.publish("FRIEND_REMOVED", { friendRemoved: friendship });
    return !!friendship;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "blockUser" })
  public async blockUser(
    @Authorized("id") userId: string,
    @Args("targetUserId") targetUserId: string
  ) {
    const friendship = await this.friendshipService.blockUser(
      userId,
      targetUserId
    );
    this.pubSub.publish("USER_BLOCKED", { userBlocked: friendship });
    return !!friendship;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "unblockUser" })
  public async unblockUser(
    @Authorized("id") userId: string,
    @Args("friendshipId") friendshipId: string
  ) {
    const friendship = await this.friendshipService.unblockUser(
      userId,
      friendshipId
    );
    this.pubSub.publish("USER_UNBLOCKED", { userUnblocked: friendship });
    return !!friendship;
  }

  @Subscription(() => FriendshipModel, {
    name: "friendRequestSent",
    filter: (payload, variables) => {
      const f = payload.friendRequestSent;
      return f.userId === variables.userId || f.friendId === variables.userId;
    }
  })
  public friendRequestSent(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("FRIEND_REQUEST_SENT");
  }

  @Subscription(() => FriendshipModel, {
    name: "friendRequestAccepted",
    filter: (payload, variables) => {
      const f = payload.friendRequestAccepted;
      return f.userId === variables.userId || f.friendId === variables.userId;
    }
  })
  public friendRequestAccepted(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("FRIEND_REQUEST_ACCEPTED");
  }

  @Subscription(() => FriendshipModel, {
    name: "friendRequestDeclined",
    filter: (payload, variables) => {
      const f = payload.friendRequestDeclined;
      return f.userId === variables.userId || f.friendId === variables.userId;
    }
  })
  public friendRequestDeclined(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("FRIEND_REQUEST_DECLINED");
  }

  @Subscription(() => FriendshipModel, {
    name: "friendRequestCancelled",
    filter: (payload, variables) => {
      const f = payload.friendRequestCancelled;
      return f.userId === variables.userId || f.friendId === variables.userId;
    }
  })
  public friendRequestCancelled(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("FRIEND_REQUEST_CANCELLED");
  }

  @Subscription(() => FriendshipModel, {
    name: "friendRemoved",
    filter: (payload, variables) => {
      const f = payload.friendRemoved;
      return f.userId === variables.userId || f.friendId === variables.userId;
    }
  })
  public friendRemoved(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("FRIEND_REMOVED");
  }
}
