import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";
import { IsMemberChat } from "@/src/shared/decorators/chat/is-member-chat.decorator";

import { ChatService } from "./chat.service";
import { CreateChatInput } from "./inputs/create-chat.input";
import { FiltersInput } from "./inputs/filters.input";
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
  @IsMemberChat()
  @Query(() => ChatModel, { name: "findChatByChatId" })
  public async findChatByChatId(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.chatService.findChatByChatId(userId, chatId);
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
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "deleteChat" })
  public async deleteChat(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.chatService.deleteChat(userId, chatId);
  }
}
