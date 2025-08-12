import {
  BadRequestException,
  Injectable,
  InternalServerErrorException
} from "@nestjs/common";
import { GraphQLUpload, Upload } from "graphql-upload";
import * as sharp from "sharp";

import { Prisma, User } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { FiltersInput } from "../inputs/filters.input";
import { StorageService } from "../libs/storage/storage.service";

import { ChangeGroupInfoInput } from "./inputs/change-group-info.input";
import { CreateGroupInput } from "./inputs/create-group.input";

@Injectable()
export class GroupService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService
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
            user: true
          }
        }
      }
    });
    return group;
  }

  async changeAvatar(user: User, groupId: string, file: Upload) {
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

    return group;
  }

  public async deleteGroup(userId: string, groupId: string) {
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
