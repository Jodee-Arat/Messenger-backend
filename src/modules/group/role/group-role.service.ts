import {
  BadRequestException,
  ForbiddenException,
  Injectable
} from "@nestjs/common";

import { GroupPermissionEnum } from "@prisma/client";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { UpsertGroupRoleInput } from "./inputs/upsert-group-role.input";

const DEFAULT_ROLE_NAME = "Участник";
const DEFAULT_ROLE_COLOR = "#808080";
const DEFAULT_ROLE_PERMISSIONS: GroupPermissionEnum[] = [
  GroupPermissionEnum.CREATE_CHATS,
  GroupPermissionEnum.DELETE_CHATS,
  GroupPermissionEnum.INVITE_MEMBERS
];
const OWNER_ROLE_NAME = "Owner";
const OWNER_ROLE_COLOR = "#FFD700";
const OWNER_ROLE_PERMISSIONS: GroupPermissionEnum[] = Object.values(
  GroupPermissionEnum
);

@Injectable()
export class GroupRoleService {
  public constructor(private readonly prismaService: PrismaService) {}

  private async validateMemberPermission(
    userId: string,
    groupId: string,
    requiredPermission?: GroupPermissionEnum
  ) {
    const member = await this.prismaService.groupMember.findFirst({
      where: { groupId, userId },
      include: {
        roles: {
          include: { groupRole: true }
        }
      }
    });

    if (!member) {
      throw new BadRequestException("User is not a member of the group");
    }

    if (requiredPermission && !member.isCreator) {
      const hasPermission = member.roles.some((rm) =>
        rm.groupRole.permissions.includes(requiredPermission)
      );
      if (!hasPermission) {
        throw new ForbiddenException("You do not have the required permission");
      }
    }

    return member;
  }

  public async getGroupRoles(userId: string, groupId: string) {
    const group = await this.prismaService.group.findUnique({
      where: { id: groupId },
      include: { roles: true }
    });
    if (!group) throw new BadRequestException("Group not found");

    await this.validateMemberPermission(userId, groupId);

    return group.roles;
  }

  public async getMemberRole(userId: string, groupId: string) {
    const member = await this.prismaService.groupMember.findFirst({
      where: { userId, groupId },
      include: {
        roles: {
          include: { groupRole: true }
        }
      }
    });
    if (!member) throw new BadRequestException("Member not found");

    if (member.isCreator) {
      return {
        id: `owner:${groupId}:${userId}`,
        name: OWNER_ROLE_NAME,
        color: OWNER_ROLE_COLOR,
        groupId,
        permissions: OWNER_ROLE_PERMISSIONS,
        createdAt: member.createdAt,
        updatedAt: member.updatedAt,
        isCreator: true
      };
    }

    const currentRole = member.roles[0]?.groupRole;
    if (!currentRole) {
      return {
        id: `member:${groupId}:${userId}`,
        name: DEFAULT_ROLE_NAME,
        color: DEFAULT_ROLE_COLOR,
        groupId,
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

  public async upsertGroupRole(
    userId: string,
    groupId: string,
    input: UpsertGroupRoleInput
  ) {
    const { color, name, permissions } = input;
    console.log(input, userId, groupId);

    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });
    if (!group) throw new BadRequestException("Group not found");

    const existingRole = await this.prismaService.groupRole.findUnique({
      where: { groupId_name: { groupId, name } }
    });

    const requiredPermission = existingRole
      ? GroupPermissionEnum.CHANGE_ROLE_INFO
      : GroupPermissionEnum.CREATE_ROLES;

    await this.validateMemberPermission(userId, groupId, requiredPermission);

    return this.prismaService.groupRole.upsert({
      where: { groupId_name: { groupId, name } },
      update: { color, permissions },
      create: { groupId, name, color, permissions }
    });
  }

  public async deleteGroupRole(
    userId: string,
    groupId: string,
    roleId: string
  ) {
    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });
    if (!group) throw new BadRequestException("Group not found");

    await this.validateMemberPermission(
      userId,
      groupId,
      GroupPermissionEnum.DELETE_ROLES
    );

    const role = await this.prismaService.groupRole.findFirst({
      where: { id: roleId, groupId }
    });
    if (!role) throw new BadRequestException("Role not found in this group");

    await this.prismaService.groupRole.delete({ where: { id: roleId } });
    return role;
  }

  public async assignRoleToMember(
    userId: string,
    groupId: string,
    roleId: string,
    memberId: string
  ) {
    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });
    if (!group) throw new BadRequestException("Group not found");

    await this.validateMemberPermission(
      userId,
      groupId,
      GroupPermissionEnum.MANAGE_ROLES
    );

    const role = await this.prismaService.groupRole.findFirst({
      where: { id: roleId, groupId }
    });
    if (!role) throw new BadRequestException("Role not found in this group");

    const targetMember = await this.prismaService.groupMember.findFirst({
      where: { userId: memberId, groupId }
    });
    if (!targetMember) {
      throw new BadRequestException("Target member not found in this group");
    }

    const existing = await this.prismaService.groupRoleMember.findUnique({
      where: {
        groupMemberId_groupRoleId: {
          groupMemberId: targetMember.id,
          groupRoleId: roleId
        }
      }
    });
    if (existing) {
      throw new BadRequestException("Member already has this role");
    }

    await this.prismaService.groupRoleMember.create({
      data: { groupMemberId: targetMember.id, groupRoleId: roleId }
    });

    return role;
  }

  public async removeRoleFromMember(
    userId: string,
    groupId: string,
    roleId: string,
    memberId: string
  ) {
    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });
    if (!group) throw new BadRequestException("Group not found");

    await this.validateMemberPermission(
      userId,
      groupId,
      GroupPermissionEnum.MANAGE_ROLES
    );

    const role = await this.prismaService.groupRole.findFirst({
      where: { id: roleId, groupId }
    });
    if (!role) throw new BadRequestException("Role not found in this group");

    const targetMember = await this.prismaService.groupMember.findFirst({
      where: { userId: memberId, groupId }
    });
    if (!targetMember) {
      throw new BadRequestException("Target member not found in this group");
    }

    await this.prismaService.groupRoleMember.delete({
      where: {
        groupMemberId_groupRoleId: {
          groupMemberId: targetMember.id,
          groupRoleId: roleId
        }
      }
    });

    return role;
  }

  /**
   * Creates a default "Участник" role for a newly created group.
   */
  public async createDefaultRole(groupId: string) {
    return this.prismaService.groupRole.create({
      data: {
        groupId,
        name: DEFAULT_ROLE_NAME,
        color: DEFAULT_ROLE_COLOR,
        permissions: DEFAULT_ROLE_PERMISSIONS
      }
    });
  }

  /**
   * Assigns the default role to all non-creator members of the group.
   */
  public async assignDefaultRoleToMembers(
    groupId: string,
    memberIds: string[]
  ) {
    const defaultRole = await this.prismaService.groupRole.findFirst({
      where: { groupId, name: DEFAULT_ROLE_NAME }
    });

    if (!defaultRole) return;

    await this.prismaService.groupRoleMember.createMany({
      data: memberIds.map((memberId) => ({
        groupMemberId: memberId,
        groupRoleId: defaultRole.id
      })),
      skipDuplicates: true
    });
  }
}
