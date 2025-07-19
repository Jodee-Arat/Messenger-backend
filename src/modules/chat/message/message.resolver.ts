import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";
import { IsMemberChat } from "@/src/shared/decorators/chat/is-member-chat.decorator";

import { FiltersInput } from "../inputs/filters.input";
import { ChatModel } from "../models/chat.model";

import { RemoveMessagesInput } from "./inputs/remove-messages.input";
import { SendChatMessageInput } from "./inputs/send-chat-message.input";
import { MessageService } from "./message.service";
import { ChatMessageIdModel } from "./models/chat-message-id.model";
import { ChatMessageModel } from "./models/chat-message.model";

@Resolver("Message")
export class MessageResolver {
  private readonly pubSub: PubSub;
  constructor(private readonly messageService: MessageService) {
    this.pubSub = new PubSub();
  }
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
    return this.pubSub.asyncIterableIterator("CHAT_MESSAGE_ADDED");
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

    this.pubSub.publish("CHAT_MESSAGE_ADDED", {
      chatMessageAdded: message
    });

    for (const member of chat.members) {
      const hasDraft = chat.draftMessages?.some(
        (msg) => msg.user.id === member.userId
      );

      if (!hasDraft) {
        this.pubSub.publish(`CHAT_UPDATED_${member.userId}`, {
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
    const { message, chat } = await this.messageService.forwardChatMessage(
      userId,
      chatId,
      input
    );

    this.pubSub.publish("CHAT_MESSAGE_ADDED", {
      chatMessageAdded: message
    });

    for (const member of chat.members) {
      const hasDraft = chat.draftMessages?.some(
        (msg) => msg.user.id === member.userId
      );

      if (!hasDraft) {
        this.pubSub.publish(`CHAT_UPDATED_${member.userId}`, {
          chatUpdated: { ...chat, draftMessages: null }
        });
      }
    }

    return message ? true : false;
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "sendChatDraftMessage" })
  public async sendChatDraftMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("data") input: SendChatMessageInput
  ) {
    const { message, chat } = await this.messageService.sendChatDraftMessage(
      userId,
      chatId,
      input
    );
    this.pubSub.publish(`CHAT_UPDATED_${message.userId}`, {
      chatUpdated: chat
    });

    return message ? true : false;
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
    return this.pubSub.asyncIterableIterator("CHAT_MESSAGE_REMOVED");
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

    this.pubSub.publish("CHAT_MESSAGE_REMOVED", {
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
    return this.pubSub.asyncIterableIterator(`CHAT_UPDATED_${userId}`);
  }

  @Subscription(() => ChatMessageModel, {
    name: "chatMessageEdit",
    filter: (payload, variables, context) => {
      const isCorrectChat =
        payload.chatMessageEdited.chatId === variables.chatId;

      const isMemberChat = payload.chatMessageEdited.chat.members.some(
        (member) => member.userId === variables.userId
      );

      return isCorrectChat && isMemberChat;
    },
    async resolve(this: MessageResolver, value, args) {
      return value.chatMessageEdited;
    }
  })
  public chatMessageEdit(
    @Args("chatId") chatId: string,
    @Args("userId") userId: string
  ) {
    return this.pubSub.asyncIterableIterator("CHAT_MESSAGE_EDIT");
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "editChatMessage" })
  public async editChatMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("messageId") messageId: string,
    @Args("data") input: SendChatMessageInput
  ) {
    const { message, chat } = await this.messageService.editChatMessage(
      userId,
      chatId,
      messageId,
      input
    );

    this.pubSub.publish("CHAT_MESSAGE_EDIT", {
      chatMessageEdited: message
    });

    this.pubSub.publish(`CHAT_UPDATED_${message.userId}`, {
      chatUpdated: chat
    });

    return message ? true : false;
  }
}
