import {
  BadRequestException,
  Injectable,
  InternalServerErrorException
} from "@nestjs/common";
import { Upload } from "graphql-upload";
import * as sharp from "sharp";

import { Prisma, User } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { FiltersInput } from "../inputs/filters.input";
import { StorageService } from "../libs/storage/storage.service";

import { ChangeChatInfoInput } from "./inputs/change-group-info.input";
import { CreateChatInput } from "./inputs/create-chat.input";

@Injectable()
export class ChatService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService
  ) {}

  public async checkChatAccess(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.findFirst({
      where: {
        id: chatId,
        isDeleted: false,
        members: {
          some: {
            userId
          }
        }
      }
    });

    return !!chat;
  }

  public async findAllChatsByGroup(
    userId: string,
    groupId: string,
    input: FiltersInput
  ) {
    const { searchTerm, skip, take } = input;

    const whereClause = searchTerm
      ? this.findBySearchTermChatFilter(searchTerm)
      : undefined;

    const chats = await this.prismaService.chat.findMany({
      take: take ?? 12,
      skip: skip ?? 0,
      where: {
        isDeleted: false,
        groupId,
        members: {
          some: {
            userId
          }
        },
        ...whereClause
      },
      include: {
        draftMessages: {
          where: {
            userId
          },
          include: {
            files: true
          }
        },
        lastMessage: {
          include: {
            files: true,
            user: true
          }
        }
      },
      orderBy: {
        lastMessageAt: "desc"
      }
    });

    return chats;
  }

  public async findAllChatsByUser(userId: string, input: FiltersInput) {
    const { searchTerm, skip, take } = input;

    const whereClause = searchTerm
      ? this.findBySearchTermChatFilter(searchTerm)
      : undefined;

    const chats = await this.prismaService.chat.findMany({
      take: take ?? 12,
      skip: skip ?? 0,
      where: {
        isDeleted: false,
        members: {
          some: {
            userId
          }
        },
        ...whereClause
      },
      include: {
        draftMessages: {
          where: {
            userId
          },
          include: {
            files: true
          }
        },
        lastMessage: {
          include: {
            files: true,
            user: true
          }
        }
      },
      orderBy: {
        lastMessageAt: "desc"
      }
    });

    return chats;
  }

  public async findChatByChatId(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.findFirst({
      where: {
        id: chatId,
        isDeleted: false,
        members: {
          some: {
            userId
          }
        }
      },
      include: {
        draftMessages: {
          where: {
            userId
          },

          include: {
            repliedToLinks: {
              include: {
                repliedTo: {
                  include: {
                    files: true,
                    user: true
                  }
                }
              }
            },
            files: true
          }
        },
        pinnedMessage: {
          include: {
            files: true,
            user: true,
            repliedToLinks: {
              include: {
                repliedTo: {
                  include: {
                    files: true,
                    user: true
                  }
                }
              }
            }
          }
        },
        members: {
          include: {
            user: true
          }
        }
      }
    });

    return chat;
  }

  async changeAvatar(user: User, chatId: string, file: Upload) {
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId }
    });
    if (!chat) {
      throw new BadRequestException("Chat not found");
    }
    const chunks: Buffer[] = [];
    for await (const chunk of file.createReadStream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const uniqueName = `${chat.id}-${Date.now()}.webp`;
    const fileName = `/chats/${uniqueName}`;

    let processedBuffer: Buffer;
    if (file.filename && file.filename.endsWith(".gif")) {
      processedBuffer = await sharp(buffer, { animated: true })
        .resize(512, 512)
        .webp()
        .toBuffer();
    } else {
      processedBuffer = await sharp(buffer).resize(512, 512).webp().toBuffer();
    }

    await this.storageService.upload(processedBuffer, fileName, "image/webp");

    if (chat.avatarUrl) {
      await this.storageService.remove(chat.avatarUrl);
    }

    await this.prismaService.chat.update({
      where: { id: chat.id },
      data: { avatarUrl: fileName }
    });

    return fileName;
  }

  public async removeAvatar(user: User, chatId: string) {
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId }
    });

    if (chat.avatarUrl) {
      await this.storageService.remove(chat.avatarUrl);
      await this.prismaService.chat.update({
        where: { id: chat.id },
        data: { avatarUrl: null }
      });
    } else {
      return;
    }
    return true;
  }

  public async changeInfo(
    user: User,
    chatId: string,
    input: ChangeChatInfoInput
  ) {
    const { description, chatName } = input;

    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId }
    });

    if (!chat) {
      throw new BadRequestException("Chat not found");
    }

    await this.prismaService.chat.update({
      where: { id: chatId },
      data: {
        description,
        chatName
      }
    });

    return true;
  }

  public async createChat(
    creatorId: string,
    groupId: string,
    input: CreateChatInput
  ) {
    const { chatName, userIds } = input;

    if (!chatName || userIds.length === 0) {
      throw new BadRequestException("Chat name and user IDs must be provided");
    }

    const allUsersIds = [creatorId, ...userIds];

    const isGroup = userIds.length > 1;

    // if (!isGroup) {
    //   const existing = await this.prismaService.chat.findFirst({
    //     where: {
    //       isGroup: false,
    //       members: {
    //         every: {
    //           id: { in: [creatorId, userIds[0]] }
    //         }
    //       }
    //     },
    //     include: { members: true }
    //   });

    //   if (existing) {
    //     throw new ConflictException("Chat already exists");
    //   }
    // }

    const chat = await this.prismaService.chat.create({
      data: {
        chatName: chatName,
        groupId: groupId,
        isGroup,
        lastMessageAt: new Date(),
        members: {
          create: allUsersIds.map((userId) => ({
            user: {
              connect: { id: userId }
            },
            isCreator: isGroup && userId === creatorId
          }))
        }
      },
      include: {
        lastMessage: {
          include: {
            files: true,
            user: true
          }
        },
        members: {
          include: {
            user: true
          }
        }
      }
    });

    if (!chat) {
      throw new InternalServerErrorException("Failed to create chat");
    }

    if (isGroup) {
      await this.prismaService.chatMessage.create({
        data: {
          chatId: chat.id,
          text: `${chatName} group created`,
          userId: creatorId
        }
      });
    }

    return chat;
  }

  public async deleteChat(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.delete({
      where: { id: chatId },
      include: {
        members: true
      }
    });

    return chat;
  }

  public async pinMessage(userId: string, chatId: string, messageId: string) {
    await this.prismaService.chat.update({
      where: { id: chatId },
      data: {
        pinnedMessageId: messageId
      }
    });
    return true;
  }
  public async unPinMessage(userId: string, chatId: string) {
    await this.prismaService.chat.update({
      where: { id: chatId },
      data: {
        pinnedMessageId: null
      }
    });
    return true;
  }

  public async pinChat(userId: string, chatId: string) {
    await this.prismaService.pinnedChat.create({
      data: {
        userId,
        chatId
      }
    });
    return true;
  }

  public async unPinChat(userId: string, chatId: string) {
    await this.prismaService.pinnedChat.delete({
      where: {
        userId_chatId: {
          userId,
          chatId
        }
      }
    });
    return true;
  }

  public async isUserInChat(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      select: {
        members: {
          where: {
            userId
          },
          select: {
            id: true
          }
        }
      }
    });

    if (!chat || chat.members.length === 0) {
      return false;
    }
    return true;
  }

  private findBySearchTermChatFilter(
    searchTerm: string
  ): Prisma.ChatWhereInput {
    return {
      OR: [
        {
          chatName: {
            contains: searchTerm,
            mode: "insensitive"
          }
        }
      ]
    };
  }
}
