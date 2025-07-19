import {
  BadRequestException,
  Injectable,
  InternalServerErrorException
} from "@nestjs/common";

import { Prisma } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { CreateChatInput } from "./inputs/create-chat.input";
import { FiltersInput } from "./inputs/filters.input";

@Injectable()
export class ChatService {
  public constructor(private readonly prismaService: PrismaService) {}

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

        members: {
          include: {
            user: true
          }
        }
      }
    });

    return chat;
  }

  public async createChat(creatorId: string, input: CreateChatInput) {
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
    await this.prismaService.chat.delete({
      where: { id: chatId }
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
