import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";

import { CreateSecretChatInput } from "./input/create-secret-chat.input";
import { PreKeyInput } from "./input/preKey.input";
import { SendSecretMessageInput } from "./input/send-secret-message.input";
import { SharedSecretKeyInput } from "./input/shared-secret-key.input";
// import { MetadataChatModel } from "./models/metadata-chat.model";
import { PreKeyModel } from "./models/preKey.model";
// import { QueueActionModel } from "./models/queue-action.model";
import { QueueSecretMessageModel } from "./models/queue-secret-message.model";
import { QueueSharedSecretKeyModel } from "./models/queue-shared-secret-key.model";
import { SecretService } from "./secret.service";

@Resolver("Secret")
export class SecretResolver {
  private readonly pubSub: PubSub;
  constructor(private readonly secretService: SecretService) {
    this.pubSub = new PubSub();
  }

  @Authorization()
  @Query(() => [PreKeyModel], { name: "getPreKeys" })
  public async getPreKeys(
    @Authorized("id") fromUserId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.secretService.getPreKeys(chatId, fromUserId);
  }

  @Authorization()
  @Query(() => [QueueSharedSecretKeyModel], { name: "getSharedSecretKey" })
  public async getSharedSecretKey(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.secretService.getSharedSecretKey(userId, chatId);
  }
  @Authorization()
  @Query(() => QueueSecretMessageModel, {
    name: "getSecretMessage"
  })
  public async getSecretMessage(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.secretService.getSecretMessage(userId, chatId);
  }

  // @Authorization()
  // @Mutation(() => Boolean, { name: "deleteAllPreKeys" })
  // public async deleteAllPreKeys(@Authorized('id') userId: string) {
  //   return await this.secretService.deleteAllPreKeys(userId);
  // } написал я это в один день, во второй забыл зачем написал, мб случайно

  // @Authorization()
  // @Mutation(() => Boolean, { name: "regeneratePreKeys" })
  // public async regeneratePreKeys(@Authorized() user: User) {
  //   return await this.secretService.regeneratePreKeys(user);
  // } аналогично

  @Authorization()
  @Mutation(() => Boolean, { name: "sendPreKey" })
  public async sendPreKey(
    @Authorized("id") userId: string,
    @Args("data") input: PreKeyInput
  ) {
    return await this.secretService.sendPreKey(userId, input);
  }

  // @Authorization()
  // @Mutation(() => Boolean, { name: "createSecretChat" })
  // public async createSecretChat(
  //   @Authorized("id") userId: string,
  //   @Args("data") input: CreateSecretChatInput
  // ) {
  //   const newChat = await this.secretService.createSecretChat(userId, input);
  //   this.pubSub.publish("CREATE_SECRET_CHAT", {
  //     secretChat: newChat
  //   });
  //   return newChat ? true : false;
  // }

  @Authorization()
  @Mutation(() => QueueSharedSecretKeyModel, { name: "sendSharedSecretKey" })
  public async sendSharedSecretKey(
    @Authorized("id") fromUserId: string,
    @Args("data") input: SharedSecretKeyInput
  ) {
    const sharedSecretKey = await this.secretService.sendSharedSecretKey(
      fromUserId,
      input
    );
    this.pubSub.publish("ADD_SHARED_SECRET_KEY", {
      sharedKey: sharedSecretKey
    });

    return sharedSecretKey;
    //  ? true : false;
  }

  @Authorization()
  @Mutation(() => QueueSecretMessageModel, { name: "sendSecretMessage" })
  public async sendSecretMessage(
    @Authorized("id") fromUserId: string,
    @Args("data") input: SendSecretMessageInput
  ) {
    const secretMessage = await this.secretService.sendSecretMessage(
      fromUserId,
      input
    );

    this.pubSub.publish("ADD_SECRET_MESSAGE", {
      addSecretMessage: secretMessage,
      self: this
    });
    return secretMessage;
    // ? true : false;
  }

  @Subscription(() => QueueSharedSecretKeyModel, {
    name: "addSharedSecretKey",
    nullable: true,
    filter: (payload, variables) => {
      return payload.sharedKey.toUserId === variables.userId;
    }
  })
  public addSharedSecretKey(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("ADD_SHARED_SECRET_KEY");
  }
  @Subscription(() => QueueSecretMessageModel, {
    name: "addSecretMessage",
    filter: (payload, variables) => {
      let isCorrectUser = false;

      for (const userId of payload.addSecretMessage.toUserIds) {
        if (userId === variables.userId) {
          isCorrectUser = true;
        }
      }
      if (isCorrectUser) {
        payload.self.secretService.updateSecretMessageForReader(
          variables.userId,
          payload.addSecretMessage.chatId
        );
      }
      return isCorrectUser;
    }
  })
  public addSecretMessage(@Args("userId") userId: string) {
    return this.pubSub.asyncIterableIterator("ADD_SECRET_MESSAGE");
  }
  // @Subscription(() => QueueActionModel, {
  //   name: "addSecretChat",
  //   filter: (payload, variables) => {
  //     let isCorrectUser = false;
  //     const metadataObject: MetadataChatModel = JSON.parse(
  //       payload.secretChat.metadata
  //     );

  //     for (const user of metadataObject.members) {
  //       if (user.id === variables.userId) {
  //         isCorrectUser = true;
  //       }
  //     }
  //     return isCorrectUser;
  //   }
  // })
  // public addSecretChat(@Args("userId") userId: string) {
  //   return this.pubSub.asyncIterableIterator("CREATE_SECRET_CHAT");
  // }
}
