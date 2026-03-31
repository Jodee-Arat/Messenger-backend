import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import e from "express";

import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";
import { IsMemberChat } from "@/src/shared/decorators/chat/is-member-chat.decorator";
import { appPubSub } from "@/src/shared/utils/pubsub.util";

import { FiltersInput } from "../../inputs/filters.input";
import { ChatModel } from "../models/chat.model";

import { RemoveMessagesInput } from "./inputs/remove-messages.input";
import { SendChatMessageInput } from "./inputs/send-chat-message.input";
import { MessageService } from "./message.service";
import { ChatMessageIdModel } from "./models/chat-message-id.model";
import { ChatMessageModel } from "./models/chat-message.model";
import { TypingIndicatorModel } from "./models/typing-indicator.model";

@Resolver("Message")
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}
  @Authorization()
  @IsMemberChat()
  @Query(() => [ChatMessageModel], { name: "findAllMessagesByChat" })
  public async findAllMessagesByChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("filters") input: FiltersInput
  ) {
    const messages = await this.messageService.findAllMessagesByChat(
      userId,
      chatId,
      input
    );

    return messages;
  }

  @Subscription(() => ChatMessageModel, {
    name: "chatMessageAdded",
    filter: (payload, variables, context) => {
      const isCorrectChat =
        payload.chatMessageAdded.chatId === variables.chatId;

      const isMemberChat = payload.chatMessageAdded.chat.members.some(
        (member) => member.userId === variables.userId
      );

      return isCorrectChat && isMemberChat;
    },
    async resolve(this: MessageResolver, value, args) {
      return value.chatMessageAdded;
    }
  })
  public chatMessageAdded(
    @Args("chatId") chatId: string,
    @Args("userId") userId: string
  ) {
    return appPubSub.asyncIterableIterator("CHAT_MESSAGE_ADDED");
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "sendChatMessage" })
  public async sendChatMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("data") input: SendChatMessageInput
  ) {
    const { message, chat } = await this.messageService.sendChatMessage(
      userId,
      chatId,
      input
    );

    appPubSub.publish("CHAT_MESSAGE_ADDED", {
      chatMessageAdded: message
    });

    for (const member of chat.members) {
      const hasDraft = chat.draftMessages?.some(
        (msg) => msg.user.id === member.userId
      );

      if (!hasDraft) {
        appPubSub.publish(`CHAT_UPDATED_${member.userId}`, {
          chatUpdated: { ...chat, draftMessages: null }
        });
      }
    }

    return message ? true : false;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "forwardChatMessage" })
  public async forwardChatMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("data") input: SendChatMessageInput
  ) {
    const { messages, chats } = await this.messageService.forwardChatMessage(
      userId,
      chatId,
      input
    );
    if (messages.length > 0) {
      for (let message of messages) {
        appPubSub.publish("CHAT_MESSAGE_ADDED", {
          chatMessageAdded: message
        });
      }
      for (let chat of chats) {
        for (const member of chat.members) {
          appPubSub.publish(`CHAT_UPDATED_${member.userId}`, {
            chatUpdated: { ...chat, draftMessages: null }
          });
        }
      }
    }

    return messages ? true : false;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "sendChatDraftMessage" })
  public async sendChatDraftMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("data") input: SendChatMessageInput
  ) {
    const { draftMessage, chat } =
      await this.messageService.sendChatDraftMessage(userId, chatId, input);
    appPubSub.publish(`CHAT_UPDATED_${draftMessage.userId}`, {
      chatUpdated: chat
    });

    return draftMessage ? true : false;
  }

  @Subscription(() => [ChatMessageIdModel], {
    name: "chatMessageRemoved",
    filter: (payload, variables) => {
      const isCorrectChat =
        payload.chatMessageRemoved.chat.id === variables.chatId;

      const isMemberChat = payload.chatMessageRemoved.chat.members.some(
        (member) => member.userId === variables.userId
      );

      return isCorrectChat && isMemberChat;
    },
    async resolve(value, args) {
      const messagesId = value.chatMessageRemoved.messageIds.map((id) => ({
        id
      }));
      return messagesId;
    }
  })
  public chatMessageRemoved(
    @Args("chatId") chatId: string,
    @Args("userId") userId: string
  ) {
    return appPubSub.asyncIterableIterator("CHAT_MESSAGE_REMOVED");
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "removeMessages" })
  async removeMessages(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("data") input: RemoveMessagesInput
  ) {
    const { messageIds, chat } = await this.messageService.removeMessages(
      userId,
      chatId,
      input
    );

    appPubSub.publish("CHAT_MESSAGE_REMOVED", {
      chatMessageRemoved: { messageIds, chat }
    });

    return messageIds.length > 0 ? true : false;
  }

  @Subscription(() => ChatModel, {
    name: "chatUpdated",
    filter: (payload, variables) => {
      let isCorrectUser = false;
      let chat = payload.chatUpdated;

      for (const users of chat.members) {
        if (users.userId === variables.userId) {
          isCorrectUser = true;
          break;
        }
      }

      return isCorrectUser;
    }
  })
  public chatUpdated(@Args("userId") userId: string) {
    return appPubSub.asyncIterableIterator(`CHAT_UPDATED_${userId}`);
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "removeDraft" })
  public async removeDraft(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    const messageDraft = await this.messageService.removeDraftMessage(
      userId,
      chatId
    );
    return !!messageDraft;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "startTyping" })
  public async startTyping(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    const user = await this.messageService.findUserById(userId);
    if (!user) return false;

    appPubSub.publish(`TYPING_${chatId}`, {
      typingStarted: {
        userId,
        username: user.username,
        chatId
      }
    });

    return true;
  }

  @Subscription(() => TypingIndicatorModel, {
    name: "typingStarted",
    filter: (payload, variables) => {
      // Не отправлять событие самому печатающему
      return payload.typingStarted.userId !== variables.userId;
    }
  })
  public typingStarted(
    @Args("chatId") chatId: string,
    @Args("userId") userId: string
  ) {
    return appPubSub.asyncIterableIterator(`TYPING_${chatId}`);
  }
}
