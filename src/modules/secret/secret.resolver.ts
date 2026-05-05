import {
  ForbiddenException
} from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";

import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";

import { PreKeyInput } from "./input/preKey.input";
import { RegisterSecretSessionInput } from "./input/register-secret-session.input";
import { SessionSecretMessageInput } from "./input/session-secret-message.input";
import { SessionSharedSecretKeyInput } from "./input/session-shared-secret-key.input";
import { UploadSecretAttachmentInput } from "./input/upload-secret-attachment.input";
import { ChatModel } from "../chat/models/chat.model";
import { QueueSecretMessageModel } from "./models/queue-secret-message.model";
import { QueueSharedSecretKeyModel } from "./models/queue-shared-secret-key.model";
import { SavedSecretPairingModel } from "./models/saved-secret-pairing.model";
import { SecretAttachmentDownloadModel } from "./models/secret-attachment-download.model";
import { SecretAttachmentModel } from "./models/secret-attachment.model";
import { SecretSessionModel } from "./models/secret-session.model";
import { SecretSessionPreKeyModel } from "./models/secret-session-pre-key.model";
import { SecretService } from "./secret.service";

@Resolver("Secret")
export class SecretResolver {
  private readonly pubSub: PubSub;

  public constructor(private readonly secretService: SecretService) {
    this.pubSub = new PubSub();
  }

  @Authorization()
  @Mutation(() => SecretSessionModel, { name: "registerSecretSession" })
  public async registerSecretSession(
    @Authorized("id") userId: string,
    @Args("data") input: RegisterSecretSessionInput
  ) {
    return this.secretService.registerSecretSession(userId, input);
  }

