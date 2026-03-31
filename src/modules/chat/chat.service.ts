import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException
} from "@nestjs/common";
import { Upload } from "graphql-upload";
import { verify as verifyTotp } from "otplib";
import * as sharp from "sharp";

import {
  ChatPermissionEnum,
  GroupPermissionEnum,
  Prisma,
  User
} from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { FriendshipService } from "../friendship/friendship.service";
import { GroupService } from "../group/group.service";
import { FiltersInput } from "../inputs/filters.input";
import { StorageService } from "../libs/storage/storage.service";

import { ChangeChatInfoInput } from "./inputs/change-chat-info.input";
import { CreateChatInput } from "./inputs/create-chat.input";
import { RoleService } from "./role/role.service";

type ChatAccessTarget = {
  isGroup: boolean;
  isSecret?: boolean;
  members: Array<{ userId: string }>;
};

const leaveChatMessageInclude = {
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
} satisfies Prisma.ChatMessageInclude;

const leaveChatUpdatedChatInclude = {
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
} satisfies Prisma.ChatInclude;

type LeaveChatMessagePayload = Prisma.ChatMessageGetPayload<{
  include: typeof leaveChatMessageInclude;
}>;

type LeaveChatUpdatedChatPayload = Prisma.ChatGetPayload<{
  include: typeof leaveChatUpdatedChatInclude;
}>;

const chatUpdatedBroadcastInclude = {
  members: {
    include: {
      user: true
    }
  },
  lastMessage: {
    include: {
      files: true,
      user: true
    }
  }
} satisfies Prisma.ChatInclude;

// Per-user pin payload: same as broadcast but includes member pinnedMessageId
const chatUpdatedWithPinInclude = {
  members: {
    include: {
      user: true
    }
  },
  lastMessage: {
    include: {
      files: true,
      user: true
    }
  }
} satisfies Prisma.ChatInclude;

type ChatUpdatedBroadcastPayload = Prisma.ChatGetPayload<{
  include: typeof chatUpdatedBroadcastInclude;
}>;

