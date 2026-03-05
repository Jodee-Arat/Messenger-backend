import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException
} from "@nestjs/common";
import { GraphQLUpload, Upload } from "graphql-upload";
import * as sharp from "sharp";

import { GroupPermissionEnum, Prisma, User } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { FiltersInput } from "../inputs/filters.input";
import { StorageService } from "../libs/storage/storage.service";

import { ChangeGroupInfoInput } from "./inputs/change-group-info.input";
import { CreateGroupInput } from "./inputs/create-group.input";
import { GroupRoleService } from "./role/group-role.service";

@Injectable()
export class GroupService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService,
    private readonly groupRoleService: GroupRoleService
  ) {}

  public async checkGroupAccess(userId: string, groupId: string) {
    const group = await this.prismaService.group.findFirst({
      where: {
        id: groupId,
        isDeleted: false,
        members: {
          some: {
            userId
          }
        }
      }
    });

    return !!group;
  }

  /**
   * Validates that a group member has the required permission.
   * Creators bypass all permission checks.
   */
  public async validatePermission(
    userId: string,
    groupId: string,
    requiredPermission: GroupPermissionEnum
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

    // Creator bypasses all permission checks
    if (member.isCreator) return member;

    const hasPermission = member.roles.some((rm) =>
      rm.groupRole.permissions.includes(requiredPermission)
    );
    if (!hasPermission) {
      throw new ForbiddenException("You do not have the required permission");
    }

    return member;
  }

  public async findAllGroupsByUser(userId: string, input: FiltersInput) {
    const { searchTerm, skip, take } = input;

    const whereClause = searchTerm
      ? this.findBySearchTermGroupFilter(searchTerm)
      : undefined;

    const groups = await this.prismaService.group.findMany({
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
      }
    });

    return groups;
  }

  public async findGroupByGroupId(userId: string, groupId: string) {
    const group = await this.prismaService.group.findFirst({
      where: {
        id: groupId,
        isDeleted: false
      },
      include: {
        members: {
          include: {
            user: true,
            roles: {
              include: { groupRole: true }
            }
          }
        }
      }
    });

    if (!group) return null;

    // Flatten join table: member.roles -> array of GroupRole objects
    return {
      ...group,
      members: group.members.map((member) => ({
        ...member,
        roles: member.roles.map((rm) => rm.groupRole)
      }))
    };
  }

  async changeAvatar(user: User, groupId: string, file: Upload) {
    await this.validatePermission(
      user.id,
      groupId,
      GroupPermissionEnum.CHANGE_GROUP_AVATAR
    );

    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });
    if (!group) {
      throw new BadRequestException("Group not found");
    }
    const chunks: Buffer[] = [];
    for await (const chunk of file.createReadStream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const uniqueName = `${group.id}-${Date.now()}.webp`;
    const fileName = `/groups/${uniqueName}`;

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

    if (group.avatarUrl) {
      await this.storageService.remove(group.avatarUrl);
    }

    await this.prismaService.group.update({
      where: { id: group.id },
      data: { avatarUrl: fileName }
    });

    return fileName;
  }

  public async removeAvatar(user: User, groupId: string) {
    await this.validatePermission(
      user.id,
      groupId,
      GroupPermissionEnum.CHANGE_GROUP_AVATAR
    );

    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });
    if (group.avatarUrl) {
      await this.storageService.remove(group.avatarUrl);
      await this.prismaService.group.update({
        where: { id: group.id },
        data: { avatarUrl: null }
      });
    } else {
      return;
    }
    return true;
  }

  public async changeInfo(
    user: User,
    groupId: string,
    input: ChangeGroupInfoInput
  ) {
    await this.validatePermission(
      user.id,
      groupId,
      GroupPermissionEnum.CHANGE_GROUP_INFO
    );

    const { description, groupName } = input;

    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });

    if (!group) {
      throw new BadRequestException("Group not found");
    }

    await this.prismaService.group.update({
      where: { id: groupId },
      data: {
        description,
        groupName
      }
    });

    return true;
  }

  public async createGroup(creatorId: string, input: CreateGroupInput) {
    const { groupName, userIds } = input;

    if (!groupName) {
      throw new BadRequestException("Group name is required.");
    }

    const allUsersIds =
      userIds.length > 0 ? [creatorId, ...userIds] : [creatorId];

    const group = await this.prismaService.group.create({
      data: {
        groupName,
        members: {
          create: allUsersIds.map((userId) => ({
            user: {
              connect: { id: userId }
            },
            isCreator: userId === creatorId
          }))
        }
      },
      include: {
        members: true
      }
    });

    if (!group) {
      throw new InternalServerErrorException("Failed to create group");
    }

    await this.groupRoleService.createDefaultRole(group.id);

    if (group.members.length > 0) {
      await this.groupRoleService.assignDefaultRoleToMembers(
        group.id,
        group.members.map((m) => m.id)
      );
    }

    return group;
  }

  public async deleteGroup(userId: string, groupId: string) {
    await this.validatePermission(
      userId,
      groupId,
      GroupPermissionEnum.DELETE_GROUP
    );

    const group = await this.prismaService.group.delete({
      where: {
        id: groupId
      },
      include: {
        members: true
      }
    });
    return group;
  }

  public async inviteMember(
    userId: string,
    groupId: string,
    targetUserId: string
  ) {
    await this.validatePermission(
      userId,
      groupId,
      GroupPermissionEnum.INVITE_MEMBERS
    );

    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });
    if (!group) {
      throw new BadRequestException("Group not found");
    }

    const existing = await this.prismaService.groupMember.findFirst({
      where: { groupId, userId: targetUserId }
    });
    if (existing) {
      throw new BadRequestException("User is already a member of this group");
    }

    const member = await this.prismaService.groupMember.create({
      data: {
        groupId,
        userId: targetUserId,
        isCreator: false
      },
      include: { user: true }
    });

    await this.groupRoleService.assignDefaultRoleToMembers(groupId, [
      member.id
    ]);

    return true;
  }

  public async removeMember(
    userId: string,
    groupId: string,
    targetUserId: string
  ) {
    await this.validatePermission(
      userId,
      groupId,
      GroupPermissionEnum.REMOVE_MEMBERS
    );

    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });
    if (!group) {
      throw new BadRequestException("Group not found");
    }

    const targetMember = await this.prismaService.groupMember.findFirst({
      where: { groupId, userId: targetUserId }
    });
    if (!targetMember) {
      throw new BadRequestException("User is not a member of this group");
    }
    if (targetMember.isCreator) {
      throw new BadRequestException("Cannot remove the group creator");
    }

    // Remove all role assignments first
    await this.prismaService.groupRoleMember.deleteMany({
      where: { groupMemberId: targetMember.id }
    });

    await this.prismaService.groupMember.delete({
      where: { id: targetMember.id }
    });

    return true;
  }

  public async isUserInGroup(userId: string, groupId: string) {
    const group = await this.prismaService.group.findUnique({
      where: { id: groupId },
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

    if (!group || group.members.length === 0) {
      return false;
    }
    return true;
  }

  private findBySearchTermGroupFilter(
    searchTerm: string
  ): Prisma.GroupWhereInput {
    return {
      OR: [
        {
          groupName: {
            contains: searchTerm,
            mode: "insensitive"
          }
        }
      ]
    };
  }
}
