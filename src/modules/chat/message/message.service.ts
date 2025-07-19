import { BadRequestException, Injectable } from "@nestjs/common";

import { ChatMessage, Prisma } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { StorageService } from "../../libs/storage/storage.service";
import { FiltersInput } from "../inputs/filters.input";

import { RemoveMessagesInput } from "./inputs/remove-messages.input";
import { SendChatMessageInput } from "./inputs/send-chat-message.input";

@Injectable()
export class MessageService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService
  ) {}
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
        isForwarded: false,
        isDraft: false,
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
        files: true,
        chat: {
          include: {
            members: {
              include: {
                user: true
              }
            }
          }
        },
        repliedToLinks: {
          include: {
            repliedTo: {
              select: {
                id: true,
                text: true,
                files: true,
                user: true
              }
            },
            reply: {
              select: {
                id: true,
                text: true,
                files: true,
                user: true
              }
            }
          }
        },
        user: true
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return messages;
  }
  public async sendChatMessage(
    userId: string,
    chatId: string,
    input: SendChatMessageInput
  ) {
    const {
      text,
      fileIds = [],
      targetChatId,
      forwardedMessageIds = []
    } = input;

    const includeOptions = {
      files: {
        where: {
          id: { in: fileIds }
        }
      },
      chat: {
        include: {
          members: {
            include: { user: true }
          }
        }
      },
      repliedToLinks: {
        include: {
          repliedTo: {
            select: {
              id: true,
              text: true,
              files: true,
              user: true
            }
          },
          reply: {
            select: {
              id: true,
              text: true,
              files: true,
              user: true
            }
          }
        }
      },

      user: true
    };

    let message: ChatMessage;

    if (text !== null) {
      message = await this.prismaService.chatMessage.create({
        data: {
          text,
          userId,
          chatId: targetChatId,
          files: fileIds.length
            ? {
                connect: fileIds.map((id) => ({ id }))
              }
            : undefined
        },
        include: includeOptions
      });
    } else {
      message = await this.prismaService.chatMessage.findFirst({
        where: {
          files: {
            some: { id: { in: fileIds } }
          }
        },
        include: includeOptions
      });

      if (!message) {
        throw new BadRequestException(
          "Chat message not found for the provided file IDs"
        );
      }
      await this.prismaService.chatMessage.update({
        where: { id: message.id },
        data: {
          isDraft: false,

          draftOfChatId: null
        }
      });
    }

    if (forwardedMessageIds.length > 0) {
      const relationsData = forwardedMessageIds.map((repliedToId) => ({
        replyId: message.id,
        repliedToId
      }));

      await this.prismaService.chatMessageReply.createMany({
        data: relationsData,
        skipDuplicates: true
      });

      message = await this.prismaService.chatMessage.findUnique({
        where: { id: message.id },
        include: includeOptions
      });
    }

    const chat = await this.prismaService.chat.update({
      where: { id: message.chatId },
      data: {
        lastMessageId: message.id,
        lastMessageAt: new Date(),
        draftMessages: {
          deleteMany: {
            userId
          }
        }
      },
      include: {
        members: {
          include: {
            user: true
          }
        },
        draftMessages: {
          include: {
            files: true,
            user: true
          }
        },
        lastMessage: {
          include: {
            files: true,
            user: true
          }
        }
      }
    });

    return { message, chat };
  }

  public async sendChatDraftMessage(
    userId: string,
    chatId: string,
    input: SendChatMessageInput
  ) {
    const {
      text,
      fileIds = [],
      targetChatId,
      forwardedMessageIds = []
    } = input;

    const includeOptions = {
      files: true,
      chat: {
        include: {
          members: {
            include: { user: true }
          }
        }
      },
      repliedToLinks: {
        include: {
          repliedTo: {
            select: {
              id: true,
              text: true,
              files: true,
              user: true
            }
          },
          reply: {
            select: {
              id: true,
              text: true,
              files: true,
              user: true
            }
          }
        }
      },
      user: true
    };

    const chatWithDrafts = await this.prismaService.chat.findFirst({
      where: {
        id: chatId,
        draftMessages: {
          some: {
            userId,
            isDraft: true
          }
        }
      },
      include: {
        draftMessages: {
          where: {
            userId,
            isDraft: true
          },
          include: includeOptions
        }
      }
    });

    const existingDraft = chatWithDrafts?.draftMessages?.[0] ?? null;

    let message: ChatMessage;

    if (existingDraft) {
      message = await this.prismaService.chatMessage.update({
        where: { id: existingDraft.id },
        data: {
          text,
          chatId: targetChatId,
          files: {
            set: fileIds.map((id) => ({ id }))
          }
        },
        include: includeOptions
      });

      await this.prismaService.chatMessageReply.deleteMany({
        where: { replyId: existingDraft.id }
      });

      if (forwardedMessageIds.length > 0) {
        const relationsData = forwardedMessageIds.map((repliedToId) => ({
          replyId: existingDraft.id,
          repliedToId
        }));

        await this.prismaService.chatMessageReply.createMany({
          data: relationsData,
          skipDuplicates: true
        });
      }
    } else {
      message = await this.prismaService.chatMessage.create({
        data: {
          text,
          userId,
          isDraft: true,
          chatId: targetChatId,
          files: fileIds.length
            ? {
                connect: fileIds.map((id) => ({ id }))
              }
            : undefined
        },
        include: includeOptions
      });

      if (forwardedMessageIds.length > 0) {
        const relationsData = forwardedMessageIds.map((repliedToId) => ({
          replyId: message.id,
          repliedToId
        }));

        await this.prismaService.chatMessageReply.createMany({
          data: relationsData,
          skipDuplicates: true
        });
      }
    }

    const chat = await this.prismaService.chat.update({
      where: { id: message.chatId },
      data: {
        draftMessages: {
          connect: {
            id: message.id
          }
        }
      },
      include: {
        members: {
          include: {
            user: true
          }
        },
        draftMessages: {
          where: { userId },
          include: {
            files: true,
            user: true
          }
        }
      }
    });

    return { message, chat };
  }

  public async removeMessages(
    userId: string,
    chatId: string,
    input: RemoveMessagesInput
  ) {
    const { messageIds } = input;

    const messages = await this.prismaService.chatMessage.findMany({
      where: {
        id: { in: messageIds },
        chatId,
        isDeleted: false
      },
      include: {
        files: true,
        repliedToLinks: {
          select: { repliedTo: { select: { id: true, isForwarded: true } } }
        },
        chat: {
          include: {
            members: {
              include: {
                user: true
              }
            }
          }
        }
      }
    });

    if (messages.length === 0) {
      throw new BadRequestException("No messages found to delete");
    } else {
      for (const message of messages) {
        for (const file of message.files) {
          await this.storageService.remove(`${file.fileFullName}`);
        }
        if (message.repliedToLinks?.[0]?.repliedTo?.isForwarded === true) {
          await this.removeMessages(userId, chatId, {
            messageIds: message.repliedToLinks.map((link) => link.repliedTo.id)
          });
        }
      }

      await this.prismaService.chatMessage.deleteMany({
        where: {
          id: { in: messageIds },
          chatId
        }
      });
    }

    const lastMessage = await this.prismaService.chatMessage.findFirst({
      where: { chatId, isForwarded: false, isDraft: false },
      orderBy: { createdAt: "desc" },
      select: { id: true }
    });

    const chat = await this.prismaService.chat.update({
      where: { id: chatId },
      data: {
        lastMessageId: lastMessage ? lastMessage.id : null
      },
      include: {
        members: {
          include: {
            user: true
          }
        }
      }
    });

    return { messageIds, chat };
  }

  public async forwardChatMessage(
    userId: string,
    chatId: string,
    input: SendChatMessageInput
  ) {
    const { forwardedMessageIds, targetChatId, text, fileIds } = input;

    if (forwardedMessageIds.length === 0) {
      throw new BadRequestException("No messages to forward");
    }

    const messages = await this.prismaService.chatMessage.findMany({
      where: {
        id: { in: forwardedMessageIds },
        chatId,
        isDeleted: false,
        chat: {
          members: {
            some: {
              userId
            }
          }
        }
      },
      include: {
        files: true,
        repliedToLinks: {
          include: {
            repliedTo: {
              select: {
                id: true,
                text: true,
                files: true,
                user: true
              }
            },
            reply: {
              select: {
                id: true,
                text: true,
                files: true,
                user: true
              }
            }
          }
        },
        user: true
      }
    });

    if (messages.length === 0) {
      throw new BadRequestException("No messages found to forward");
    }

    const includeOptions = {
      files: true,
      chat: {
        include: {
          members: {
            include: { user: true }
          }
        }
      },
      repliedToLinks: {
        include: {
          repliedTo: {
            select: {
              id: true,
              text: true,
              files: true,
              user: true
            }
          },
          reply: {
            select: {
              id: true,
              text: true,
              files: true,
              user: true
            }
          }
        }
      },
      user: true
    };

    const forwardedMessages = await Promise.all(
      messages.map((message) =>
        this.prismaService.chatMessage.create({
          data: {
            text: message.text,
            userId,
            chatId: targetChatId,
            isForwarded: true,
            files:
              message.files.length > 0
                ? {
                    connect: message.files.map((file) => ({ id: file.id }))
                  }
                : undefined
          },
          include: includeOptions
        })
      )
    );

    let message: ChatMessage;

    if (text !== null) {
      message = await this.prismaService.chatMessage.create({
        data: {
          text,
          userId,
          chatId: targetChatId,
          files: fileIds.length
            ? {
                connect: fileIds.map((id) => ({ id }))
              }
            : undefined
        },
        include: includeOptions
      });
    } else {
      message = await this.prismaService.chatMessage.findFirst({
        where: {
          files: {
            some: { id: { in: fileIds } }
          }
        },
        include: includeOptions
      });

      if (!message) {
        throw new BadRequestException(
          "Chat message not found for the provided file IDs"
        );
      }
    }

    const relationsData = forwardedMessages.map((repliedToId) => ({
      replyId: message.id,
      repliedToId: repliedToId.id
    }));

    await this.prismaService.chatMessageReply.createMany({
      data: relationsData,
      skipDuplicates: true
    });

    message = await this.prismaService.chatMessage.findUnique({
      where: { id: message.id },
      include: includeOptions
    });
    const chat = await this.prismaService.chat.update({
      where: { id: message.chatId },
      data: {
        lastMessageId: message.id,
        lastMessageAt: new Date(),
        draftMessages: {
          deleteMany: {
            userId
          }
        }
      },
      include: {
        members: {
          include: {
            user: true
          }
        },
        draftMessages: {
          where: { userId },
          include: {
            files: true,
            user: true
          }
        },
        lastMessage: {
          include: {
            files: true,
            user: true
          }
        }
      }
    });
    return { message, chat };
  }

  public async editChatMessage(
    userId: string,
    chatId: string,
    messageId: string,
    input: SendChatMessageInput
  ) {
    const {
      text,
      fileIds = [],
      targetChatId,
      forwardedMessageIds = []
    } = input;

    const includeOptions = {
      files: {
        where: {
          id: { in: fileIds }
        }
      },
      chat: {
        include: {
          members: {
            include: { user: true }
          }
        }
      },
      repliedToLinks: {
        include: {
          repliedTo: {
            select: {
              id: true,
              text: true,
              files: true,
              user: true
            }
          },
          reply: {
            select: {
              id: true,
              text: true,
              files: true,
              user: true
            }
          }
        }
      },

      user: true
    };

    let message = await this.prismaService.chatMessage.findFirst({
      where: {
        id: messageId
      },
      include: includeOptions
    });

    if (!message) {
      throw new BadRequestException(
        "Chat message not found for the provided file IDs"
      );
    }

    const updateData: any = { isEdited: true };

    if (text !== undefined && text !== message.text) {
      updateData.text = text;
    }

    const currentFileIds = message.files.map((f) => f.id).sort();
    const newFileIds = [...fileIds].sort();

    const filesChanged =
      currentFileIds.length !== newFileIds.length ||
      !currentFileIds.every((val, index) => val === newFileIds[index]);

    if (filesChanged) {
      await this.prismaService.chatMessage.update({
        where: { id: messageId },
        data: {
          isEdited: true,
          files: {
            set: fileIds.map((id) => ({ id }))
          }
        }
      });
    }

    if (Object.keys(updateData).length > 1) {
      await this.prismaService.chatMessage.update({
        where: { id: messageId },
        data: updateData
      });
    }

    if (forwardedMessageIds.length === 0) {
      if (message.repliedToLinks.length > 0) {
        await this.prismaService.chatMessageReply.deleteMany({
          where: {
            replyId: message.id
          }
        });

        await this.prismaService.chatMessage.update({
          where: { id: message.id },
          data: {
            isEdited: true
          }
        });
      }
    }

    message = await this.prismaService.chatMessage.findUnique({
      where: { id: messageId },
      include: includeOptions
    });

    const chat = await this.prismaService.chat.update({
      where: { id: message.chatId },
      data: {
        draftMessages: {
          connect: {
            id: message.id
          }
        }
      },
      include: {
        members: {
          include: {
            user: true
          }
        },
        draftMessages: {
          where: { userId },
          include: {
            files: true,
            user: true
          }
        }
      }
    });

    return { message, chat };
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
