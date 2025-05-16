import {
  BadRequestException,
  ConflictException,
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
      orderBy: {
        lastMessageAt: "desc"
      }
    });

    return chats;
  }

  public async findAllMessagesByChat(
    userId: string,
    chatId: string,
    input: FiltersInput
  ) {
    const { searchTerm, skip, take } = input;
    const whereClause = searchTerm
      ? this.findBySearchTermMessageFilter(searchTerm)
      : null;

    const messages = await this.prismaService.chatMessage.findMany({
      take: take ?? 20,
      skip: skip ?? 0,
      where: {
        chatId,
        isDeleted: false,

        chat: {
          members: {
            some: {
              userId
            }
          }
        },
        ...whereClause
      },
      include: {
        chat: {
          include: {
            members: {
              include: {
                user: true
              }
            }
          }
        },
        replies: true,
        replyTo: {
          include: {}
        },
        user: true
      }
    });

    return messages;
  }

  public async createChat(creatorId: string, input: CreateChatInput) {
    const { chatName, userIds } = input;

    if (!chatName || userIds.length === 0) {
      throw new BadRequestException("Chat name and user IDs must be provided");
    }

    const isGroup = userIds.length > 1;

    if (!isGroup) {
      const existing = await this.prismaService.chat.findFirst({
        where: {
          isGroup: false,
          members: {
            every: {
              id: { in: [creatorId, userIds[0]] }
            }
          }
        },
        include: { members: true }
      });

      if (existing) {
        throw new ConflictException("Chat already exists");
      }
    }

    const chat = await this.prismaService.chat.create({
      data: {
        chatName: chatName,
        isGroup,
        lastMessageAt: isGroup ? new Date() : null,
        members: {
          create: userIds.map((userId) => ({
            user: {
              connect: { id: userId }
            },
            isCreator: isGroup && userId === creatorId
          }))
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

    return true;
  }

  public async sendChatMessage(
    userId: string,
    chatId: string,
    input: { message: string }
  ) {
    const { message } = input;

    if (!message) {
      throw new BadRequestException("Message cannot be empty");
    }

    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: { members: true }
    });

    if (!chat) {
      throw new BadRequestException("Chat not found");
    }

    const isMember = chat.members.some((member) => member.userId === userId);

    if (!isMember) {
      throw new BadRequestException("User is not a member of the chat");
    }

    const chatMessage = await this.prismaService.chatMessage.create({
      data: {
        text: message,
        userId,
        chatId
      },
      include: {
        chat: {
          include: {
            members: {
              include: {
                user: true
              }
            }
          }
        },
        replies: true,
        replyTo: {
          include: {}
        },
        user: true
      }
    });

    return chatMessage;
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

  private findBySearchTermMessageFilter(
    searchTerm: string
  ): Prisma.ChatMessageWhereInput {
    return {
      OR: [
        {
          text: {
            contains: searchTerm,
            mode: "insensitive"
          }
        },
        {
          user: {
            username: {
              contains: searchTerm,
              mode: "insensitive"
            }
          }
        }
      ]
    };
  }
}
