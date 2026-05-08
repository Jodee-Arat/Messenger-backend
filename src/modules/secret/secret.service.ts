import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  OnModuleDestroy,
  OnModuleInit
} from "@nestjs/common";
import { randomUUID } from "crypto";
import * as QRCode from "qrcode";

import { ChatPermissionEnum } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";
import { RedisService } from "@/src/core/redis/redis.service";
import { ChatService } from "@/src/modules/chat/chat.service";
import { StorageService } from "@/src/modules/libs/storage/storage.service";

import { PreKeyInput } from "./input/preKey.input";
import { RegisterSecretSessionInput } from "./input/register-secret-session.input";
import { SessionSecretMessageInput } from "./input/session-secret-message.input";
import { SessionSharedSecretKeyInput } from "./input/session-shared-secret-key.input";
import { UploadSecretAttachmentInput } from "./input/upload-secret-attachment.input";
import { SecretSessionPlatform } from "./models/secret-session-platform.enum";

const SECRET_ATTACHMENT_TTL_MS = 24 * 60 * 60 * 1000;
const SECRET_ATTACHMENT_CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
const SECRET_SESSION_KEY_PREFIX = "secret-session:";
const SAVED_SECRET_PAIRING_KEY_PREFIX = "saved-secret-pairing:";
const SAVED_SECRET_PAIRING_WEB_KEY_PREFIX = "saved-secret-pairing-web:";
const SAVED_SECRET_PAIRING_QR_SCHEME = "mesarat://saved-secret-pairing";
const SAVED_SECRET_GROUP_ID = "saved";
const WEB_SECRET_SESSION_TTL_SECONDS = 8 * 60 * 60;
const MOBILE_SECRET_SESSION_TTL_SECONDS = 30 * 24 * 60 * 60;
const SAVED_SECRET_PAIRING_TTL_SECONDS = 5 * 60;
const SESSION_SHARED_KEY_KIND = "SESSION_KEY";

type SecretChatAccess = Awaited<
  ReturnType<ChatService["ensureDirectChatAccess"]>
>;

type SecretSessionPublicPreKey = {
  ikPub: string;
  spkPub: string;
  spkSig: string;
  opkPubs: string[];
  indexOpkPub: number;
};

type SecretSessionRecord = {
  id: string;
  userId: string;
  platform: SecretSessionPlatform;
  deviceName?: string | null;
  publicPreKey: SecretSessionPublicPreKey;
  createdAt: string;
  expiresAt: string;
  revokedAt?: string | null;
};

type SavedSecretPairingRecord = {
  pairingId: string;
  userId: string;
  chatId: string;
  webSecretSessionId: string;
  mobileSecretSessionId?: string | null;
  challenge: string;
  safetyCode: string;
  createdAt: string;
  expiresAt: string;
  confirmedAt?: string | null;
};

@Injectable()
export class SecretService implements OnModuleInit, OnModuleDestroy {
  private secretAttachmentCleanupInterval: ReturnType<typeof setInterval> | null =
    null;
  private isSecretAttachmentCleanupRunning = false;

