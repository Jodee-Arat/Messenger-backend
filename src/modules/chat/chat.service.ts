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

import { GroupService } from "../group/group.service";
import { FiltersInput } from "../inputs/filters.input";
import { StorageService } from "../libs/storage/storage.service";

import { ChangeChatInfoInput } from "./inputs/change-chat-info.input";
import { CreateChatInput } from "./inputs/create-chat.input";
import { RoleService } from "./role/role.service";

@Injectable()
export class ChatService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService,
    private readonly roleService: RoleService,
    private readonly groupService: GroupService
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
        chat: { select: { isGroup: true } }
      }
    });

    if (!member) {
      throw new BadRequestException("User is not a member of the chat");
    }

    // In DM (1-on-1) chats both members have equal rights
    if (!(member as any).chat?.isGroup) return member;

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
            user: true,
            roles: {
              include: { chatRole: true }
            }
          }
        }
      }
    });

    if (!chat) return null;

    // Flatten join table: member.roles -> array of ChatRole objects
    return {
      ...chat,
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
          userId: creatorId
        }
      });
    }

    return chat;
  }

  public async deleteChat(userId: string, chatId: string) {
    const member = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId },
      include: { chat: { select: { isGroup: true } } }
    });
    if (!member) {
      throw new BadRequestException("User is not a member of the chat");
    }
    // In DM chats both members can delete; in group chats only creator
    const isGroup = (member as any).chat?.isGroup;
    if (isGroup && !member.isCreator) {
      throw new ForbiddenException("Only the chat creator can delete the chat");
    }

    const chat = await this.prismaService.chat.delete({
      where: { id: chatId },
      include: {
        members: true
      }
    });

    return chat;
  }

  public async pinMessage(userId: string, chatId: string, messageId: string) {
    await this.validatePermission(
      userId,
      chatId,
      ChatPermissionEnum.PIN_MESSAGES
    );

    await this.prismaService.chat.update({
      where: { id: chatId },
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

    await this.prismaService.chat.update({
      where: { id: chatId },
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

  public async leaveChat(userId: string, chatId: string) {
    const member = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId }
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

    await this.prismaService.chatMember.delete({
      where: { id: member.id }
    });

    // Return chat with remaining members for subscriptions
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: { members: true }
    });

    return chat;
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
      include: { chat: { select: { isGroup: true } } }
    });
    if (!member) {
      throw new BadRequestException("User is not a member of the chat");
    }
    const isGroupChat = (member as any).chat?.isGroup;
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

  /**
   * Verify a user's TOTP code for chat access.
   * Returns true if the code is valid.
   */
  public async verifyChatTotp(userId: string, chatId: string, code: string) {
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
        }
      ]
    };
  }
}
