import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException
} from "@nestjs/common";
import { GraphQLUpload, Upload } from "graphql-upload";
import * as sharp from "sharp";

import { GroupPermissionEnum, Prisma, User } from "@prisma/client";
import { PrismaService } from "../../core/prisma/prisma.service";

import { FiltersInput } from "../inputs/filters.input";
import { StorageService } from "../libs/storage/storage.service";
import { FriendshipService } from "../friendship/friendship.service";

import { ChangeGroupInfoInput } from "./inputs/change-group-info.input";
import { CreateGroupInput } from "./inputs/create-group.input";
import { GroupRoleService } from "./role/group-role.service";

type RemovedGroupChat = {
  id: string;
  isSecret: boolean;
  groupId: string | null;
  members: Array<{ userId: string }>;
};

type RemoveGroupMemberResult = {
  groupId: string;
  removedUserId: string;
  removedChats: RemovedGroupChat[];
};

@Injectable()
export class GroupService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService,
    private readonly groupRoleService: GroupRoleService,
    private readonly friendshipService: FriendshipService
  ) {}

  private hasGroupPermission(
    member: {
      isCreator: boolean;
      roles: Array<{ groupRole: { permissions: GroupPermissionEnum[] } }>;
    },
    requiredPermission: GroupPermissionEnum
  ) {
    if (member.isCreator) {
      return true;
    }

    return member.roles.some((rm) =>
      rm.groupRole.permissions.includes(requiredPermission)
    );
  }

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

    const hasPermission = this.hasGroupPermission(member, requiredPermission);

    if (!hasPermission) {
      throw new ForbiddenException("You do not have the required permission");
    }

    return member;
  }

  public async findAllGroupsByUser(userId: string, input: FiltersInput) {
    const { searchTerm, skip, take } = input;
    const normalizedSearchTerm = searchTerm?.trim();

    const whereClause = normalizedSearchTerm
      ? this.findBySearchTermGroupFilter(normalizedSearchTerm)
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
      },
      orderBy: {
        createdAt: "desc"
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
    const group = await this.prismaService.group.findUnique({
      where: { id: groupId }
    });

    if (!group) {
      throw new BadRequestException("Group not found");
    }

    const member = await this.prismaService.groupMember.findFirst({
      where: {
        groupId,
        userId: user.id
      },
      include: {
        roles: {
          include: { groupRole: true }
        }
      }
    });

    if (!member) {
      throw new BadRequestException("User is not a member of the group");
    }

    const normalizedDescription = input.description ?? "";
    const wantsToChangeGroupName = group.groupName !== input.groupName;
    const wantsToChangeDescription =
      (group.description ?? "") !== normalizedDescription;

    if (!wantsToChangeGroupName && !wantsToChangeDescription) {
      return true;
    }

    if (
      wantsToChangeGroupName &&
      !this.hasGroupPermission(member, GroupPermissionEnum.CHANGE_GROUP_NAME)
    ) {
      throw new ForbiddenException("You do not have the required permission");
    }

    if (
      wantsToChangeDescription &&
      !this.hasGroupPermission(member, GroupPermissionEnum.CHANGE_GROUP_INFO)
    ) {
      throw new ForbiddenException("You do not have the required permission");
    }

    await this.prismaService.group.update({
      where: { id: groupId },
      data: {
        description: normalizedDescription,
        groupName: input.groupName
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

    const secretAttachmentStorageKeys = (
      await this.prismaService.secretAttachment.findMany({
        where: {
          chat: {
            groupId
          }
        },
        select: {
          storageKey: true
        }
      })
    ).map((attachment) => attachment.storageKey);

    for (const storageKey of secretAttachmentStorageKeys) {
      await this.storageService.remove(storageKey);
    }

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

    const friendship =
      await this.friendshipService.findAcceptedFriendshipBetweenUsers(
        userId,
        targetUserId
      );

    if (!friendship) {
      throw new BadRequestException("Only friends can be invited to the group");
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
    const isSelfLeave = userId === targetUserId;

    if (!isSelfLeave) {
      await this.validatePermission(
        userId,
        groupId,
        GroupPermissionEnum.REMOVE_MEMBERS
      );
    }

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
      throw new BadRequestException(
        isSelfLeave
          ? "Group creator cannot leave the group. Delete it instead."
          : "Cannot remove the group creator"
      );
    }

    return this.prismaService.$transaction(async (tx) => {
      const targetChatMemberships = await tx.chatMember.findMany({
        where: {
          userId: targetUserId,
          chat: {
            groupId
          }
        },
        select: {
          id: true,
          chatId: true
        }
      });

      const targetChatMemberIds = targetChatMemberships.map((item) => item.id);
      const targetChatIds = Array.from(
        new Set(targetChatMemberships.map((item) => item.chatId))
      );

      await tx.groupRoleMember.deleteMany({
        where: { groupMemberId: targetMember.id }
      });

      if (targetChatMemberIds.length > 0) {
        await tx.chatRoleMember.deleteMany({
          where: {
            chatMemberId: {
              in: targetChatMemberIds
            }
          }
        });

        await tx.draftMessage.deleteMany({
          where: {
            userId: targetUserId,
            chatId: {
              in: targetChatIds
            }
          }
        });

        await tx.pinnedChat.deleteMany({
          where: {
            userId: targetUserId,
            chatId: {
              in: targetChatIds
            }
          }
        });

        await tx.chatMember.deleteMany({
          where: {
            id: {
              in: targetChatMemberIds
            }
          }
        });

        await tx.queueSharedSecretKey.deleteMany({
          where: {
            chatId: {
              in: targetChatIds
            }
          }
        });
      }

      await tx.groupMember.delete({
        where: { id: targetMember.id }
      });

      const removedChats =
        targetChatIds.length > 0
          ? await tx.chat.findMany({
              where: {
                id: {
                  in: targetChatIds
                }
              },
              select: {
                id: true,
                isSecret: true,
                groupId: true,
                members: {
                  select: {
                    userId: true
                  }
                }
              }
            })
          : [];

      return {
        groupId,
        removedUserId: targetUserId,
        removedChats
      } satisfies RemoveGroupMemberResult;
    });
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
        }
      ]
    };
  }
}
