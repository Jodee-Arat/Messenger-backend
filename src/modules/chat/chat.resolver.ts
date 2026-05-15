import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { GraphQLUpload, Upload } from "graphql-upload";

import { User } from "@prisma/client";
import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";
import { IsMemberChat } from "@/src/shared/decorators/chat/is-member-chat.decorator";
import { FileValidationPipe } from "@/src/shared/pipes/file-validation.pipe";
import { appPubSub } from "@/src/shared/utils/pubsub.util";

import { FiltersInput } from "../inputs/filters.input";

import { ChatService } from "./chat.service";
import { ChangeChatInfoInput } from "./inputs/change-chat-info.input";
import { CreateChatInput } from "./inputs/create-chat.input";
import { ChatModel } from "./models/chat.model";
import { SecretKeyRotationModel } from "./models/secret-key-rotation.model";

@Resolver("Chat")
export class ChatResolver {
  constructor(private readonly chatService: ChatService) {}

  private async publishChatAdded(chatId: string) {
    const chat = await this.chatService.getChatUpdatedBroadcastPayload(chatId);
    if (!chat) return;

    await appPubSub.publish("CHAT_ADDED", {
      chatAdded: {
        ...chat,
        draftMessages: null,
        pinnedMessageId: null
      }
    });
  }

  private async publishChatUpdated(chatId: string) {
    const chat = await this.chatService.getChatUpdatedBroadcastPayload(chatId);
    if (!chat) return;

    const memberPinnedIds =
      await this.chatService.getMemberPinnedMessageIds(chatId);

    for (const member of chat.members) {
      const pinnedMessageId = memberPinnedIds[member.userId] ?? null;
      await appPubSub.publish(`CHAT_UPDATED_${member.userId}`, {
        chatUpdated: {
          ...chat,
          pinnedMessageId,
          draftMessages: null
        }
      });
    }
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
    const result = await this.chatService.changeAvatar(user, chatId, avatar);
    await this.publishChatUpdated(chatId);
    return result;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "removeChatAvatar" })
  public async removeAvatar(
    @Authorized() user: User,
    @Args("chatId") chatId: string
  ) {
    const result = await this.chatService.removeAvatar(user, chatId);

    if (result) {
      await this.publishChatUpdated(chatId);
    }

    return result;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "changeChatInfo" })
  public async changeChatInfo(
    @Authorized() user: User,
    @Args("chatId") chatId: string,
    @Args("data") input: ChangeChatInfoInput
  ) {
    const result = await this.chatService.changeInfo(user, chatId, input);

    if (result) {
      await this.publishChatUpdated(chatId);
    }

    return result;
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
    return appPubSub.asyncIterableIterator("CHAT_ADDED");
  }

  @Subscription(() => ChatModel, {
    name: "chatDeleted",
    filter: (payload, variables) => {
      let isCorrectUser = false;
      let isCorrectGroup = false;

      const payloadGroupId = payload.chatDeleted.groupId ?? "";
      const requestedGroupId = variables.groupId ?? "";

      if (payloadGroupId === requestedGroupId) {
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
    return appPubSub.asyncIterableIterator("CHAT_DELETED");
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "deleteChat" })
  public async deleteChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    const chat = await this.chatService.deleteChat(userId, chatId);

    appPubSub.publish("CHAT_DELETED", {
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
    const { chat, leaveMessage, updatedChat } =
      await this.chatService.leaveChat(userId, chatId);

    if (leaveMessage) {
      appPubSub.publish("CHAT_MESSAGE_ADDED", {
        chatMessageAdded: leaveMessage
      });
    }

    if (chat?.groupId) {
      appPubSub.publish("CHAT_DELETED", {
        chatDeleted: {
          id: chat.id,
          isSecret: chat.isSecret,
          groupId: chat.groupId,
          members: [{ userId }]
        }
      });
    }

    if (updatedChat) {
      for (const member of updatedChat.members) {
        const hasDraft = updatedChat.draftMessages?.some(
          (msg) => msg.user.id === member.userId
        );

        if (!hasDraft) {
          appPubSub.publish(`CHAT_UPDATED_${member.userId}`, {
            chatUpdated: { ...updatedChat, draftMessages: null }
          });
        }
      }
    }

    if (chat && chat.isSecret) {
      await this.chatService.clearChatSharedKeys(chatId);
      appPubSub.publish("SECRET_KEY_ROTATION", {
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

    if (chat) {
      await this.publishChatAdded(chat.id);
    }

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
      appPubSub.publish("SECRET_KEY_ROTATION", {
        secretKeyRotation: { chatId, members: chat.members }
      });
    }

    if (chat?.groupId) {
      appPubSub.publish("CHAT_DELETED", {
        chatDeleted: {
          id: chat.id,
          isSecret: chat.isSecret,
          groupId: chat.groupId,
          members: [{ userId: targetUserId }]
        }
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
    const chat = await this.chatService.findOrCreateDirectChat(
      userId,
      friendUserId,
      isSecret
    );

    // Notify the other user so the chat appears in their DM list
    for (const member of chat.members) {
      if (member.userId !== userId) {
        await appPubSub.publish(`CHAT_UPDATED_${member.userId}`, {
          chatUpdated: chat
        });
      }
    }

    return chat;
  }

  @Authorization()
  @Mutation(() => ChatModel, { name: "createChat" })
  public async createChat(
    @Authorized("id") creatorId: string,
    @Args("groupId") groupId: string,
    @Args("data") input: CreateChatInput
  ) {
    const chat = await this.chatService.createChat(creatorId, groupId, input);

    appPubSub.publish("CHAT_ADDED", {
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
    const result = await this.chatService.pinMessage(userId, chatId, messageId);

    if (result) {
      await this.publishChatUpdated(chatId);
    }

    return result;
  }
  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "unPinMessage" })
  public async unPinMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    const result = await this.chatService.unPinMessage(userId, chatId);

    if (result) {
      await this.publishChatUpdated(chatId);
    }

    return result;
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
    return appPubSub.asyncIterableIterator("SECRET_KEY_ROTATION");
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
