import { ConflictException, Injectable } from "@nestjs/common";

import { PrismaService } from "@/src/core/prisma/prisma.service";
import { RedisService } from "@/src/core/redis/redis.service";

import { CreateSecretChatInput } from "./input/create-secret-chat.input";
import { PreKeyInput } from "./input/preKey.input";
import { SendSecretMessageInput } from "./input/send-secret-message.input";
import { SharedSecretKeyInput } from "./input/shared-secret-key.input";

@Injectable()
export class SecretService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService
  ) {}

  public async getPreKeys(chatId: string, fromUserId: string) {
    let chat = await this.prismaService.chat.findUnique({
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

    let preKeys = await this.prismaService.preKey.findMany({
      where: {
        userId: {
          in: chat.members.map((member) => member.user.id)
        }
      }
    });

    // Дополнительно собираем preKey из Redis-сессий (как в sendPreKey), но пока не возвращаем
    const memberUserIds = chat?.members?.map((member) => member.user.id) || [];
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
            spkSig: spkSig,
            opkPubs,
            indexOpkPub: indexOpkPub + 1 // чтобы не использовать уже взятый ключ
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

    const preKeyOfThisUser = await this.prismaService.preKey.findUnique({
      where: {
        userId
      }
    });
    const updatedOpkPubs = preKeyOfThisUser?.opkPubs.filter((opk) =>
      sharedSecretKey.some((key) => key.usedOpk === opk)
    );

    await this.prismaService.preKey.updateMany({
      where: {
        userId
      },
      data: {
        opkPubs: {
          set: updatedOpkPubs || []
        }
      }
    });

    await this.prismaService.queueSharedSecretKey.deleteMany({
      where: {
        id: {
          in: sharedSecretKey.map((key) => key.id)
        }
      }
    });

    return sharedSecretKey;
  }

  public async getSecretMessage(userId: string, chatId: string) {
    // Возвращаем объединённый объект, включая ekPub/usedOpk
    const base = await this.updateSecretMessageForReader(userId, chatId);
    if (!base) {
      throw new ConflictException("secret message not found");
    }
    // Попробуем дополнительно получить ekPub/usedOpk для восстановления начальной сессии
    let ikPub: string | null = null;
    let ekPub: string | null = null;
    let usedOpk: string | null = null;
    let ukmFromShared: string | null = null;
    try {
      const sharedKey = await this.prismaService.queueSharedSecretKey.findFirst(
        {
          where: {
            chatId,
            toUserId: userId,
            fromUserId: base.fromUserId
          }
        }
      );
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

  public async sendPreKey(userId: string, input: PreKeyInput) {
    const { ikPub, opkPubs, spkPub, spkSig } = input;
    // скорее всего убираем preKey для БД и оставляем только для редиса, но пока пусть будет так
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
      if (sessionData) {
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
    }
    return true;
  }

  // public async createSecretChat(userId: string, input: CreateSecretChatInput) {
  //   const { action, description, metadata } = input;

  //   const newChat = await this.prismaService.queueAction.create({
  //     data: {
  //       action,
  //       description,
  //       metadata
  //     }
  //   });

  //   if (!newChat) {
  //     throw new ConflictException("Secret chat not created");
  //   }
  //   return newChat;
  // }

  public async sendSharedSecretKey(
    fromUserId: string,
    input: SharedSecretKeyInput
  ) {
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
    const { chatId, encryptedMessage, groupId, iv, sig, toUserIds, ukm } =
      input;

    const secretMessage = await this.prismaService.queueSecretMessage.create({
      data: {
        fromUserId,
        chatId,
        toUserIds,
        ukm,
        iv,
        encryptedMessage,
        sig,
        groupId
      }
    });

    this.prismaService.chat.update({
      where: {
        id: chatId
      },
      data: {
        updatedAt: new Date(),
        lastMessageAt: new Date()
      }
    });

    if (!secretMessage) {
      throw new ConflictException("secret message not created");
    }

    return secretMessage;
  }

  public async updateSecretMessageForReader(userId: string, chatId: string) {
    const secretMessage = await this.prismaService.queueSecretMessage.findFirst(
      {
        where: {
          chatId,
          toUserIds: {
            has: userId
          }
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    );

    if (!secretMessage) {
      throw new ConflictException("secret message not found");
    }

    if (secretMessage.whoCheckedIds.includes(userId)) {
      return null;
    }

    // Mark this message as checked by the current user (use set to avoid connector-specific push issues)
    if (!secretMessage.whoCheckedIds.includes(userId)) {
      await this.prismaService.queueSecretMessage.update({
        where: { id: secretMessage.id },
        data: {
          whoCheckedIds: {
            set: [...secretMessage.whoCheckedIds, userId]
          }
        }
      });
    }

    // Refresh message to get updated whoCheckedIds length
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
}
