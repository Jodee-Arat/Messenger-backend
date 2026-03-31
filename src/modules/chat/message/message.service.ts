import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef
} from "@nestjs/common";

import {
  Chat,
  ChatMessage,
  ChatPermissionEnum,
  DraftMessage,
  Prisma
} from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { FiltersInput } from "../../inputs/filters.input";
import { StorageService } from "../../libs/storage/storage.service";
import { ChatService } from "../chat.service";

import { RemoveMessagesInput } from "./inputs/remove-messages.input";
import { SendChatMessageInput } from "./inputs/send-chat-message.input";

@Injectable()
export class MessageService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService,
    @Inject(forwardRef(() => ChatService))
    private readonly chatService: ChatService
  ) {}
  public async findAllMessagesByChat(
    userId: string,
    chatId: string,
    input: FiltersInput
  ) {
    await this.chatService.ensureDirectChatAccess(userId, chatId);

    const { searchTerm, skip, take } = input;
    const normalizedSearchTerm = searchTerm?.trim();
    const whereClause = normalizedSearchTerm
      ? this.findBySearchTermMessageFilter(normalizedSearchTerm)
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
      targetChatsId,
      editId,
      forwardedMessageIds = []
    } = input;
    const resolvedTargetChatsId =
      targetChatsId && targetChatsId.length > 0 ? targetChatsId : [chatId];

    await this.chatService.ensureDirectChatMessagingAccess(userId, chatId);
    await this.chatService.ensureChatTargetsWritable(
      userId,
      resolvedTargetChatsId
    );

    // Permission check for group chats
    let chat = await this.prismaService.chat.findUnique({
      where: { id: chatId, isGroup: true },
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
    if (chat?.isGroup) {
      if (editId) {
        await this.chatService.validatePermission(
          userId,
          chatId,
          ChatPermissionEnum.EDIT_MESSAGES
        );
      } else {
        await this.chatService.validatePermission(
          userId,
          chatId,
          ChatPermissionEnum.SEND_MESSAGES
        );
      }
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

    let draftMessage = await this.prismaService.draftMessage.findFirst({
      where: {
        chatId,
        userId
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
            }
          }
        }
      }
    });

    let message: any;

    if (draftMessage?.editId || editId) {
      message = await this.prismaService.chatMessage.update({
        where: { id: editId ?? draftMessage.editId },
        data: {
          text: text ?? "",
          userId,
          isEdited: true,
          chatId: resolvedTargetChatsId[0],
          files: {
            set: [...(fileIds ?? []).map((id) => ({ id }))]
          }
        },
        include: includeOptions
      });

      if (forwardedMessageIds.length === 0) {
        message = await this.prismaService.chatMessage.update({
          where: { id: message.id },
          data: {
            repliedToLinks: {
              deleteMany: {
                replyId: message.id
              }
            }
          }
        });
      }
    } else {
      message = await this.prismaService.chatMessage.create({
        data: {
          text: text ?? "",
          userId,
          chatId: resolvedTargetChatsId[0],
          files: {
            connect: [
              ...(draftMessage?.files ?? []).map((file) => ({ id: file.id }))
            ]
          }
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

        message = await this.prismaService.chatMessage.findUnique({
          where: { id: message.id },
          include: includeOptions
        });
      }
    }
    if (draftMessage) {
      await this.prismaService.fileMessage.updateMany({
        where: {
          draftMessageId: draftMessage.id
        },
        data: {
          chatMessageId: message.id,
          draftMessageId: null
        }
      });
    }
    if (draftMessage?.editId || editId) {
      const chat = await this.prismaService.chat.update({
        where: { id: message.chatId },
        data: {
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

      message = await this.prismaService.chatMessage.findUnique({
        where: { id: message.id },
        include: includeOptions
      });

      return { message, chat };
    }
    chat = await this.prismaService.chat.update({
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
      targetChatsId,
      fileIds,
      forwardedMessageIds = [],
      editId
    } = input;
    const resolvedTargetChatsId =
      targetChatsId && targetChatsId.length > 0 ? targetChatsId : [chatId];

    await this.chatService.ensureDirectChatMessagingAccess(userId, chatId);
    await this.chatService.ensureChatTargetsWritable(
      userId,
      resolvedTargetChatsId
    );

    let draftMessage = await this.prismaService.draftMessage.findFirst({
      where: {
        chatId,
        userId
      },
      include: {
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
            }
          }
        },
        user: true
      }
    });

    if (draftMessage) {
      draftMessage = await this.prismaService.draftMessage.update({
        where: { id: draftMessage.id },
        data: {
          text: text ?? "",
          chatId: resolvedTargetChatsId[0],
          editId: editId ?? undefined,
          filesEditId: fileIds ?? []
        },
        include: {
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
              }
            }
          },
          user: true
        }
      });

      await this.prismaService.draftMessageReply.deleteMany({
        where: {
          repliedToId: {
            in: draftMessage.repliedToLinks.map((link) => link.repliedTo.id)
          }
        }
      });

      if (forwardedMessageIds.length > 0) {
        const relationsData = forwardedMessageIds.map((repliedToId) => ({
          draftMessageId: draftMessage.id,
          repliedToId
        }));

        await this.prismaService.draftMessageReply.createMany({
          data: relationsData,
          skipDuplicates: true
        });
      }
    } else {
      draftMessage = await this.prismaService.draftMessage.create({
        data: {
          text,
          userId,
          chatId: resolvedTargetChatsId[0],
          editId: editId ?? undefined,
          files: {
            connect: [...(fileIds ?? []).map((id) => ({ id }))]
          }
        },
        include: {
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
              }
            }
          },
          user: true
        }
      });

      if (forwardedMessageIds.length > 0) {
        const relationsData = forwardedMessageIds.map((repliedToId) => ({
          draftMessageId: draftMessage.id,
          repliedToId
        }));

        await this.prismaService.draftMessageReply.createMany({
          data: relationsData,
          skipDuplicates: true
        });
      }
    }

    const chat = await this.prismaService.chat.update({
      where: { id: draftMessage.chatId },
      data: {
        draftMessages: {
          connect: {
            id: draftMessage.id
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

    return { draftMessage, chat };
  }

  public async removeMessages(
    userId: string,
    chatId: string,
    input: RemoveMessagesInput
  ) {
    await this.chatService.ensureDirectChatAccess(userId, chatId);

    const { messageIds } = input;

    // Permission check for group chats
    const chatInfo = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      select: { isGroup: true }
    });
    if (chatInfo?.isGroup) {
      await this.chatService.validatePermission(
        userId,
        chatId,
        ChatPermissionEnum.DELETE_MESSAGES
      );
    }

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
      where: { chatId, isForwarded: false },
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
    const { forwardedMessageIds, targetChatsId, text } = input;
    const resolvedTargetChatsId =
      targetChatsId && targetChatsId.length > 0 ? targetChatsId : [chatId];

    if (forwardedMessageIds.length === 0 && !text) {
      throw new BadRequestException("No messages to forward");
    }

    await this.chatService.ensureDirectChatAccess(userId, chatId);
    await this.chatService.ensureChatTargetsWritable(
      userId,
      resolvedTargetChatsId
    );

    let messages: any[] = [];
    let chats: any[] = [];

    for (let targetChatId of resolvedTargetChatsId) {
      this.removeDraftMessage(userId, targetChatId);
      let message = await this.prismaService.chatMessage.create({
        data: {
          text: text ?? "",
          userId,
          chatId: targetChatId,
          isForwarded: true
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
        }
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

      message = await this.prismaService.chatMessage.findUnique({
        where: { id: message.id },
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
        }
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

      messages.push(message);
      chats.push(chat);
    }

    return { messages, chats };
  }

  public async removeDraftMessage(userId: string, chatId: string) {
    return this.prismaService.draftMessage.deleteMany({
      where: {
        userId,
        chatId
      }
    });
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
        },
        {
          files: {
            some: {
              fileName: {
                contains: searchTerm,
                mode: "insensitive"
              }
            }
          }
        }
      ]
    };
  }

  public async findUserById(userId: string) {
    return this.prismaService.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true }
    });
  }
}
