import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { GraphQLUpload, Upload } from "graphql-upload";

import { User } from "@/prisma/generated";
import { Authorization } from "@/src/shared/decorators/auth.decorator";
import { Authorized } from "@/src/shared/decorators/authorized.decorator";
import { FileValidationPipe } from "@/src/shared/pipes/file-validation.pipe";

import { ChatService } from "./chat.service";
import { CreateChatInput } from "./inputs/create-chat.input";
import { FiltersInput } from "./inputs/filters.input";
import { RemoveMessagesInput } from "./inputs/remove-messages.input";
import { SendChatMessageInput } from "./inputs/send-chat-message.input";
import { SendFileInput } from "./inputs/send-file.input";
import { AttachFileModel } from "./models/attach-file.model";
import { ChatMessageModel } from "./models/chat-message.model";
import { ChatModel } from "./models/chat.model";
import { FileDownloadData } from "./models/file-download-data";

@Resolver("Chat")
export class ChatResolver {
  private readonly pubSub: PubSub;
  constructor(private readonly chatService: ChatService) {
    this.pubSub = new PubSub();
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
  @Query(() => ChatModel, { name: "findChatByChatId" })
  public async findChatByChatId(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.chatService.findChatByChatId(userId, chatId);
  }

  @Authorization()
  @Query(() => [ChatMessageModel], { name: "findAllMessagesByChat" })
  public async findAllMessagesByChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("filters") input: FiltersInput
  ) {
    const messages = await this.chatService.findAllMessagesByChat(
      userId,
      chatId,
      input
    );

    return messages;
  }

  @Subscription(() => ChatMessageModel, {
    name: "chatMessageAdded",
    filter: (payload, variables) => {
      const isCorrectChat =
        payload.chatMessageAdded.chatId === variables.chatId;

      return isCorrectChat;
    },
    async resolve(this: ChatResolver, value, args) {
      if (value.chatMessageAdded.text !== null) {
        const encryptMessage = await this.chatService.encryptMessage(
          value.chatMessageAdded.text,
          args.userId,
          args.chatId,
          value.chatMessageAdded.isFake
        );

        return {
          ...value.chatMessageAdded,
          text: encryptMessage.encryptedText,
          hash: encryptMessage.encryptedHash
        };
      }

      return { ...value.chatMessageAdded, text: "null", hash: ["null"] };
    }
  })
  public chatMessageAdded(
    @Args("chatId") chatId: string,
    @Args("userId") userId: string
  ) {
    return this.pubSub.asyncIterableIterator("CHAT_MESSAGE_ADDED");
  }

  @Subscription(() => ChatModel, {
    name: "chatAdded",
    filter: (payload, variables) => {
      let isCorrectUser = false;

      for (const users of payload.chatAdded.members) {
        if (users.userId === variables.userId) {
          isCorrectUser = true;
          break;
        }
      }

      return isCorrectUser;
    }
  })
  public chatAdded(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("CHAT_ADDED");
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "sendChatMessage" })
  public async sendChatMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("data") input: SendChatMessageInput
  ) {
    const message = await this.chatService.sendChatMessage(
      userId,
      chatId,
      input
    );

    this.pubSub.publish("CHAT_MESSAGE_ADDED", {
      chatMessageAdded: message
    });

    return message ? true : false;
  }

  @Authorization()
  @Mutation(() => ChatModel, { name: "createChat" })
  public async createChat(
    @Authorized("id") creatorId: string,
    @Args("data") input: CreateChatInput
  ) {
    const chat = await this.chatService.createChat(creatorId, input);

    this.pubSub.publish("CHAT_ADDED", {
      chatAdded: chat
    });

    return chat;
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "deleteChat" })
  public async deleteChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.chatService.deleteChat(userId, chatId);
  }

  @Mutation(() => AttachFileModel, { name: "sendFile" })
  @Authorization()
  async sendFile(
    @Authorized() user: User,
    @Args("chatId") chatId: string,
    @Args("file", { type: () => GraphQLUpload }, FileValidationPipe)
    file: Upload,
    @Args("data") input: SendFileInput,
    @Args("messageId", { nullable: true }) messageId?: string
  ) {
    return this.chatService.sendFile(user, chatId, file, input, messageId);
  }

  @Mutation(() => Boolean, { name: "removeMessages" })
  @Authorization()
  async removeMessages(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("data") input: RemoveMessagesInput
  ) {
    return this.chatService.removeMessages(userId, chatId, input);
  }

  @Mutation(() => Boolean, { name: "removeFile" })
  @Authorization()
  async removeFile(@Args("fileId") fileId: string) {
    return this.chatService.removeFile(fileId);
  }

  @Mutation(() => FileDownloadData, { name: "downloadFile" })
  @Authorization()
  async downloadFile(
    @Args("fileId") fileId: string,
    @Authorized("id") userId: string
  ) {
    return this.chatService.downloadFile(fileId, userId);
  }
}
