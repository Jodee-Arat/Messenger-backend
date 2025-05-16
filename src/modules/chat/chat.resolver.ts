import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Authorization } from "@/src/shared/decorators/auth.decorator";
import { Authorized } from "@/src/shared/decorators/authorized.decorator";

import { ChatService } from "./chat.service";
import { CreateChatInput } from "./inputs/create-chat.input";
import { FiltersInput } from "./inputs/filters.input";
import { SendChatMessageInput } from "./inputs/send-chat-message.input";
import { ChatMessageModel } from "./models/chat-message.model";
import { ChatModel } from "./models/chat.model";

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
  @Query(() => [ChatMessageModel], { name: "findAllMessagesByChat" })
  public async findAllMessagesByChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("filters") input: FiltersInput
  ) {
    return await this.chatService.findAllMessagesByChat(userId, chatId, input);
  }

  // @Authorization()
  @Subscription(() => ChatMessageModel, {
    name: "chatMessageAdded",
    filter: (payload, variables) => {
      // Сделать потом проверку на то, что пользователь состоит в чате, а то будут перехоидть по разным чатам через ссылки( и вообще такой функционал везде добавить)

      // const userId = context.user?.id;
      // const chatId = variables.chatId;

      // if (!userId || !chatId) return false;
      // const chat = await context.prisma.chat.findUnique({
      //   where: { id: chatId },
      //   select: {
      //     members: {
      //       where: { userId }
      //     }
      //   }
      // });

      // const isMember = chat?.members?.length > 0;
      const isCorrectChat =
        payload.chatMessageAdded.chatId === variables.chatId;

      // return isMember && isCorrectChat;
      return isCorrectChat;
    }
  })
  public chatMessageAdded(@Args("chatId") chatId: string) {
    return this.pubSub.asyncIterableIterator("CHAT_MESSAGE_ADDED");
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "createChat" })
  public async createChat(
    @Authorized("id") creatorId: string,
    @Args("data") input: CreateChatInput
  ) {
    return await this.chatService.createChat(creatorId, input);
  }

  @Authorization()
  @Mutation(() => ChatMessageModel, { name: "sendChatMessage" })
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

    this.pubSub.publish("CHAT_MESSAGE_ADDED", { chatMessageAdded: message });

    return message;
  }
}
