import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { GraphQLUpload, Upload } from "graphql-upload";

import { User } from "@/prisma/generated";
import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";
import { IsMemberChat } from "@/src/shared/decorators/chat/is-member-chat.decorator";
import { IsMemberGroup } from "@/src/shared/decorators/group/is-member-group.decorator";
import { FileValidationPipe } from "@/src/shared/pipes/file-validation.pipe";

import { FiltersInput } from "../inputs/filters.input";

import { ChatService } from "./chat.service";
import { ChangeChatInfoInput } from "./inputs/change-group-info.input";
import { CreateChatInput } from "./inputs/create-chat.input";
import { ChatModel } from "./models/chat.model";

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
  @IsMemberGroup()
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
}
