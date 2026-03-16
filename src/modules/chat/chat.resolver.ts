import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { GraphQLUpload, Upload } from "graphql-upload";

import { User } from "@/prisma/generated";
import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";
import { IsMemberChat } from "@/src/shared/decorators/chat/is-member-chat.decorator";
import { FileValidationPipe } from "@/src/shared/pipes/file-validation.pipe";

import { FiltersInput } from "../inputs/filters.input";

import { ChatService } from "./chat.service";
import { ChangeChatInfoInput } from "./inputs/change-chat-info.input";
import { CreateChatInput } from "./inputs/create-chat.input";
import { ChatModel } from "./models/chat.model";
import { SecretKeyRotationModel } from "./models/secret-key-rotation.model";

@Resolver("Chat")
export class ChatResolver {
  private readonly pubSub: PubSub;
  constructor(private readonly chatService: ChatService) {
    this.pubSub = new PubSub();
  }

  @Authorization()
  @Query(() => Boolean, { name: "checkChatAccess" })
  public async checkChatAccess(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.chatService.checkChatAccess(userId, chatId);
  }

  @Authorization()
  @Query(() => [ChatModel], { name: "findAllChatsByGroup" })
  public async findAllChatsByGroup(
    @Authorized("id") userId: string,
    @Args("groupId") groupId: string,
    @Args("filters") input: FiltersInput
  ) {
    return await this.chatService.findAllChatsByGroup(userId, groupId, input);
  }

  @Authorization()
  @Query(() => [ChatModel], { name: "findAllChatsByUser" })
  public async findAllChatsByUser(
    @Authorized("id") userId: string,
    @Args("filters") input: FiltersInput
  ) {
    return await this.chatService.findAllChatsByUser(userId, input);
  }

