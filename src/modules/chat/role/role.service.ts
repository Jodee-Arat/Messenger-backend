import {
  BadRequestException,
  ForbiddenException,
  Injectable
} from "@nestjs/common";

import { ChatPermissionEnum } from "@prisma/client";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { UpsertChatRoleInput } from "./inputs/upsert-chat-role.input";

const DEFAULT_ROLE_NAME = "Участник";
const DEFAULT_ROLE_COLOR = "#808080";
const DEFAULT_ROLE_PERMISSIONS: ChatPermissionEnum[] = [
  ChatPermissionEnum.SEND_MESSAGES,
  ChatPermissionEnum.EDIT_MESSAGES,
  ChatPermissionEnum.DELETE_MESSAGES,
  ChatPermissionEnum.PIN_MESSAGES,
  ChatPermissionEnum.INVITE_MEMBERS
];
const OWNER_ROLE_NAME = "Owner";
const OWNER_ROLE_COLOR = "#FFD700";
const OWNER_ROLE_PERMISSIONS: ChatPermissionEnum[] = Object.values(
  ChatPermissionEnum
);

@Injectable()
export class RoleService {
  public constructor(private readonly prismaService: PrismaService) {}

  private async validateMemberPermission(
    userId: string,
    chatId: string,
    requiredPermission?: ChatPermissionEnum
  ) {
    const member = await this.prismaService.chatMember.findFirst({
      where: { chatId, userId },
      include: {
        roles: {
          include: { chatRole: true }
        }
      }
    });

    if (!member) {
      throw new BadRequestException("User is not a member of the chat");
    }

    if (requiredPermission && !member.isCreator) {
      const hasPermission = member.roles.some((rm) =>
        rm.chatRole.permissions.includes(requiredPermission)
      );
      if (!hasPermission) {
        throw new ForbiddenException("You do not have the required permission");
      }
    }

    return member;
  }

  public async getMemberChatRole(userId: string, chatId: string) {
    const member = await this.prismaService.chatMember.findFirst({
      where: { userId, chatId },
      include: {
        roles: {
          include: { chatRole: true }
        }
      }
    });
    if (!member) throw new BadRequestException("Member not found");

    if (member.isCreator) {
      return {
        id: `owner:${chatId}:${userId}`,
        name: OWNER_ROLE_NAME,
        color: OWNER_ROLE_COLOR,
        chatId,
        permissions: OWNER_ROLE_PERMISSIONS,
        createdAt: member.createdAt,
        updatedAt: member.updatedAt,
        isCreator: true
      };
    }

    const currentRole = member.roles[0]?.chatRole;
    if (!currentRole) {
      return {
        id: `member:${chatId}:${userId}`,
        name: DEFAULT_ROLE_NAME,
        color: DEFAULT_ROLE_COLOR,
        chatId,
        permissions: DEFAULT_ROLE_PERMISSIONS,
        createdAt: member.createdAt,
        updatedAt: member.updatedAt,
        isCreator: false
      };
    }

    return {
      ...currentRole,
      isCreator: member.isCreator
    };
  }

  public async getChatRoles(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: { roles: true }
    });
    if (!chat) throw new BadRequestException("Chat not found");

    await this.validateMemberPermission(userId, chatId);

    return chat.roles;
  }

  public async upsertChatRole(
    userId: string,
    chatId: string,
    input: UpsertChatRoleInput
  ) {
    const { color, name, permissions } = input;

    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId }
    });
    if (!chat) throw new BadRequestException("Chat not found");

    const existingRole = await this.prismaService.chatRole.findUnique({
      where: { chatId_name: { chatId, name } }
    });

    const requiredPermission = existingRole
      ? ChatPermissionEnum.CHANGE_ROLE_INFO
      : ChatPermissionEnum.CREATE_ROLES;

    await this.validateMemberPermission(userId, chatId, requiredPermission);

    return this.prismaService.chatRole.upsert({
      where: { chatId_name: { chatId, name } },
      update: { color, permissions },
      create: { chatId, name, color, permissions }
    });
  }

  public async deleteChatRole(userId: string, chatId: string, roleId: string) {
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId }
    });
    if (!chat) throw new BadRequestException("Chat not found");

    await this.validateMemberPermission(
      userId,
      chatId,
      ChatPermissionEnum.DELETE_ROLES
    );

    const role = await this.prismaService.chatRole.findFirst({
      where: { id: roleId, chatId }
    });
    if (!role) throw new BadRequestException("Role not found in this chat");

    await this.prismaService.chatRole.delete({ where: { id: roleId } });
    return role;
  }

  public async assignRoleToUser(
    userId: string,
    chatId: string,
    roleId: string,
    memberId: string
  ) {
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId }
    });
    if (!chat) throw new BadRequestException("Chat not found");

    await this.validateMemberPermission(
      userId,
      chatId,
      ChatPermissionEnum.MANAGE_ROLES
    );

    const role = await this.prismaService.chatRole.findFirst({
      where: { id: roleId, chatId }
    });
    if (!role) throw new BadRequestException("Role not found in this chat");

    const targetMember = await this.prismaService.chatMember.findFirst({
      where: { userId: memberId, chatId }
    });
    if (!targetMember) {
      throw new BadRequestException("Target member not found in this chat");
    }

    const existing = await this.prismaService.chatRoleMember.findUnique({
      where: {
        chatMemberId_chatRoleId: {
          chatMemberId: targetMember.id,
          chatRoleId: roleId
        }
      }
    });
    if (existing) {
      throw new BadRequestException("Member already has this role");
    }

    await this.prismaService.chatRoleMember.create({
      data: { chatMemberId: targetMember.id, chatRoleId: roleId }
    });

    return role;
  }

  public async removeRoleFromUser(
    userId: string,
    chatId: string,
    roleId: string,
    memberId: string
  ) {
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId }
    });
    if (!chat) throw new BadRequestException("Chat not found");

    await this.validateMemberPermission(
      userId,
      chatId,
      ChatPermissionEnum.MANAGE_ROLES
    );

    const role = await this.prismaService.chatRole.findFirst({
      where: { id: roleId, chatId }
    });
    if (!role) throw new BadRequestException("Role not found in this chat");

    const targetMember = await this.prismaService.chatMember.findFirst({
      where: { userId: memberId, chatId }
    });
    if (!targetMember) {
      throw new BadRequestException("Target member not found in this chat");
    }

    await this.prismaService.chatRoleMember.delete({
      where: {
        chatMemberId_chatRoleId: {
          chatMemberId: targetMember.id,
          chatRoleId: roleId
        }
      }
    });

    return role;
  }

  /**
   * Creates a default "Участник" role for a newly created chat.
   */
  public async createDefaultRole(chatId: string) {
    return this.prismaService.chatRole.create({
      data: {
        chatId,
        name: DEFAULT_ROLE_NAME,
        color: DEFAULT_ROLE_COLOR,
        permissions: DEFAULT_ROLE_PERMISSIONS
      }
    });
  }

  /**
   * Assigns the default role to all non-creator members of the chat.
   */
  public async assignDefaultRoleToMembers(chatId: string, memberIds: string[]) {
    const defaultRole = await this.prismaService.chatRole.findFirst({
      where: { chatId, name: DEFAULT_ROLE_NAME }
    });

    if (!defaultRole) return;

    await this.prismaService.chatRoleMember.createMany({
      data: memberIds.map((memberId) => ({
        chatMemberId: memberId,
        chatRoleId: defaultRole.id
      })),
      skipDuplicates: true
    });
  }
}
