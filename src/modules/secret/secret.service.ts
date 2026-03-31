import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable
} from "@nestjs/common";
import { randomUUID } from "crypto";

import { ChatPermissionEnum } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";
import { RedisService } from "@/src/core/redis/redis.service";
import { ChatService } from "@/src/modules/chat/chat.service";
import { StorageService } from "@/src/modules/libs/storage/storage.service";

import { PreKeyInput } from "./input/preKey.input";
import { SendSecretMessageInput } from "./input/send-secret-message.input";
import { SharedSecretKeyInput } from "./input/shared-secret-key.input";
import { UploadSecretAttachmentInput } from "./input/upload-secret-attachment.input";

const SECRET_ATTACHMENT_STAGE_TTL_MS = 24 * 60 * 60 * 1000;

type SecretChatAccess = Awaited<
  ReturnType<ChatService["ensureDirectChatAccess"]>
>;

@Injectable()
export class SecretService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
    private readonly storageService: StorageService,
    private readonly chatService: ChatService
  ) {}

  public async uploadSecretAttachment(
    userId: string,
    input: UploadSecretAttachmentInput
  ) {
    await this.cleanupExpiredSecretAttachments();

    const { chatId, ciphertextBase64 } = input;
    const chat = await this.ensureSecretChatSendAccess(userId, chatId);
    const ciphertext = this.decodeCiphertext(ciphertextBase64);

    const attachmentId = randomUUID();
    const expiresAt = new Date(Date.now() + SECRET_ATTACHMENT_STAGE_TTL_MS);
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

  public async getPreKeys(chatId: string, fromUserId: string) {
    await this.cleanupExpiredSecretAttachments();
    await this.ensureSecretChatAccess(fromUserId, chatId);

    const chat = await this.prismaService.chat.findUnique({
      where: {
        id: chatId
      },
      include: {
        members: {
          include: {
            user: true
          }
        }
      }
    });

    if (!chat) {
      throw new ConflictException("chat not found");
    }

    const preKeys = await this.prismaService.preKey.findMany({
      where: {
        userId: {
          in: chat.members.map((member) => member.user.id)
        }
      }
    });

    const memberUserIds = chat.members.map((member) => member.user.id);
    const redisKeys = await this.redisService.keys(`*`);
    const redisPreKeys: Array<{
      userId: string;
      ikPub: string;
      spkPub: string;
      spkSig: string;
      opkPubs: string[];
      indexOpkPub: number;
    }> = [];

    for (const memberId of memberUserIds) {
      for (const key of redisKeys) {
        const sessionData = await this.redisService.get(key);
        if (!sessionData) continue;

        let session: any;
        try {
          session = JSON.parse(sessionData);
        } catch {
          continue;
        }

        const publicPreKey = session?.metadata?.publicPreKey;
        if (session?.userId === memberId && publicPreKey) {
          const { ikPub, spkPub, spkSig, opkPubs, indexOpkPub } = publicPreKey;
          redisPreKeys.push({
            userId: memberId,
            ikPub,
            spkPub,
            spkSig,
            opkPubs,
            indexOpkPub: indexOpkPub + 1
          });
          break;
        }
      }
    }

    await this.prismaService.preKey.updateMany({
      where: {
        userId: {
          in: preKeys.map((key) => key.userId)
        },
        AND: { userId: { not: fromUserId } }
      },
      data: {
        indexOpkPub: { increment: 1 }
      }
    });

    if (!preKeys) {
      throw new ConflictException("preKey not found");
    }

    return preKeys;
  }

  public async getSharedSecretKey(userId: string, chatId: string) {
    await this.cleanupExpiredSecretAttachments();
    await this.ensureSecretChatAccess(userId, chatId);

    const sharedSecretKey =
      await this.prismaService.queueSharedSecretKey.findMany({
        where: {
          toUserId: userId,
          chatId
        }
      });

    if (sharedSecretKey.length === 0) {
      throw new ConflictException("shared secret key not found");
    }

    return sharedSecretKey;
  }

  public async ackSharedSecretKeys(
    userId: string,
    chatId: string,
    sharedKeyIds: string[]
  ) {
    await this.cleanupExpiredSecretAttachments();
    await this.ensureSecretChatAccess(userId, chatId);

    const uniqueSharedKeyIds = this.getUniqueIds(sharedKeyIds);
    if (uniqueSharedKeyIds.length === 0) {
      return true;
    }

    const sharedSecretKeys =
      await this.prismaService.queueSharedSecretKey.findMany({
        where: {
          id: {
            in: uniqueSharedKeyIds
          },
          chatId,
          toUserId: userId
        }
      });

    if (sharedSecretKeys.length === 0) {
      return true;
    }

    const usedOpks = new Set(
      sharedSecretKeys
        .map((sharedKey) => sharedKey.usedOpk)
        .filter((usedOpk): usedOpk is string => Boolean(usedOpk))
    );

    await this.prismaService.$transaction(async (tx) => {
      if (usedOpks.size > 0) {
        const preKeyOfThisUser = await tx.preKey.findUnique({
          where: {
            userId
          }
        });

        if (preKeyOfThisUser) {
          const updatedOpkPubs = preKeyOfThisUser.opkPubs.filter(
            (opk) => !usedOpks.has(opk)
          );

          await tx.preKey.update({
            where: {
              userId
            },
            data: {
              opkPubs: {
                set: updatedOpkPubs
              }
            }
          });
        }
      }

      await tx.queueSharedSecretKey.deleteMany({
        where: {
          id: {
            in: sharedSecretKeys.map((sharedKey) => sharedKey.id)
          }
        }
      });
    });

    return true;
  }

  public async hasSharedSecretKey(userId: string, chatId: string) {
    await this.cleanupExpiredSecretAttachments();
    await this.ensureSecretChatAccess(userId, chatId);

    const sharedSecretKeyCount =
      await this.prismaService.queueSharedSecretKey.count({
        where: {
          toUserId: userId,
          chatId
        }
      });

    return sharedSecretKeyCount > 0;
  }

  public async getSecretMessage(userId: string, chatId: string) {
    await this.cleanupExpiredSecretAttachments();
    await this.ensureSecretChatAccess(userId, chatId);

    const base = await this.prismaService.queueSecretMessage.findFirst({
      where: {
        chatId,
        toUserIds: {
          has: userId
        }
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    if (!base) {
      throw new ConflictException("secret message not found");
    }

    if (base.whoCheckedIds.includes(userId)) {
      throw new ConflictException("secret message not found");
    }

    let ikPub: string | null = null;
    let ekPub: string | null = null;
    let usedOpk: string | null = null;
    let ukmFromShared: string | null = null;

    try {
      const sharedKey = await this.prismaService.queueSharedSecretKey.findFirst({
        where: {
          chatId,
          toUserId: userId,
          fromUserId: base.fromUserId
        }
      });

      ikPub = sharedKey?.ikPub ?? null;
      ekPub = sharedKey?.ekPub ?? null;
      usedOpk = sharedKey?.usedOpk ?? null;
      ukmFromShared = sharedKey?.ukm ?? null;
    } catch {}

    return {
      ...base,
      ikPub,
      ekPub,
      usedOpk,
      ukm: base.ukm ?? ukmFromShared
    };
  }

  public async getSecretMessages(userId: string, chatId: string) {
    await this.cleanupExpiredSecretAttachments();
    await this.ensureSecretChatAccess(userId, chatId);

    const queuedMessages = await this.prismaService.queueSecretMessage.findMany({
      where: {
        chatId,
        toUserIds: {
          has: userId
        }
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    const baseMessages = queuedMessages.filter(
      (message) => !message.whoCheckedIds.includes(userId)
    );

    if (baseMessages.length === 0) {
      return [];
    }

    const senderIds = Array.from(
      new Set(baseMessages.map((message) => message.fromUserId))
    );

    const sharedKeys = await this.prismaService.queueSharedSecretKey.findMany({
      where: {
        chatId,
        toUserId: userId,
        fromUserId: {
          in: senderIds
        }
      }
    });

    const sharedKeyBySenderId = new Map(
      sharedKeys.map((sharedKey) => [sharedKey.fromUserId, sharedKey])
    );

    return baseMessages.map((baseMessage) => {
      const sharedKey = sharedKeyBySenderId.get(baseMessage.fromUserId);

      return {
        ...baseMessage,
        ikPub: sharedKey?.ikPub ?? null,
        ekPub: sharedKey?.ekPub ?? null,
        usedOpk: sharedKey?.usedOpk ?? null,
        ukm: baseMessage.ukm ?? sharedKey?.ukm ?? null
      };
    });
  }

  public async ackSecretMessages(
    userId: string,
    chatId: string,
    messageIds: string[]
  ) {
    await this.cleanupExpiredSecretAttachments();
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
        }
      }
    });

    const unreadMessages = messages.filter(
      (message) => !message.whoCheckedIds.includes(userId)
    );

    await this.prismaService.$transaction(async (tx) => {
      for (const message of unreadMessages) {
        const nextWhoCheckedIds = Array.from(
          new Set([...message.whoCheckedIds, userId])
        );

        const updateResult = await tx.queueSecretMessage.updateMany({
          where: {
            id: message.id,
            whoCheckedIds: {
              equals: message.whoCheckedIds
            }
          },
          data: {
            whoCheckedIds: nextWhoCheckedIds
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

        if (updated.toUserIds.length === updated.whoCheckedIds.length) {
          await tx.queueSecretMessage.deleteMany({
            where: { id: updated.id }
          });
        }
      }
    });

    return true;
  }

  public async sendPreKey(userId: string, input: PreKeyInput) {
    const { ikPub, opkPubs, spkPub, spkSig } = input;

    const preKey = await this.prismaService.preKey.upsert({
      where: { userId },
      update: { ikPub, opkPubs, spkPub, spkSig },
      create: {
        ikPub,
        opkPubs,
        spkPub,
        spkSig,
        userId,
        indexOpkPub: 0
      }
    });

    if (!preKey) {
      throw new ConflictException("preKey not created");
    }

    const keys = await this.redisService.keys(`*`);
    for (const key of keys) {
      const sessionData = await this.redisService.get(key);
      if (!sessionData) continue;

      const session = JSON.parse(sessionData);
      if (session.userId === userId && session.metadata) {
        session.metadata.publicPreKey = {
          ikPub,
          spkPub,
          splSig: spkSig,
          opkPubs,
          indexOpkPub: 0
        };
        await this.redisService.set(key, JSON.stringify(session));
      }
    }

    return true;
  }

  public async sendSharedSecretKey(
    fromUserId: string,
    input: SharedSecretKeyInput
  ) {
    await this.cleanupExpiredSecretAttachments();

    const chat = await this.ensureSecretChatSendAccess(fromUserId, input.chatId);
    this.assertChatUsersExist(chat, [input.toUserId], fromUserId);

    const {
      chatId,
      toUserId,
      ukm,
      iv,
      encryptedKey,
      sig,
      ikPub,
      ekPub,
      groupId,
      usedOpk
    } = input;

    const sharedSecretKey =
      await this.prismaService.queueSharedSecretKey.create({
        data: {
          fromUserId,
          chatId,
          toUserId,
          ikPub,
          ukm,
          iv,
          encryptedKey,
          sig,
          ekPub,
          groupId,
          usedOpk
        }
      });

    if (!sharedSecretKey) {
      throw new ConflictException("shared secret key not created");
    }

    return sharedSecretKey;
  }

  public async sendSecretMessage(
    fromUserId: string,
    input: SendSecretMessageInput
  ) {
    await this.cleanupExpiredSecretAttachments();

    const {
      chatId,
      encryptedMessage,
      groupId,
      iv,
      sig,
      toUserIds,
      ukm,
      isKey,
      secretAttachmentIds
    } = input;

    const chat = await this.ensureSecretChatSendAccess(fromUserId, chatId);
    const uniqueRecipientIds = this.getUniqueIds(toUserIds);
    this.assertChatUsersExist(chat, uniqueRecipientIds, fromUserId);

    const uniqueAttachmentIds = this.getUniqueIds(secretAttachmentIds);
    const attachmentAllowedUserIds = this.getUniqueIds([
      fromUserId,
      ...uniqueRecipientIds
    ]);
    const committedAt = new Date();

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
          chatId,
          toUserIds: uniqueRecipientIds,
          ukm,
          iv,
          encryptedMessage,
          sig,
          groupId,
          isKey,
          secretAttachmentIds: uniqueAttachmentIds
        }
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
            expiresAt: null
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
      throw new ConflictException("secret message not created");
    }

    return secretMessage;
  }

  public async updateSecretMessageForReader(
    userId: string,
    chatId: string,
    messageId?: string
  ) {
    const where = {
      chatId,
      toUserIds: {
        has: userId
      }
    } as const;

    const secretMessage = messageId
      ? await this.prismaService.queueSecretMessage.findFirst({
          where: {
            ...where,
            id: messageId
          }
        })
      : await this.prismaService.queueSecretMessage.findFirst({
          where,
          orderBy: {
            createdAt: "asc"
          }
        });

    if (!secretMessage) {
      throw new ConflictException("secret message not found");
    }

    if (secretMessage.whoCheckedIds.includes(userId)) {
      throw new ConflictException("secret message not found");
    }

    await this.prismaService.queueSecretMessage.update({
      where: { id: secretMessage.id },
      data: {
        whoCheckedIds: {
          set: [...secretMessage.whoCheckedIds, userId]
        }
      }
    });

    const updated = await this.prismaService.queueSecretMessage.findUnique({
      where: { id: secretMessage.id }
    });

    if (updated) {
      if (updated.toUserIds.length === updated.whoCheckedIds.length) {
        await this.prismaService.queueSecretMessage.delete({
          where: { id: updated.id }
        });
      }
    }

    return updated ?? secretMessage;
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

  private assertChatUsersExist(
    chat: SecretChatAccess,
    targetUserIds: string[],
    currentUserId: string
  ) {
    if (targetUserIds.length === 0) {
      throw new BadRequestException("Secret recipients are required");
    }

    const memberIds = new Set(chat.members.map((member) => member.userId));
    const invalidUserId = targetUserIds.find(
      (targetUserId) =>
        targetUserId === currentUserId || !memberIds.has(targetUserId)
    );

    if (invalidUserId) {
      throw new BadRequestException(
        "Secret recipient list contains a user outside this chat"
      );
    }
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
    const now = new Date();
    const expiredAttachments = await this.prismaService.secretAttachment.findMany(
      {
        where: {
          committedAt: null,
          expiresAt: {
            lte: now
          }
        },
        select: {
          id: true,
          storageKey: true
        }
      }
    );

    for (const attachment of expiredAttachments) {
      try {
        await this.storageService.remove(attachment.storageKey);
      } catch {
        continue;
      }

      await this.prismaService.secretAttachment.deleteMany({
        where: {
          id: attachment.id
        }
      });
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