  @Authorization()
  @Mutation(() => SecretSessionModel, { name: "refreshSecretSession" })
  public async refreshSecretSession(
    @Authorized("id") userId: string,
    @Args("secretSessionId") secretSessionId: string,
    @Args("publicPreKey") publicPreKey: PreKeyInput
  ) {
    return this.secretService.refreshSecretSession(
      userId,
      secretSessionId,
      publicPreKey
    );
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "revokeSecretSession" })
  public async revokeSecretSession(
    @Authorized("id") userId: string,
    @Args("secretSessionId") secretSessionId: string
  ) {
    return this.secretService.revokeSecretSession(userId, secretSessionId);
  }

  @Authorization()
  @Query(() => [SecretSessionModel], { name: "findMySecretSessions" })
  public async findMySecretSessions(@Authorized("id") userId: string) {
    return this.secretService.findMySecretSessions(userId);
  }

  @Authorization()
  @Query(() => [SecretSessionPreKeyModel], {
    name: "getSecretSessionPreKeys"
  })
  public async getSecretSessionPreKeys(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string
  ) {
    return this.secretService.getSecretSessionPreKeys(userId, chatId);
  }

  @Authorization()
  @Query(() => ChatModel, { name: "findOrCreateSavedSecretChat" })
  public async findOrCreateSavedSecretChat(@Authorized("id") userId: string) {
    return this.secretService.findOrCreateSavedSecretChat(userId);
  }

  @Authorization()
  @Mutation(() => SavedSecretPairingModel, {
    name: "createSavedSecretPairing"
  })
  public async createSavedSecretPairing(
    @Authorized("id") userId: string,
    @Args("webSecretSessionId") webSecretSessionId: string
  ) {
    return this.secretService.createSavedSecretPairing(
      userId,
      webSecretSessionId
    );
  }

  @Authorization()
  @Query(() => SavedSecretPairingModel, {
    name: "findMyPendingSavedSecretPairing",
    nullable: true
  })
  public async findMyPendingSavedSecretPairing(@Authorized("id") userId: string) {
    return this.secretService.findMyPendingSavedSecretPairing(userId);
  }

  @Authorization()
  @Mutation(() => SavedSecretPairingModel, {
    name: "confirmSavedSecretPairing"
  })
  public async confirmSavedSecretPairing(
    @Authorized("id") userId: string,
    @Args("pairingId") pairingId: string,
    @Args("mobileSecretSessionId") mobileSecretSessionId: string,
    @Args("challenge", { nullable: true }) challenge?: string,
    @Args("safetyCode", { nullable: true }) safetyCode?: string
  ) {
    return this.secretService.confirmSavedSecretPairing(
      userId,
      pairingId,
      mobileSecretSessionId,
      {
        challenge,
        safetyCode
      }
    );
  }

  @Authorization()
  @Query(() => [QueueSharedSecretKeyModel], {
    name: "getSessionSharedSecretKeys"
  })
  public async getSessionSharedSecretKeys(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("secretSessionId") secretSessionId: string
  ) {
    return this.secretService.getSessionSharedSecretKeys(
      userId,
      chatId,
      secretSessionId
    );
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "ackSessionSharedSecretKeys" })
  public async ackSessionSharedSecretKeys(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("secretSessionId") secretSessionId: string,
    @Args("sharedKeyIds", { type: () => [String] }) sharedKeyIds: string[]
  ) {
    return this.secretService.ackSessionSharedSecretKeys(
      userId,
      chatId,
      secretSessionId,
      sharedKeyIds
    );
  }

  @Authorization()
  @Query(() => [QueueSecretMessageModel], {
    name: "getSessionSecretMessages"
  })
  public async getSessionSecretMessages(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("secretSessionId") secretSessionId: string
  ) {
    return this.secretService.getSessionSecretMessages(
      userId,
      chatId,
      secretSessionId
    );
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "ackSessionSecretMessages" })
  public async ackSessionSecretMessages(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("secretSessionId") secretSessionId: string,
    @Args("messageIds", { type: () => [String] }) messageIds: string[]
  ) {
    return this.secretService.ackSessionSecretMessages(
      userId,
      chatId,
      secretSessionId,
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
  @Mutation(() => QueueSharedSecretKeyModel, {
    name: "sendSessionSharedSecretKey"
  })
  public async sendSessionSharedSecretKey(
    @Authorized("id") fromUserId: string,
    @Args("data") input: SessionSharedSecretKeyInput
  ) {
    const sharedSecretKey = await this.secretService.sendSessionSharedSecretKey(
      fromUserId,
      input
    );

    await this.pubSub.publish(
      `ADD_SESSION_SHARED_SECRET_KEY_${input.toSessionId}`,
      {
        addSessionSharedSecretKey: sharedSecretKey
      }
    );

    return sharedSecretKey;
  }

  @Authorization()
  @Mutation(() => QueueSecretMessageModel, {
    name: "sendSessionSecretMessage"
  })
  public async sendSessionSecretMessage(
    @Authorized("id") fromUserId: string,
    @Args("data") input: SessionSecretMessageInput
  ) {
    const secretMessage = await this.secretService.sendSessionSecretMessage(
      fromUserId,
      input
    );

    for (const recipientSessionId of Array.from(
      new Set(secretMessage.toSessionIds)
    )) {
      await this.pubSub.publish(`ADD_SESSION_SECRET_MESSAGE_${recipientSessionId}`, {
        addSessionSecretMessage: secretMessage,
        recipientSessionId
      });
    }

    return secretMessage;
  }

  @Authorization()
  @Subscription(() => QueueSharedSecretKeyModel, {
    name: "addSessionSharedSecretKey",
    nullable: true,
    filter: (payload, variables) => {
      return (
        payload.addSessionSharedSecretKey.toUserId === variables.userId &&
        payload.addSessionSharedSecretKey.toSessionId ===
          variables.secretSessionId
      );
    }
  })
  public addSessionSharedSecretKey(
    @Authorized("id") authorizedUserId: string,
    @Args("userId") userId: string,
    @Args("secretSessionId") secretSessionId: string
  ) {
    this.assertAuthorizedSubscriptionUser(authorizedUserId, userId);
    return this.pubSub.asyncIterableIterator(
      `ADD_SESSION_SHARED_SECRET_KEY_${secretSessionId}`
    );
  }

  @Authorization()
  @Subscription(() => QueueSecretMessageModel, {
    name: "addSessionSecretMessage",
    filter: (payload, variables) => {
      return (
        payload.addSessionSecretMessage.toUserIds.includes(variables.userId) &&
        payload.recipientSessionId === variables.secretSessionId
      );
    }
  })
  public addSessionSecretMessage(
    @Authorized("id") authorizedUserId: string,
    @Args("userId") userId: string,
    @Args("secretSessionId") secretSessionId: string
  ) {
    this.assertAuthorizedSubscriptionUser(authorizedUserId, userId);
    return this.pubSub.asyncIterableIterator(
      `ADD_SESSION_SECRET_MESSAGE_${secretSessionId}`
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