  @Authorization()
  @IsMemberChat()
  @Query(() => ChatModel, { name: "findChatByChatId" })
  public async findChatByChatId(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.chatService.findChatByChatId(userId, chatId);
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => String, { name: "changeChatAvatar" })
  public async changeAvatar(
    @Authorized() user: User,
    @Args("chatId") chatId: string,
    @Args("avatar", { type: () => GraphQLUpload }, FileValidationPipe)
    avatar: Upload
  ) {
    return this.chatService.changeAvatar(user, chatId, avatar);
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "removeChatAvatar" })
  public async removeAvatar(
    @Authorized() user: User,
    @Args("chatId") chatId: string
  ) {
    return this.chatService.removeAvatar(user, chatId);
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "changeChatInfo" })
  public async changeChatInfo(
    @Authorized() user: User,
    @Args("chatId") chatId: string,
    @Args("data") input: ChangeChatInfoInput
  ) {
    return this.chatService.changeInfo(user, chatId, input);
  }

  @Subscription(() => ChatModel, {
    name: "chatAdded",
    filter: (payload, variables) => {
      let isCorrectUser = false;
      let isCorrectGroup = false;

      if (payload.chatAdded.groupId === variables.groupId) {
        isCorrectGroup = true;
      }

      for (const users of payload.chatAdded.members) {
        if (users.userId === variables.userId) {
          isCorrectUser = true;
          break;
        }
      }

      return isCorrectUser && isCorrectGroup;
    }
  })
  public chatAdded(
    @Args("userId") userId: string,
    @Args("groupId") groupId: string
  ) {
    return this.pubSub.asyncIterableIterator("CHAT_ADDED");
  }

  @Subscription(() => ChatModel, {
    name: "chatDeleted",
    filter: (payload, variables) => {
      let isCorrectUser = false;
      let isCorrectGroup = false;

      if (payload.chatDeleted.groupId === variables.groupId) {
        isCorrectGroup = true;
      }

      for (const users of payload.chatDeleted.members) {
        if (users.userId === variables.userId) {
          isCorrectUser = true;
          break;
        }
      }

      return isCorrectUser && isCorrectGroup;
    }
  })
  public chatDeleted(
    @Args("userId") userId: string,
    @Args("groupId") groupId: string
  ) {
    return this.pubSub.asyncIterableIterator("CHAT_DELETED");
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "deleteChat" })
  public async deleteChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    const chat = await this.chatService.deleteChat(userId, chatId);

    this.pubSub.publish("CHAT_DELETED", {
      chatDeleted: chat
    });
    return chat ? true : false;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "leaveChat" })
  public async leaveChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    const chat = await this.chatService.leaveChat(userId, chatId);

    if (chat && chat.isSecret) {
      await this.chatService.clearChatSharedKeys(chatId);
      this.pubSub.publish("SECRET_KEY_ROTATION", {
        secretKeyRotation: { chatId, members: chat.members }
      });
    }

    return chat ? true : false;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "inviteMemberToChat" })
  public async inviteMemberToChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("targetUserId") targetUserId: string
  ) {
    const chat = await this.chatService.inviteMember(
      userId,
      chatId,
      targetUserId
    );
    return chat ? true : false;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "removeMemberFromChat" })
  public async removeMemberFromChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("targetUserId") targetUserId: string
  ) {
    const chat = await this.chatService.removeMember(
      userId,
      chatId,
      targetUserId
    );

    if (chat && chat.isSecret) {
      await this.chatService.clearChatSharedKeys(chatId);
      this.pubSub.publish("SECRET_KEY_ROTATION", {
        secretKeyRotation: { chatId, members: chat.members }
      });
    }

    return chat ? true : false;
  }

  @Authorization()
  @Mutation(() => ChatModel, { name: "findOrCreateDirectChat" })
  public async findOrCreateDirectChat(
    @Authorized("id") userId: string,
    @Args("friendUserId") friendUserId: string,
    @Args("isSecret", { nullable: true, defaultValue: false }) isSecret: boolean
  ) {
    return await this.chatService.findOrCreateDirectChat(
      userId,
      friendUserId,
      isSecret
    );
  }

  @Authorization()
  @Mutation(() => ChatModel, { name: "createChat" })
  public async createChat(
    @Authorized("id") creatorId: string,
    @Args("groupId") groupId: string,
    @Args("data") input: CreateChatInput
  ) {
    const chat = await this.chatService.createChat(creatorId, groupId, input);

    this.pubSub.publish("CHAT_ADDED", {
      chatAdded: chat
    });

    return chat;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "pinMessage" })
  public async pinMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("messageId") messageId: string
  ) {
    return await this.chatService.pinMessage(userId, chatId, messageId);
  }
  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "unPinMessage" })
  public async unPinMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.chatService.unPinMessage(userId, chatId);
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "pinChat" })
  public async pinChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.chatService.pinChat(userId, chatId);
  }
  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "unPinChat" })
  public async unPinChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.chatService.unPinChat(userId, chatId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "updatePinnedChatsOrder" })
  public async updatePinnedChatsOrder(
    @Authorized("id") userId: string,
    @Args("chatIds", { type: () => [String] }) chatIds: string[]
  ) {
    return await this.chatService.updatePinnedChatsOrder(userId, chatIds);
  }

  @Subscription(() => SecretKeyRotationModel, {
    name: "secretKeyRotation",
    filter: (payload, variables) => {
      const members = payload.secretKeyRotation.members || [];
      return members.some((m: any) => m.userId === variables.userId);
    }
  })
  public secretKeyRotation(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("SECRET_KEY_ROTATION");
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "toggleChatRequireTotp" })
  public async toggleChatRequireTotp(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("enable") enable: boolean
  ) {
    return await this.chatService.toggleRequireTotp(userId, chatId, enable);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "verifyChatTotp" })
  public async verifyChatTotp(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("code") code: string
  ) {
    return await this.chatService.verifyChatTotp(userId, chatId, code);
  }
}
