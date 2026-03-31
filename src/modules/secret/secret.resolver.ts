import {
  ForbiddenException
} from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";

import { PreKeyInput } from "./input/preKey.input";
import { SendSecretMessageInput } from "./input/send-secret-message.input";
import { SharedSecretKeyInput } from "./input/shared-secret-key.input";
import { UploadSecretAttachmentInput } from "./input/upload-secret-attachment.input";
import { PreKeyModel } from "./models/preKey.model";
import { QueueSecretMessageModel } from "./models/queue-secret-message.model";
import { QueueSharedSecretKeyModel } from "./models/queue-shared-secret-key.model";
import { SecretAttachmentDownloadModel } from "./models/secret-attachment-download.model";
import { SecretAttachmentModel } from "./models/secret-attachment.model";
import { SecretService } from "./secret.service";

@Resolver("Secret")
export class SecretResolver {
  private readonly pubSub: PubSub;

  public constructor(private readonly secretService: SecretService) {
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
  @Query(() => Boolean, { name: "hasSharedSecretKey" })
  public async hasSharedSecretKey(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.secretService.hasSharedSecretKey(userId, chatId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "ackSharedSecretKeys" })
  public async ackSharedSecretKeys(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("sharedKeyIds", { type: () => [String] }) sharedKeyIds: string[]
  ) {
    return await this.secretService.ackSharedSecretKeys(
      userId,
      chatId,
      sharedKeyIds
    );
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

  @Authorization()
  @Query(() => [QueueSecretMessageModel], {
    name: "getSecretMessages"
  })
  public async getSecretMessages(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return await this.secretService.getSecretMessages(userId, chatId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "ackSecretMessages" })
  public async ackSecretMessages(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("messageIds", { type: () => [String] }) messageIds: string[]
  ) {
    return await this.secretService.ackSecretMessages(
      userId,
      chatId,
      messageIds
    );
  }

  @Authorization()
  @Mutation(() => SecretAttachmentModel, { name: "uploadSecretAttachment" })
  public async uploadSecretAttachment(
    @Authorized("id") userId: string,
    @Args("data") input: UploadSecretAttachmentInput
  ) {
    return await this.secretService.uploadSecretAttachment(userId, input);
  }

  @Authorization()
  @Mutation(() => SecretAttachmentDownloadModel, {
    name: "downloadSecretAttachment"
  })
  public async downloadSecretAttachment(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("attachmentId") attachmentId: string
  ) {
    return await this.secretService.downloadSecretAttachment(
      userId,
      chatId,
      attachmentId
    );
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "discardSecretAttachment" })
  public async discardSecretAttachment(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("attachmentId") attachmentId: string
  ) {
    return await this.secretService.discardSecretAttachment(
      userId,
      chatId,
      attachmentId
    );
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "sendPreKey" })
  public async sendPreKey(
    @Authorized("id") userId: string,
    @Args("data") input: PreKeyInput
  ) {
    return await this.secretService.sendPreKey(userId, input);
  }

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

    await this.pubSub.publish(`ADD_SHARED_SECRET_KEY_${input.toUserId}`, {
      sharedKey: sharedSecretKey
    });

    return sharedSecretKey;
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

    for (const recipientUserId of Array.from(new Set(secretMessage.toUserIds))) {
      await this.pubSub.publish(`ADD_SECRET_MESSAGE_${recipientUserId}`, {
        addSecretMessage: secretMessage,
        recipientUserId,
        self: this
      });
    }

    return secretMessage;
  }

  @Authorization()
  @Subscription(() => QueueSharedSecretKeyModel, {
    name: "addSharedSecretKey",
    nullable: true,
    filter: (payload, variables) => {
      return payload.sharedKey.toUserId === variables.userId;
    }
  })
  public addSharedSecretKey(
    @Authorized("id") authorizedUserId: string,
    @Args("userId") userId: string
  ) {
    this.assertAuthorizedSubscriptionUser(authorizedUserId, userId);
    return this.pubSub.asyncIterableIterator(
      `ADD_SHARED_SECRET_KEY_${authorizedUserId}`
    );
  }

  @Authorization()
  @Subscription(() => QueueSecretMessageModel, {
    name: "addSecretMessage",
    filter: async (payload, variables) =>
      payload.recipientUserId === variables.userId
  })
  public addSecretMessage(
    @Authorized("id") authorizedUserId: string,
    @Args("userId") userId: string
  ) {
    this.assertAuthorizedSubscriptionUser(authorizedUserId, userId);
    return this.pubSub.asyncIterableIterator(
      `ADD_SECRET_MESSAGE_${authorizedUserId}`
    );
  }

  private assertAuthorizedSubscriptionUser(
    authorizedUserId: string,
    requestedUserId: string
  ) {
    if (authorizedUserId !== requestedUserId) {
      throw new ForbiddenException(
        "Subscriptions can only be opened for the authenticated user"
      );
    }
  }
}