  public constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
    private readonly storageService: StorageService,
    private readonly chatService: ChatService
  ) {}

  public onModuleInit() {
    void this.runScheduledSecretAttachmentCleanup();

    this.secretAttachmentCleanupInterval = setInterval(() => {
      void this.runScheduledSecretAttachmentCleanup();
    }, SECRET_ATTACHMENT_CLEANUP_INTERVAL_MS);

    this.secretAttachmentCleanupInterval.unref?.();
  }

  public onModuleDestroy() {
    if (this.secretAttachmentCleanupInterval) {
      clearInterval(this.secretAttachmentCleanupInterval);
      this.secretAttachmentCleanupInterval = null;
    }
  }

  public async registerSecretSession(
    userId: string,
    input: RegisterSecretSessionInput
  ) {
    const now = new Date();
    const ttlSeconds = this.getSecretSessionTtlSeconds(input.platform);
    const expiresAt = new Date(now.getTime() + ttlSeconds * 1000);
    const session: SecretSessionRecord = {
      id: randomUUID(),
      userId,
      platform: input.platform,
      deviceName: input.deviceName ?? null,
      publicPreKey: this.normalizePublicPreKey(input.publicPreKey),
      createdAt: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
      revokedAt: null
    };

    await this.saveSecretSession(session, ttlSeconds);

    return this.toSecretSessionModel(session);
  }

  public async refreshSecretSession(
    userId: string,
    secretSessionId: string,
    publicPreKey: PreKeyInput
  ) {
    const session = await this.getOwnedSecretSession(userId, secretSessionId);
    const ttlSeconds = this.getSecretSessionTtlSeconds(session.platform);
    const expiresAt = new Date(Date.now() + ttlSeconds * 1000);
    const refreshedSession: SecretSessionRecord = {
      ...session,
      publicPreKey: this.normalizePublicPreKey(publicPreKey),
      expiresAt: expiresAt.toISOString(),
      revokedAt: null
    };

    await this.saveSecretSession(refreshedSession, ttlSeconds);

    return this.toSecretSessionModel(refreshedSession);
  }

  public async revokeSecretSession(userId: string, secretSessionId: string) {
    const session = await this.getOwnedSecretSession(userId, secretSessionId);

    if (session.platform === SecretSessionPlatform.WEB) {
      await this.deleteSavedSecretPairingForWebSession(userId, secretSessionId);
    }

    await this.redisService.del(this.getSecretSessionKey(secretSessionId));

    return true;
  }

  public async findMySecretSessions(userId: string) {
    const sessions = await this.findActiveSecretSessions();

    return sessions
      .filter((session) => session.userId === userId)
      .map((session) => this.toSecretSessionModel(session));
  }

  public async getSecretSessionPreKeys(userId: string, chatId: string) {
    const chat = await this.ensureSecretChatAccess(userId, chatId);
    const memberIds = chat.members.map((member) => member.userId);
    const sessions = await this.findActiveSecretSessions(memberIds);

    return sessions.map((session) => ({
      secretSessionId: session.id,
      userId: session.userId,
      platform: session.platform,
      deviceName: session.deviceName ?? null,
      ...session.publicPreKey
    }));
  }

  public async findOrCreateSavedSecretChat(userId: string) {
    const existing = await this.prismaService.chat.findFirst({
      where: {
        ownerId: userId,
        isSaved: true,
        isDeleted: false
      },
      include: {
        members: {
          include: {
            user: true
          }
        }
      }
    });

    if (existing) {
      return existing;
    }

    return this.prismaService.chat.create({
      data: {
        chatName: "Избранное",
        isSecret: true,
        isSaved: true,
        ownerId: userId,
        lastMessageAt: new Date(),
        members: {
          create: {
            user: {
              connect: {
                id: userId
              }
            },
            isCreator: true
          }
        }
      },
      include: {
        members: {
          include: {
            user: true
          }
        }
      }
    });
  }

  public async createSavedSecretPairing(
    userId: string,
    webSecretSessionId: string
  ) {
    const webSession = await this.getOwnedSecretSession(
      userId,
      webSecretSessionId
    );

    if (webSession.platform !== SecretSessionPlatform.WEB) {
      throw new BadRequestException("Saved secret pairing requires a web session");
    }

    const chat = await this.findOrCreateSavedSecretChat(userId);
    const existingPairing = await this.findActiveSavedSecretPairingForWebSession(
      userId,
      webSecretSessionId
    );

    if (existingPairing) {
      return await this.toSavedSecretPairingModel(existingPairing);
    }

    const pairingId = randomUUID();
    const now = new Date();
    const expiresAt = new Date(
      Date.now() + SAVED_SECRET_PAIRING_TTL_SECONDS * 1000
    );
    const pairing: SavedSecretPairingRecord = {
      pairingId,
      userId,
      chatId: chat.id,
      webSecretSessionId,
      mobileSecretSessionId: null,
      challenge: randomUUID(),
      safetyCode: this.buildSafetyCode(),
      createdAt: now.toISOString(),
      expiresAt: expiresAt.toISOString(),
      confirmedAt: null
    };

    await this.saveSavedSecretPairing(pairing);

    return await this.toSavedSecretPairingModel(pairing);
  }

  public async findMyPendingSavedSecretPairing(userId: string) {
    const pairings = await this.findActiveSavedSecretPairings(userId);
    const pendingPairings = pairings
      .filter((pairing) => !pairing.confirmedAt)
      .sort(
        (left, right) =>
          new Date(right.createdAt).getTime() -
          new Date(left.createdAt).getTime()
      );

    const pairing = pendingPairings[0];

    return pairing ? await this.toSavedSecretPairingModel(pairing) : null;
  }

  public async confirmSavedSecretPairing(
    userId: string,
    pairingId: string,
    mobileSecretSessionId: string,
    expected?: {
      challenge?: string | null;
      safetyCode?: string | null;
    }
  ) {
    const mobileSession = await this.getOwnedSecretSession(
      userId,
      mobileSecretSessionId
    );

    if (mobileSession.platform !== SecretSessionPlatform.MOBILE) {
      throw new BadRequestException(
        "Saved secret pairing confirmation requires a mobile session"
      );
    }

    const pairing = await this.getSavedSecretPairing(userId, pairingId);
    if (expected?.challenge && pairing.challenge !== expected.challenge) {
      throw new BadRequestException("saved secret pairing challenge mismatch");
    }

    if (expected?.safetyCode && pairing.safetyCode !== expected.safetyCode) {
      throw new BadRequestException("saved secret pairing safety code mismatch");
    }

    const confirmedPairing: SavedSecretPairingRecord = {
      ...pairing,
      mobileSecretSessionId,
      confirmedAt: new Date().toISOString()
    };

    await this.saveSavedSecretPairing(confirmedPairing);

    return await this.toSavedSecretPairingModel(confirmedPairing);
  }

  public async uploadSecretAttachment(
    userId: string,
    input: UploadSecretAttachmentInput
  ) {
    await this.cleanupExpiredSecretAttachments();

    const { chatId, ciphertextBase64 } = input;
    const chat = await this.ensureSecretChatSendAccess(userId, chatId);
    const ciphertext = this.decodeCiphertext(ciphertextBase64);

    const attachmentId = randomUUID();
    const expiresAt = new Date(Date.now() + SECRET_ATTACHMENT_TTL_MS);
    const storageKey = this.buildAttachmentStorageKey(chat.id, attachmentId);

    const attachment = await this.prismaService.secretAttachment.create({
      data: {
        id: attachmentId,
        chatId: chat.id,
        uploaderUserId: userId,
        storageKey,
        ciphertextSize: ciphertext.length.toString(),
        expiresAt
      }
    });

    try {
      await this.storageService.upload(
        ciphertext,
        storageKey,
        "application/octet-stream"
      );
    } catch (error) {
      await this.prismaService.secretAttachment.deleteMany({
        where: {
          id: attachment.id
        }
      });

      throw error;
    }

    return attachment;
  }

  public async downloadSecretAttachment(
    userId: string,
    chatId: string,
    attachmentId: string
  ) {
    await this.cleanupExpiredSecretAttachments();

    const attachment = await this.prismaService.secretAttachment.findUnique({
      where: {
        id: attachmentId
      },
      include: {
        chat: {
          select: {
            id: true,
            isGroup: true,
            isSecret: true
          }
        }
      }
    });

    if (!attachment || attachment.chatId !== chatId) {
      throw new ConflictException("secret attachment not found");
    }

    if (!attachment.chat.isSecret) {
      throw new BadRequestException(
        "Secret attachments are only available for secret chats"
      );
    }

    if (!attachment.committedAt) {
      await this.assertCanAccessStagedAttachment(userId, attachment.chatId, {
        uploaderUserId: attachment.uploaderUserId
      });
    } else {
      await this.assertCanAccessCommittedAttachment(userId, attachment.chat, {
        allowedUserIds: attachment.allowedUserIds
      });
    }

    const ciphertext = await this.storageService.download(attachment.storageKey);

    return {
      attachmentId: attachment.id,
      chatId: attachment.chatId,
      ciphertextBase64: ciphertext.toString("base64"),
      ciphertextSize: attachment.ciphertextSize
    };
  }

  public async discardSecretAttachment(
    userId: string,
    chatId: string,
    attachmentId: string
  ) {
    await this.cleanupExpiredSecretAttachments();
    await this.ensureSecretChatSendAccess(userId, chatId);

    const attachment = await this.prismaService.secretAttachment.findUnique({
      where: {
        id: attachmentId
      }
    });

    if (!attachment || attachment.chatId !== chatId) {
      throw new ConflictException("secret attachment not found");
    }

    if (attachment.uploaderUserId !== userId) {
      throw new ForbiddenException(
        "Only the uploader can discard a staged secret attachment"
      );
    }

    if (attachment.committedAt) {
      throw new BadRequestException(
        "Committed secret attachments cannot be discarded"
      );
    }

    await this.storageService.remove(attachment.storageKey);

    await this.prismaService.secretAttachment.delete({
      where: {
        id: attachment.id
      }
    });

    return true;
  }

  public async sendSessionSharedSecretKey(
    fromUserId: string,
    input: SessionSharedSecretKeyInput
  ) {
    await this.cleanupExpiredSecretAttachments();

    const fromSession = await this.getOwnedSecretSession(
      fromUserId,
      input.fromSessionId
    );
    const toSession = await this.getOwnedOrTargetSecretSession(
      input.toUserId,
      input.toSessionId
    );

    const chat = await this.ensureSecretChatSendAccess(fromUserId, input.chatId);
    this.assertSessionTargetUsersExist(chat, [input.toUserId]);
    this.assertTargetSessionIdsDoNotContainSender(
      [toSession.id],
      fromSession.id
    );

    const sharedSecretKey =
      await this.prismaService.queueSharedSecretKey.create({
        data: {
          fromUserId,
          toUserId: input.toUserId,
          fromSessionId: fromSession.id,
          toSessionId: toSession.id,
          chatId: input.chatId,
          groupId: input.groupId ?? chat.groupId ?? SAVED_SECRET_GROUP_ID,
          keyKind: input.keyKind ?? SESSION_SHARED_KEY_KIND,
          senderKeyId: input.senderKeyId ?? null,
          senderKeyEpoch: input.senderKeyEpoch ?? null,
          ikPub: input.ikPub,
          ukm: input.ukm,
          iv: input.iv,
          encryptedKey: input.encryptedKey,
          sig: input.sig,
          ekPub: input.ekPub,
          usedOpk: input.usedOpk ?? null
        } as any
      });

    if (!sharedSecretKey) {
      throw new ConflictException("session shared secret key not created");
    }

    return sharedSecretKey;
  }

  public async getSessionSharedSecretKeys(
    userId: string,
    chatId: string,
    secretSessionId: string
  ) {
    await this.cleanupExpiredSecretAttachments();
    await this.getOwnedSecretSession(userId, secretSessionId);
    await this.ensureSecretChatAccess(userId, chatId);

    return this.prismaService.queueSharedSecretKey.findMany({
      where: {
        chatId,
        toUserId: userId,
        toSessionId: secretSessionId
      },
      orderBy: {
        createdAt: "asc"
      }
    });
  }

  public async ackSessionSharedSecretKeys(
    userId: string,
    chatId: string,
    secretSessionId: string,
    sharedKeyIds: string[]
  ) {
    await this.cleanupExpiredSecretAttachments();
    await this.getOwnedSecretSession(userId, secretSessionId);
    await this.ensureSecretChatAccess(userId, chatId);

    const uniqueSharedKeyIds = this.getUniqueIds(sharedKeyIds);
    if (uniqueSharedKeyIds.length === 0) {
      return true;
    }

    await this.prismaService.queueSharedSecretKey.deleteMany({
      where: {
        id: {
          in: uniqueSharedKeyIds
        },
        chatId,
        toUserId: userId,
        toSessionId: secretSessionId
      }
    });

    return true;
  }

  public async sendSessionSecretMessage(
    fromUserId: string,
    input: SessionSecretMessageInput
  ) {
    await this.cleanupExpiredSecretAttachments();

    const {
      chatId,
      encryptedMessage,
      iv,
      sig,
      toUserIds,
      toSessionIds,
      ukm,
      isKey,
      secretAttachmentIds
    } = input;

    const fromSession = await this.getOwnedSecretSession(
      fromUserId,
      input.fromSessionId
    );
    const chat = await this.ensureSecretChatSendAccess(fromUserId, chatId);
    const uniqueRecipientIds = this.getUniqueIds(toUserIds);
    const uniqueRecipientSessionIds = this.getUniqueIds(toSessionIds);

    this.assertSessionTargetUsersExist(chat, uniqueRecipientIds);
    this.assertTargetSessionIdsDoNotContainSender(
      uniqueRecipientSessionIds,
      fromSession.id
    );
    await this.assertTargetSessionsBelongToUsers(
      uniqueRecipientIds,
      uniqueRecipientSessionIds
    );

    const uniqueAttachmentIds = this.getUniqueIds(secretAttachmentIds);
    const attachmentAllowedUserIds = this.getUniqueIds([
      fromUserId,
      ...uniqueRecipientIds
    ]);
    const committedAt = new Date();
    const committedAttachmentExpiresAt = new Date(
      committedAt.getTime() + SECRET_ATTACHMENT_TTL_MS
    );

    const secretMessage = await this.prismaService.$transaction(async (tx) => {
      if (uniqueAttachmentIds.length > 0) {
        const attachments = await tx.secretAttachment.findMany({
          where: {
            id: {
              in: uniqueAttachmentIds
            }
          }
        });

        if (attachments.length !== uniqueAttachmentIds.length) {
          throw new BadRequestException(
            "One or more secret attachments were not found"
          );
        }

        attachments.forEach((attachment) => {
          if (attachment.chatId !== chatId) {
            throw new BadRequestException(
              "Secret attachment does not belong to this chat"
            );
          }

          if (attachment.uploaderUserId !== fromUserId) {
            throw new ForbiddenException(
              "Only the uploader can attach staged secret attachments"
            );
          }

          if (attachment.committedAt) {
            throw new BadRequestException(
              "Secret attachment is already committed"
            );
          }

          if (attachment.expiresAt && attachment.expiresAt <= committedAt) {
            throw new BadRequestException("Secret attachment has expired");
          }
        });
      }

      const createdSecretMessage = await tx.queueSecretMessage.create({
        data: {
          fromUserId,
          fromSessionId: fromSession.id,
          chatId,
          toUserIds: uniqueRecipientIds,
          toSessionIds: uniqueRecipientSessionIds,
          checkedSessionIds: [],
          ukm: ukm ?? null,
          senderKeyId: input.senderKeyId ?? null,
          senderKeyIteration: input.senderKeyIteration ?? null,
          senderKeyEpoch: input.senderKeyEpoch ?? null,
          iv,
          encryptedMessage,
          sig,
          groupId: input.groupId ?? chat.groupId ?? SAVED_SECRET_GROUP_ID,
          isKey: isKey ?? false,
          secretAttachmentIds: uniqueAttachmentIds
        } as any
      });

      for (const attachmentId of uniqueAttachmentIds) {
        await tx.secretAttachment.update({
          where: {
            id: attachmentId
          },
          data: {
            allowedUserIds: {
              set: attachmentAllowedUserIds
            },
            committedAt,
            committedMessageId: createdSecretMessage.id,
            expiresAt: committedAttachmentExpiresAt
          }
        });
      }

      await tx.chat.update({
        where: {
          id: chatId
        },
        data: {
          updatedAt: new Date(),
          lastMessageAt: new Date()
        }
      });

      return createdSecretMessage;
    });

    if (!secretMessage) {
      throw new ConflictException("session secret message not created");
    }

    return secretMessage;
  }

  public async getSessionSecretMessages(
    userId: string,
    chatId: string,
    secretSessionId: string
  ) {
    await this.cleanupExpiredSecretAttachments();
    await this.getOwnedSecretSession(userId, secretSessionId);
    await this.ensureSecretChatAccess(userId, chatId);
    await this.cleanupFullyCheckedSessionSecretMessages(chatId);

    const queuedMessages = await this.prismaService.queueSecretMessage.findMany({
      where: {
        chatId,
        toUserIds: {
          has: userId
        },
        toSessionIds: {
          has: secretSessionId
        }
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    const baseMessages = queuedMessages.filter(
      (message) => !message.checkedSessionIds.includes(secretSessionId)
    );

    if (baseMessages.length === 0) {
      return [];
    }

    const senderSessionIds = Array.from(
      new Set(
        baseMessages
          .map((message) => message.fromSessionId)
          .filter((sessionId): sessionId is string => Boolean(sessionId))
      )
    );

    const sharedKeys = await this.prismaService.queueSharedSecretKey.findMany({
      where: {
        chatId,
        toUserId: userId,
        toSessionId: secretSessionId,
        fromSessionId: {
          in: senderSessionIds
        }
      }
    });

    const sharedKeyBySenderSessionId = new Map(
      sharedKeys.map((sharedKey) => [sharedKey.fromSessionId, sharedKey])
    );

    return baseMessages.map((baseMessage) => {
      const sharedKey = baseMessage.fromSessionId
        ? sharedKeyBySenderSessionId.get(baseMessage.fromSessionId)
        : null;

      return {
        ...baseMessage,
        ikPub: sharedKey?.ikPub ?? null,
        ekPub: sharedKey?.ekPub ?? null,
        usedOpk: sharedKey?.usedOpk ?? null,
        ukm: baseMessage.ukm ?? sharedKey?.ukm ?? null
      };
    });
  }

  public async ackSessionSecretMessages(
    userId: string,
    chatId: string,
    secretSessionId: string,
    messageIds: string[]
  ) {
    await this.cleanupExpiredSecretAttachments();
    await this.getOwnedSecretSession(userId, secretSessionId);
    await this.ensureSecretChatAccess(userId, chatId);

    const uniqueMessageIds = this.getUniqueIds(messageIds);
    if (uniqueMessageIds.length === 0) {
      return true;
    }

    const messages = await this.prismaService.queueSecretMessage.findMany({
      where: {
        id: {
          in: uniqueMessageIds
        },
        chatId,
        toUserIds: {
          has: userId
        },
        toSessionIds: {
          has: secretSessionId
        }
      }
    });

    const unreadMessages = messages.filter(
      (message) => !message.checkedSessionIds.includes(secretSessionId)
    );

    await this.prismaService.$transaction(async (tx) => {
      for (const message of unreadMessages) {
        const nextCheckedSessionIds = Array.from(
          new Set([...message.checkedSessionIds, secretSessionId])
        );

        const updateResult = await tx.queueSecretMessage.updateMany({
          where: {
            id: message.id,
            checkedSessionIds: {
              equals: message.checkedSessionIds
            }
          },
          data: {
            checkedSessionIds: nextCheckedSessionIds
          }
        });

        if (updateResult.count === 0) {
          continue;
        }

        const updated = await tx.queueSecretMessage.findUnique({
          where: { id: message.id }
        });

        if (!updated) {
          continue;
        }

        if (
          updated.toSessionIds.length > 0 &&
          updated.toSessionIds.every((id) => updated.checkedSessionIds.includes(id))
        ) {
          await tx.queueSecretMessage.deleteMany({
            where: { id: updated.id }
          });
        }
      }
    });
    await this.cleanupFullyCheckedSessionSecretMessages(chatId);

    return true;
  }

  private async cleanupFullyCheckedSessionSecretMessages(chatId?: string) {
    const messages = await this.prismaService.queueSecretMessage.findMany({
      where: chatId ? { chatId } : undefined,
      select: {
        id: true,
        toSessionIds: true,
        checkedSessionIds: true
      }
    });

    const fullyCheckedMessageIds = messages
      .filter(
        (message) =>
          message.toSessionIds.length > 0 &&
          message.toSessionIds.every((sessionId) =>
            message.checkedSessionIds.includes(sessionId)
          )
      )
      .map((message) => message.id);

    if (fullyCheckedMessageIds.length === 0) {
      return;
    }

    await this.prismaService.queueSecretMessage.deleteMany({
      where: {
        id: {
          in: fullyCheckedMessageIds
        }
      }
    });
  }

  private async ensureSecretChatAccess(userId: string, chatId: string) {
    const chat = await this.chatService.ensureDirectChatAccess(userId, chatId);

    if (!chat.isSecret) {
      throw new BadRequestException(
        "Secret operations are only available for secret chats"
      );
    }

    return chat;
  }

  private async ensureSecretChatSendAccess(userId: string, chatId: string) {
    const chat = await this.ensureSecretChatAccess(userId, chatId);

    if (chat.isSaved) {
      return chat;
    }

    if (chat.isGroup) {
      await this.chatService.validatePermission(
        userId,
        chatId,
        ChatPermissionEnum.SEND_MESSAGES
      );
    } else {
      await this.chatService.ensureDirectChatMessagingAccess(userId, chatId);
    }

    return chat;
  }

  private assertSessionTargetUsersExist(
    chat: SecretChatAccess,
    targetUserIds: string[]
  ) {
    if (targetUserIds.length === 0) {
      throw new BadRequestException("Secret recipients are required");
    }

    const memberIds = new Set(chat.members.map((member) => member.userId));
    const invalidUserId = targetUserIds.find(
      (targetUserId) => !memberIds.has(targetUserId)
    );

    if (invalidUserId) {
      throw new BadRequestException(
        "Secret recipient list contains a user outside this chat"
      );
    }
  }

  private assertTargetSessionIdsDoNotContainSender(
    targetSessionIds: string[],
    fromSessionId: string
  ) {
    if (targetSessionIds.includes(fromSessionId)) {
      throw new BadRequestException(
        "Secret recipient sessions must not include the sender session"
      );
    }
  }

  private async assertTargetSessionsBelongToUsers(
    targetUserIds: string[],
    targetSessionIds: string[]
  ) {
    if (targetSessionIds.length === 0) {
      throw new BadRequestException("Secret recipient sessions are required");
    }

    const targetUserIdSet = new Set(targetUserIds);
    const sessions = await Promise.all(
      targetSessionIds.map((sessionId) =>
        this.getSecretSessionById(sessionId).catch(() => null)
      )
    );

    const invalidSession = sessions.find(
      (session) => !session || !targetUserIdSet.has(session.userId)
    );

    if (invalidSession !== undefined) {
      throw new BadRequestException(
        "Secret recipient sessions do not match recipient users"
      );
    }
  }

  private getSecretSessionKey(secretSessionId: string) {
    return `${SECRET_SESSION_KEY_PREFIX}${secretSessionId}`;
  }

  private getSavedSecretPairingKey(pairingId: string) {
    return `${SAVED_SECRET_PAIRING_KEY_PREFIX}${pairingId}`;
  }

  private getSavedSecretPairingWebKey(userId: string, webSecretSessionId: string) {
    return `${SAVED_SECRET_PAIRING_WEB_KEY_PREFIX}${userId}:${webSecretSessionId}`;
  }

  private getSecretSessionTtlSeconds(platform: SecretSessionPlatform) {
    return platform === SecretSessionPlatform.WEB
      ? WEB_SECRET_SESSION_TTL_SECONDS
      : MOBILE_SECRET_SESSION_TTL_SECONDS;
  }

  private normalizePublicPreKey(input: PreKeyInput): SecretSessionPublicPreKey {
    return {
      ikPub: input.ikPub,
      spkPub: input.spkPub,
      spkSig: input.spkSig,
      opkPubs: input.opkPubs,
      indexOpkPub: input.indexOpkPub ?? 0
    };
  }

  private async saveSecretSession(
    session: SecretSessionRecord,
    ttlSeconds: number
  ) {
    await this.redisService.set(
      this.getSecretSessionKey(session.id),
      JSON.stringify(session),
      "EX",
      ttlSeconds
    );
  }

  private getSavedSecretPairingTtlSeconds(pairing: SavedSecretPairingRecord) {
    return Math.max(
      1,
      Math.ceil((new Date(pairing.expiresAt).getTime() - Date.now()) / 1000)
    );
  }

  private async saveSavedSecretPairing(pairing: SavedSecretPairingRecord) {
    const ttlSeconds = this.getSavedSecretPairingTtlSeconds(pairing);

    await this.redisService.set(
      this.getSavedSecretPairingKey(pairing.pairingId),
      JSON.stringify(pairing),
      "EX",
      ttlSeconds
    );

    await this.redisService.set(
      this.getSavedSecretPairingWebKey(
        pairing.userId,
        pairing.webSecretSessionId
      ),
      pairing.pairingId,
      "EX",
      ttlSeconds
    );
  }

  private async deleteSavedSecretPairingForWebSession(
    userId: string,
    webSecretSessionId: string
  ) {
    const webKey = this.getSavedSecretPairingWebKey(userId, webSecretSessionId);
    const pairingId = await this.redisService.get(webKey);

    if (pairingId) {
      await this.redisService.del(this.getSavedSecretPairingKey(pairingId));
    }

    await this.redisService.del(webKey);
  }

  private async getSecretSessionById(secretSessionId: string) {
    const raw = await this.redisService.get(
      this.getSecretSessionKey(secretSessionId)
    );

    if (!raw) {
      throw new ConflictException("secret session not found");
    }

    const session = JSON.parse(raw) as SecretSessionRecord;
    const expiresAt = new Date(session.expiresAt);

    if (session.revokedAt || expiresAt <= new Date()) {
      throw new ConflictException("secret session is not active");
    }

    return session;
  }

  private async getOwnedSecretSession(
    userId: string,
    secretSessionId: string
  ) {
    const session = await this.getSecretSessionById(secretSessionId);

    if (session.userId !== userId) {
      throw new ForbiddenException("secret session does not belong to user");
    }

    return session;
  }

  private async getOwnedOrTargetSecretSession(
    userId: string,
    secretSessionId: string
  ) {
    return this.getOwnedSecretSession(userId, secretSessionId);
  }

  private async findActiveSecretSessions(userIds?: string[]) {
    const keys = await this.redisService.keys(`${SECRET_SESSION_KEY_PREFIX}*`);
    const userIdSet = userIds ? new Set(userIds) : null;
    const sessions: SecretSessionRecord[] = [];

    for (const key of keys) {
      const raw = await this.redisService.get(key);
      if (!raw) continue;

      try {
        const session = JSON.parse(raw) as SecretSessionRecord;
        if (session.revokedAt) continue;
        if (new Date(session.expiresAt) <= new Date()) continue;
        if (userIdSet && !userIdSet.has(session.userId)) continue;
        sessions.push(session);
      } catch {
        continue;
      }
    }

    return sessions;
  }

  private async findActiveSavedSecretPairings(userId: string) {
    const keys = await this.redisService.keys(`${SAVED_SECRET_PAIRING_KEY_PREFIX}*`);
    const pairings: SavedSecretPairingRecord[] = [];

    for (const key of keys) {
      if (key.startsWith(SAVED_SECRET_PAIRING_WEB_KEY_PREFIX)) continue;

      const raw = await this.redisService.get(key);
      if (!raw) continue;

      try {
        const pairing = this.normalizeSavedSecretPairing(
          JSON.parse(raw) as SavedSecretPairingRecord
        );
        if (pairing.userId !== userId) continue;
        if (new Date(pairing.expiresAt) <= new Date()) continue;
        pairings.push(pairing);
      } catch {
        continue;
      }
    }

    return pairings;
  }

  private async findActiveSavedSecretPairingForWebSession(
    userId: string,
    webSecretSessionId: string
  ) {
    const pairingId = await this.redisService.get(
      this.getSavedSecretPairingWebKey(userId, webSecretSessionId)
    );

    if (!pairingId) return null;

    try {
      return await this.getSavedSecretPairing(userId, pairingId);
    } catch {
      return null;
    }
  }

  private async getSavedSecretPairing(userId: string, pairingId: string) {
    const raw = await this.redisService.get(
      this.getSavedSecretPairingKey(pairingId)
    );

    if (!raw) {
      throw new ConflictException("saved secret pairing not found");
    }

    const pairing = this.normalizeSavedSecretPairing(
      JSON.parse(raw) as SavedSecretPairingRecord
    );

    if (pairing.userId !== userId) {
      throw new ForbiddenException("saved secret pairing does not belong to user");
    }

    if (new Date(pairing.expiresAt) <= new Date()) {
      throw new ConflictException("saved secret pairing expired");
    }

    return pairing;
  }

  private toSecretSessionModel(session: SecretSessionRecord) {
    return {
      ...session,
      createdAt: new Date(session.createdAt),
      expiresAt: new Date(session.expiresAt),
      revokedAt: session.revokedAt ? new Date(session.revokedAt) : null
    };
  }

  private normalizeSavedSecretPairing(pairing: SavedSecretPairingRecord) {
    if (pairing.createdAt) return pairing;

    return {
      ...pairing,
      createdAt: new Date(
        new Date(pairing.expiresAt).getTime() -
          SAVED_SECRET_PAIRING_TTL_SECONDS * 1000
      ).toISOString()
    };
  }

  private async toSavedSecretPairingModel(pairing: SavedSecretPairingRecord) {
    const normalizedPairing = this.normalizeSavedSecretPairing(pairing);
    const qrPayload = this.buildSavedSecretPairingQrPayload(normalizedPairing);
    const qrCodeUrl = await QRCode.toDataURL(qrPayload, {
      margin: 1,
      width: 320
    });

    return {
      ...normalizedPairing,
      qrPayload,
      qrCodeUrl,
      createdAt: new Date(normalizedPairing.createdAt),
      expiresAt: new Date(normalizedPairing.expiresAt),
      confirmedAt: normalizedPairing.confirmedAt
        ? new Date(normalizedPairing.confirmedAt)
        : null
    };
  }

  private buildSafetyCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private buildSavedSecretPairingQrPayload(pairing: SavedSecretPairingRecord) {
    const params = new URLSearchParams({
      pairingId: pairing.pairingId,
      challenge: pairing.challenge,
      safetyCode: pairing.safetyCode
    });

    return `${SAVED_SECRET_PAIRING_QR_SCHEME}?${params.toString()}`;
  }

  private async assertCanAccessStagedAttachment(
    userId: string,
    chatId: string,
    attachment: {
      uploaderUserId: string;
    }
  ) {
    await this.ensureSecretChatSendAccess(userId, chatId);

    if (attachment.uploaderUserId !== userId) {
      throw new ForbiddenException(
        "Only the uploader can access a staged secret attachment"
      );
    }
  }

  private async assertCanAccessCommittedAttachment(
    userId: string,
    chat: {
      id: string;
      isGroup: boolean;
      isSecret?: boolean;
    },
    attachment: {
      allowedUserIds: string[];
    }
  ) {
    const accessibleChat = await this.chatService.ensureDirectChatAccess(
      userId,
      chat.id
    );

    if (!accessibleChat.isSecret) {
      throw new BadRequestException(
        "Secret attachments are only available for secret chats"
      );
    }

    if (!chat.isGroup && !attachment.allowedUserIds.includes(userId)) {
      throw new ForbiddenException(
        "Secret attachment is unavailable for this user"
      );
    }
  }

  private async cleanupExpiredSecretAttachments() {
    if (this.isSecretAttachmentCleanupRunning) {
      return;
    }

    this.isSecretAttachmentCleanupRunning = true;

    try {
      await this.backfillCommittedSecretAttachmentExpirations();

      const now = new Date();
      const expiredAttachments =
        await this.prismaService.secretAttachment.findMany({
          where: {
            expiresAt: {
              lte: now
            }
          },
          select: {
            id: true,
            storageKey: true
          }
        });

      for (const attachment of expiredAttachments) {
        try {
          await this.storageService.remove(attachment.storageKey);
        } catch (error) {
          console.warn(
            "[SecretAttachment] Failed to remove expired attachment from storage",
            {
              attachmentId: attachment.id,
              error
            }
          );
          continue;
        }

        await this.prismaService.secretAttachment.deleteMany({
          where: {
            id: attachment.id
          }
        });
      }
    } finally {
      this.isSecretAttachmentCleanupRunning = false;
    }
  }

  private async backfillCommittedSecretAttachmentExpirations() {
    const committedWithoutExpiration =
      await this.prismaService.secretAttachment.findMany({
        where: {
          committedAt: {
            not: null
          },
          expiresAt: null
        },
        select: {
          id: true,
          committedAt: true
        }
      });

    for (const attachment of committedWithoutExpiration) {
      if (!attachment.committedAt) {
        continue;
      }

      await this.prismaService.secretAttachment.updateMany({
        where: {
          id: attachment.id,
          expiresAt: null
        },
        data: {
          expiresAt: new Date(
            attachment.committedAt.getTime() + SECRET_ATTACHMENT_TTL_MS
          )
        }
      });
    }
  }

  private async runScheduledSecretAttachmentCleanup() {
    try {
      await this.cleanupExpiredSecretAttachments();
    } catch (error) {
      console.warn("[SecretAttachment] Scheduled cleanup failed", error);
    }
  }

  private decodeCiphertext(ciphertextBase64: string) {
    const normalized = ciphertextBase64.replace(/\s+/g, "");
    const ciphertext = Buffer.from(normalized, "base64");

    if (!normalized || ciphertext.length === 0) {
      throw new BadRequestException("Encrypted attachment blob is empty");
    }

    return ciphertext;
  }

  private buildAttachmentStorageKey(chatId: string, attachmentId: string) {
    return `secret-chats/${chatId}/attachments/${attachmentId}.bin`;
  }

  private getUniqueIds(ids?: string[] | null) {
    return Array.from(new Set((ids || []).filter(Boolean)));
  }
}