@Injectable()
export class ChatService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService,
    private readonly roleService: RoleService,
    private readonly groupService: GroupService,
    private readonly friendshipService: FriendshipService
  ) {}

  /**
   * Validates that a chat member has the required permission.
   * Creators bypass all permission checks.
   */
  public async validatePermission(
    userId: string,
    chatId: string,
    requiredPermission: ChatPermissionEnum
  ) {
    const member = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId },
      include: {
        roles: {
          include: { chatRole: true }
        },
        chat: {
          select: {
            isGroup: true,
            members: {
              select: {
                userId: true
              }
            }
          }
        }
      }
    });

    if (!member) {
      throw new BadRequestException("User is not a member of the chat");
    }

    // In DM (1-on-1) chats both members have equal rights unless direct contact is blocked
    if (!member.chat?.isGroup) {
      const blockedCounterpartIds =
        await this.getBlockedCounterpartIdsSet(userId);
      this.assertDirectChatNotBlocked(
        userId,
        member.chat,
        blockedCounterpartIds
      );
      return member;
    }

    if (member.isCreator) return member;

    const hasPermission = member.roles.some((rm) =>
      rm.chatRole.permissions.includes(requiredPermission)
    );
    if (!hasPermission) {
      throw new ForbiddenException("You do not have the required permission");
    }

    return member;
  }

  public async checkChatAccess(userId: string, chatId: string) {
    return this.isUserInChat(userId, chatId);
  }

  public async findAllChatsByGroup(
    userId: string,
    groupId: string,
    input: FiltersInput
  ) {
    const { searchTerm, skip, take } = input;
    const normalizedSearchTerm = searchTerm?.trim();

    const whereClause = normalizedSearchTerm
      ? this.findBySearchTermChatFilter(normalizedSearchTerm)
      : undefined;

    const chats = await this.prismaService.chat.findMany({
      take: take ?? 12,
      skip: skip ?? 0,
      where: {
        isDeleted: false,
        groupId,
        group: {
          members: {
            some: {
              userId
            }
          }
        },
        members: {
          some: {
            userId
          }
        },
        ...whereClause
      },
      include: {
        members: {
          include: {
            user: true
          }
        },
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
        },
        pinnedByUser: {
          where: { userId },
          take: 1
        }
      },
      orderBy: {
        lastMessageAt: "desc"
      }
    });

    return chats.map((chat) => ({
      ...chat,
      isPinned: chat.pinnedByUser.length > 0,
      pinnedOrder:
        chat.pinnedByUser.length > 0 ? chat.pinnedByUser[0].order : null,
      pinnedByUser: undefined
    }));
  }

  public async findAllChatsByUser(userId: string, input: FiltersInput) {
    const { searchTerm, skip, take } = input;
    const normalizedSearchTerm = searchTerm?.trim();

    const whereClause = normalizedSearchTerm
      ? this.findBySearchTermChatFilter(normalizedSearchTerm)
      : undefined;

    const chats = await this.prismaService.chat.findMany({
      take: take ?? 12,
      skip: skip ?? 0,
      where: {
        isDeleted: false,
        OR: [
          {
            groupId: null
          },
          {
            group: {
              members: {
                some: {
                  userId
                }
              }
            }
          }
        ],
        members: {
          some: {
            userId
          }
        },
        ...whereClause
      },
      include: {
        members: {
          include: {
            user: true
          }
        },
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
        },
        pinnedByUser: {
          where: { userId },
          take: 1
        }
      },
      orderBy: {
        lastMessageAt: "desc"
      }
    });

    const blockedCounterpartIds =
      await this.getBlockedCounterpartIdsSet(userId);
    const visibleChats = chats.filter(
      (chat) => !this.isDirectChatBlocked(userId, chat, blockedCounterpartIds)
    );

    return visibleChats.map((chat) => ({
      ...chat,
      isPinned: chat.pinnedByUser.length > 0,
      pinnedOrder:
        chat.pinnedByUser.length > 0 ? chat.pinnedByUser[0].order : null,
      pinnedByUser: undefined
    }));
  }

  public async findChatByChatId(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.findFirst({
      where: {
        id: chatId,
        isDeleted: false,
        OR: [
          {
            groupId: null
          },
          {
            group: {
              members: {
                some: {
                  userId
                }
              }
            }
          }
        ],
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
            user: true,
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
            roles: {
              include: { chatRole: true }
            }
          }
        }
      }
    });

    if (!chat) return null;

    const blockedCounterpartIds =
      await this.getBlockedCounterpartIdsSet(userId);
    this.assertDirectChatNotBlocked(userId, chat, blockedCounterpartIds);

    // Per-user pinned message: take from current user's ChatMember record
    const currentMember = chat.members.find((m) => m.userId === userId);
    const userPinnedMessage = currentMember?.pinnedMessage ?? null;

    // Flatten join table: member.roles -> array of ChatRole objects
    return {
      ...chat,
      pinnedMessage: userPinnedMessage,
      pinnedMessageId: userPinnedMessage?.id ?? null,
      members: chat.members.map((member) => ({
        ...member,
        roles: member.roles.map((rm) => rm.chatRole)
      }))
    };
  }

  async changeAvatar(user: User, chatId: string, file: Upload) {
    await this.validatePermission(
      user.id,
      chatId,
      ChatPermissionEnum.CHANGE_CHAT_AVATAR
    );

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
    await this.validatePermission(
      user.id,
      chatId,
      ChatPermissionEnum.CHANGE_CHAT_AVATAR
    );

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
    await this.validatePermission(
      user.id,
      chatId,
      ChatPermissionEnum.CHANGE_CHAT_INFO
    );

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

  public async findOrCreateDirectChat(
    userId: string,
    friendUserId: string,
    isSecret: boolean = false
  ) {
    await this.friendshipService.ensureUsersCanDirectMessage(
      userId,
      friendUserId
    );

    // Find existing DM between these two users
    const existing = await this.prismaService.chat.findFirst({
      where: {
        isGroup: false,
        isDeleted: false,
        isSecret,
        groupId: null,
        AND: [
          { members: { some: { userId } } },
          { members: { some: { userId: friendUserId } } }
        ]
      },
      include: {
        members: { include: { user: true } },
        lastMessage: { include: { files: true, user: true } }
      }
    });

    if (existing) return existing;

    // Verify friend user exists
    const friendUser = await this.prismaService.user.findUnique({
      where: { id: friendUserId }
    });
    if (!friendUser) {
      throw new BadRequestException("User not found");
    }

    const currentUser = await this.prismaService.user.findUnique({
      where: { id: userId }
    });

    const chat = await this.prismaService.chat.create({
      data: {
        chatName: friendUser.username,
        isGroup: false,
        isSecret,
        groupId: null,
        lastMessageAt: new Date(),
        members: {
          create: [
            { user: { connect: { id: userId } }, isCreator: false },
            { user: { connect: { id: friendUserId } }, isCreator: false }
          ]
        }
      },
      include: {
        members: { include: { user: true } },
        lastMessage: { include: { files: true, user: true } }
      }
    });

    if (!chat) {
      throw new InternalServerErrorException("Failed to create direct chat");
    }

    return chat;
  }

  public async createChat(
    creatorId: string,
    groupId: string,
    input: CreateChatInput
  ) {
    const { chatName, userIds, isSecret, isGroup } = input;

    // Validate that the user has CREATE_CHATS permission in the group
    // (creators bypass this check automatically)
    await this.groupService.validatePermission(
      creatorId,
      groupId,
      GroupPermissionEnum.CREATE_CHATS
    );

    if (!chatName || userIds.length === 0) {
      throw new BadRequestException("Chat name and user IDs must be provided");
    }

    const allUsersIds = [creatorId, ...userIds];

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
        isSecret,
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
      // Create default "Участник" role and assign to all members
      await this.roleService.createDefaultRole(chat.id);

      if (chat.members.length > 0) {
        await this.roleService.assignDefaultRoleToMembers(
          chat.id,
          chat.members.map((m) => m.id)
        );
      }

      await this.prismaService.chatMessage.create({
        data: {
          chatId: chat.id,
          text: `${chatName} group created`,
          userId: creatorId,
          isStarted: true
        }
      });
    }

    return chat;
  }

  public async deleteChat(userId: string, chatId: string) {
    const member = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId },
      include: {
        chat: {
          select: {
            id: true,
            isGroup: true,
            isSecret: true,
            groupId: true,
            members: {
              select: {
                userId: true
              }
            }
          }
        }
      }
    });
    if (!member) {
      throw new BadRequestException("User is not a member of the chat");
    }
    // DM chats: either party may delete (including after a block, so users can clean up).
    // Group chats: only the creator may delete.
    const isGroup = member.chat?.isGroup;
    if (isGroup && !member.isCreator) {
      throw new ForbiddenException("Only the chat creator can delete the chat");
    }

    const secretAttachmentStorageKeys = (
      await this.prismaService.secretAttachment.findMany({
        where: {
          chatId
        },
        select: {
          storageKey: true
        }
      })
    ).map((attachment) => attachment.storageKey);

    const deletedChatPayload = {
      id: member.chat.id,
      isSecret: member.chat.isSecret,
      groupId: member.chat.groupId,
      members: member.chat.members
    };

    await this.prismaService.$transaction(async (tx) => {
      for (const storageKey of secretAttachmentStorageKeys) {
        await this.storageService.remove(storageKey);
      }

      await tx.pinnedChat.deleteMany({
        where: {
          chatId
        }
      });

      await tx.draftMessage.deleteMany({
        where: {
          chatId
        }
      });

      await tx.chat.delete({
        where: { id: chatId },
      });
    });

    return deletedChatPayload;
  }

  public async pinMessage(userId: string, chatId: string, messageId: string) {
    await this.validatePermission(
      userId,
      chatId,
      ChatPermissionEnum.PIN_MESSAGES
    );

    const message = await this.prismaService.chatMessage.findFirst({
      where: {
        id: messageId,
        chatId,
        isDeleted: false
      },
      select: {
        id: true
      }
    });

    if (!message) {
      throw new BadRequestException("Message not found in chat");
    }

    await this.prismaService.chatMember.updateMany({
      where: { userId, chatId },
      data: {
        pinnedMessageId: messageId
      }
    });
    return true;
  }

  public async unPinMessage(userId: string, chatId: string) {
    await this.validatePermission(
      userId,
      chatId,
      ChatPermissionEnum.PIN_MESSAGES
    );

    await this.prismaService.chatMember.updateMany({
      where: { userId, chatId },
      data: {
        pinnedMessageId: null
      }
    });
    return true;
  }

  public async pinChat(userId: string, chatId: string) {
    const maxOrder = await this.prismaService.pinnedChat.aggregate({
      where: { userId },
      _max: { order: true }
    });

    await this.prismaService.pinnedChat.create({
      data: {
        userId,
        chatId,
        order: (maxOrder._max.order ?? -1) + 1
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

  public async updatePinnedChatsOrder(userId: string, chatIds: string[]) {
    const updates = chatIds.map((chatId, index) =>
      this.prismaService.pinnedChat.update({
        where: {
          userId_chatId: { userId, chatId }
        },
        data: { order: index }
      })
    );

    await this.prismaService.$transaction(updates);
    return true;
  }

  public async isUserInChat(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.findFirst({
      where: {
        id: chatId,
        isDeleted: false,
        OR: [
          {
            groupId: null
          },
          {
            group: {
              members: {
                some: {
                  userId
                }
              }
            }
          }
        ],
        members: {
          some: {
            userId
          }
        }
      },
      select: {
        id: true,
        isGroup: true,
        isSecret: true,
        groupId: true,
        members: {
          select: {
            userId: true
          }
        }
      }
    });

    if (!chat) {
      return false;
    }

    const blockedCounterpartIds =
      await this.getBlockedCounterpartIdsSet(userId);
    return !this.isDirectChatBlocked(userId, chat, blockedCounterpartIds);
  }

  public async leaveChat(userId: string, chatId: string) {
    const member = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId },
      include: {
        chat: {
          select: {
            isGroup: true,
            isSecret: true
          }
        }
      }
    });
    if (!member) {
      throw new BadRequestException("User is not a member of this chat");
    }
    if (member.isCreator) {
      throw new ForbiddenException(
        "Chat creator cannot leave the chat. Delete it instead."
      );
    }

    // Remove role assignments first
    await this.prismaService.chatRoleMember.deleteMany({
      where: { chatMemberId: member.id }
    });

    await this.prismaService.draftMessage.deleteMany({
      where: { chatId, userId }
    });

    await this.prismaService.pinnedChat.deleteMany({
      where: { chatId, userId }
    });

    await this.prismaService.chatMember.delete({
      where: { id: member.id }
    });

    let leaveMessage: LeaveChatMessagePayload | null = null;
    let updatedChat: LeaveChatUpdatedChatPayload | null = null;

    if (member.chat?.isGroup && !member.chat.isSecret) {
      const leftUser = await this.prismaService.user.findUnique({
        where: { id: userId },
        select: { username: true }
      });

      if (leftUser) {
        leaveMessage = await this.prismaService.chatMessage.create({
          data: {
            chatId,
            text: `${leftUser.username} left the chat`,
            userId,
            isStarted: true
          },
          include: leaveChatMessageInclude
        });

        updatedChat = await this.prismaService.chat.update({
          where: { id: chatId },
          data: {
            lastMessageId: leaveMessage.id,
            lastMessageAt: leaveMessage.createdAt
          },
          include: leaveChatUpdatedChatInclude
        });
      }
    }

    // Return chat with remaining members for subscriptions
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: { members: true }
    });

    return { chat, leaveMessage, updatedChat };
  }

  public async inviteMember(
    userId: string,
    chatId: string,
    targetUserId: string
  ) {
    await this.validatePermission(
      userId,
      chatId,
      ChatPermissionEnum.INVITE_MEMBERS
    );

    const existingMember = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId: targetUserId }
    });
    if (existingMember) {
      throw new BadRequestException("User is already a member of this chat");
    }

    // If chat requires TOTP, check that the target user has it enabled
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId }
    });
    if (chat?.requireTotp) {
      const targetUser = await this.prismaService.user.findUnique({
        where: { id: targetUserId },
        select: { isTotpEnabled: true }
      });
      if (!targetUser?.isTotpEnabled) {
        throw new BadRequestException(
          "Cannot invite user without TOTP enabled. This chat requires TOTP."
        );
      }
    }

    const member = await this.prismaService.chatMember.create({
      data: {
        chatId,
        userId: targetUserId,
        isCreator: false
      }
    });

    // Assign default role
    await this.roleService.assignDefaultRoleToMembers(chatId, [member.id]);

    // Return chat with isSecret info so the resolver can trigger key distribution
    const updatedChat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: { members: true }
    });

    return updatedChat;
  }

  public async removeMember(
    userId: string,
    chatId: string,
    targetUserId: string
  ) {
    await this.validatePermission(
      userId,
      chatId,
      ChatPermissionEnum.REMOVE_MEMBERS
    );

    if (userId === targetUserId) {
      throw new BadRequestException("You cannot remove yourself");
    }

    const targetMember = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId: targetUserId }
    });
    if (!targetMember) {
      throw new BadRequestException("User is not a member of this chat");
    }
    if (targetMember.isCreator) {
      throw new ForbiddenException("Cannot remove the chat creator");
    }

    // Remove role assignments first
    await this.prismaService.chatRoleMember.deleteMany({
      where: { chatMemberId: targetMember.id }
    });

    await this.prismaService.draftMessage.deleteMany({
      where: { chatId, userId: targetUserId }
    });

    await this.prismaService.pinnedChat.deleteMany({
      where: { chatId, userId: targetUserId }
    });

    await this.prismaService.chatMember.delete({
      where: { id: targetMember.id }
    });

    // Return chat with remaining members for key rotation
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: { members: true }
    });

    return chat;
  }

  /**
   * Clears all queued shared secret keys for a chat.
   * Called during key rotation (after member leave/remove).
   */
  public async clearChatSharedKeys(chatId: string) {
    await this.prismaService.queueSharedSecretKey.deleteMany({
      where: { chatId }
    });
  }

  /**
   * Toggle requireTotp for a secret chat.
   * Can only be enabled if ALL members have isTotpEnabled === true.
   */
  public async toggleRequireTotp(
    userId: string,
    chatId: string,
    enable: boolean
  ) {
    // Only creator (or any member in DM) can toggle
    const member = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId },
      include: {
        chat: {
          select: {
            isGroup: true,
            members: {
              select: {
                userId: true
              }
            }
          }
        }
      }
    });
    if (!member) {
      throw new BadRequestException("User is not a member of the chat");
    }
    const isGroupChat = member.chat?.isGroup;
    if (!isGroupChat) {
      const blockedCounterpartIds =
        await this.getBlockedCounterpartIdsSet(userId);
      this.assertDirectChatNotBlocked(
        userId,
        member.chat,
        blockedCounterpartIds
      );
    }
    if (isGroupChat && !member.isCreator) {
      throw new ForbiddenException(
        "Only the chat creator can toggle TOTP requirement"
      );
    }

    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: {
        members: {
          include: { user: { select: { id: true, isTotpEnabled: true } } }
        }
      }
    });
    if (!chat) {
      throw new BadRequestException("Chat not found");
    }
    if (!chat.isSecret) {
      throw new BadRequestException(
        "TOTP requirement can only be set on secret chats"
      );
    }

    if (enable) {
      // Check all members have TOTP
      const membersWithoutTotp = chat.members.filter(
        (m) => !m.user.isTotpEnabled
      );
      if (membersWithoutTotp.length > 0) {
        throw new BadRequestException(
          "All chat members must have TOTP enabled before this setting can be turned on"
        );
      }
    }

    await this.prismaService.chat.update({
      where: { id: chatId },
      data: { requireTotp: enable }
    });

    return true;
  }

  public async getChatUpdatedBroadcastPayload(
    chatId: string
  ): Promise<ChatUpdatedBroadcastPayload | null> {
    return this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: chatUpdatedBroadcastInclude
    });
  }

  public async getMemberPinnedMessageIds(
    chatId: string
  ): Promise<Record<string, string | null>> {
    const members = await this.prismaService.chatMember.findMany({
      where: { chatId },
      select: { userId: true, pinnedMessageId: true }
    });
    return Object.fromEntries(
      members.map((m) => [m.userId, m.pinnedMessageId ?? null])
    );
  }

  /**
   * Verify a user's TOTP code for chat access.
   * Returns true if the code is valid.
   */
  public async verifyChatTotp(userId: string, chatId: string, code: string) {
    await this.ensureChatTargetsAccessible(userId, [chatId]);

    // Check chat requires TOTP
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId }
    });
    if (!chat?.requireTotp) {
      throw new BadRequestException("This chat does not require TOTP");
    }

    // Check user is a member
    const isMember = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId }
    });
    if (!isMember) {
      throw new ForbiddenException("You are not a member of this chat");
    }

    // Get user's TOTP secret
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: { totpSecret: true, isTotpEnabled: true }
    });
    if (!user?.isTotpEnabled || !user.totpSecret) {
      throw new BadRequestException(
        "You must enable TOTP in your settings before accessing this chat"
      );
    }

    const result = await verifyTotp({ token: code, secret: user.totpSecret });
    if (!result.valid) {
      throw new BadRequestException("Invalid TOTP code");
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
        },
        {
          description: {
            contains: searchTerm,
            mode: "insensitive"
          }
        },
        {
          members: {
            some: {
              user: {
                username: {
                  contains: searchTerm,
                  mode: "insensitive"
                }
              }
            }
          }
        },
        {
          lastMessage: {
            is: {
              text: {
                contains: searchTerm,
                mode: "insensitive"
              }
            }
          }
        }
      ]
    };
  }

  public async ensureChatTargetsAccessible(userId: string, chatIds: string[]) {
    const uniqueChatIds = Array.from(new Set(chatIds.filter(Boolean)));

    if (uniqueChatIds.length === 0) {
      return [];
    }

    const chats = await this.prismaService.chat.findMany({
      where: {
        id: {
          in: uniqueChatIds
        },
        isDeleted: false,
        OR: [
          {
            groupId: null
          },
          {
            group: {
              members: {
                some: {
                  userId
                }
              }
            }
          }
        ],
        members: {
          some: {
            userId
          }
        }
      },
      select: {
        id: true,
        isGroup: true,
        isSecret: true,
        groupId: true,
        members: {
          select: {
            userId: true
          }
        }
      }
    });

    if (chats.length !== uniqueChatIds.length) {
      throw new ForbiddenException("Chat not found or user is not a member");
    }

    const blockedCounterpartIds =
      await this.getBlockedCounterpartIdsSet(userId);
    chats.forEach((chat) =>
      this.assertDirectChatNotBlocked(userId, chat, blockedCounterpartIds)
    );

    return chats;
  }

  public async ensureDirectChatAccess(userId: string, chatId: string) {
    const [chat] = await this.ensureChatTargetsAccessible(userId, [chatId]);
    return chat;
  }

  public async ensureDirectChatMessagingAccess(userId: string, chatId: string) {
    const chat = await this.ensureDirectChatAccess(userId, chatId);

    if (chat.isGroup) {
      return chat;
    }

    const otherMemberId = this.getOtherDirectMemberId(userId, chat);

    if (!otherMemberId) {
      throw new BadRequestException("Direct chat counterpart not found");
    }

    await this.friendshipService.ensureUsersCanDirectMessage(
      userId,
      otherMemberId
    );

    return chat;
  }

  public async ensureChatTargetsWritable(userId: string, chatIds: string[]) {
    const chats = await this.ensureChatTargetsAccessible(userId, chatIds);

    for (const chat of chats) {
      if (chat.isGroup) {
        continue;
      }

      const otherMemberId = this.getOtherDirectMemberId(userId, chat);

      if (!otherMemberId) {
        throw new BadRequestException("Direct chat counterpart not found");
      }

      await this.friendshipService.ensureUsersCanDirectMessage(
        userId,
        otherMemberId
      );
    }

    return chats;
  }

  private async getBlockedCounterpartIdsSet(userId: string) {
    return new Set(
      await this.friendshipService.getBlockedCounterpartIds(userId)
    );
  }

  private getOtherDirectMemberId(userId: string, chat: ChatAccessTarget) {
    return chat.members.find((member) => member.userId !== userId)?.userId;
  }

  private isDirectChatBlocked(
    userId: string,
    chat: ChatAccessTarget,
    blockedCounterpartIds: ReadonlySet<string>
  ) {
    if (chat.isGroup) {
      return false;
    }

    const otherMemberId = this.getOtherDirectMemberId(userId, chat);
    return !!otherMemberId && blockedCounterpartIds.has(otherMemberId);
  }

  private assertDirectChatNotBlocked(
    userId: string,
    chat: ChatAccessTarget,
    blockedCounterpartIds: ReadonlySet<string>
  ) {
    if (this.isDirectChatBlocked(userId, chat, blockedCounterpartIds)) {
      throw new ForbiddenException(
        "Direct contact is unavailable because one of the users has blocked the other"
      );
    }
  }
}
