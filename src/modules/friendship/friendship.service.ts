import {
  BadRequestException,
  ForbiddenException,
  Injectable
} from "@nestjs/common";

import { FriendshipStatusEnum } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";

@Injectable()
export class FriendshipService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findBlockingFriendshipBetweenUsers(
    userId: string,
    targetUserId: string
  ) {
    return this.prismaService.friendship.findFirst({
      where: {
        status: FriendshipStatusEnum.BLOCKED,
        OR: [
          { userId, friendId: targetUserId },
          { userId: targetUserId, friendId: userId }
        ]
      }
    });
  }

  public async findAcceptedFriendshipBetweenUsers(
    userId: string,
    targetUserId: string
  ) {
    return this.prismaService.friendship.findFirst({
      where: {
        status: FriendshipStatusEnum.ACCEPTED,
        OR: [
          { userId, friendId: targetUserId },
          { userId: targetUserId, friendId: userId }
        ]
      }
    });
  }

  public async ensureUsersCanDirectContact(
    userId: string,
    targetUserId: string
  ) {
    const blockingFriendship = await this.findBlockingFriendshipBetweenUsers(
      userId,
      targetUserId
    );

    if (blockingFriendship) {
      throw new ForbiddenException(
        "Direct contact is unavailable because one of the users has blocked the other"
      );
    }
  }

  public async ensureUsersCanDirectMessage(
    userId: string,
    targetUserId: string
  ) {
    await this.ensureUsersCanDirectContact(userId, targetUserId);

    const acceptedFriendship = await this.findAcceptedFriendshipBetweenUsers(
      userId,
      targetUserId
    );

    if (!acceptedFriendship) {
      throw new ForbiddenException(
        "Direct messages are only available between friends"
      );
    }
  }

  public async getBlockedCounterpartIds(userId: string) {
    const blockedFriendships = await this.prismaService.friendship.findMany({
      where: {
        status: FriendshipStatusEnum.BLOCKED,
        OR: [{ userId }, { friendId: userId }]
      },
      select: {
        userId: true,
        friendId: true
      }
    });

    return Array.from(
      new Set(
        blockedFriendships.map((friendship) =>
          friendship.userId === userId ? friendship.friendId : friendship.userId
        )
      )
    );
  }

  /**
   * Отправить заявку в друзья по username
   */
  public async sendFriendRequestByUsername(userId: string, username: string) {
    const friend = await this.prismaService.user.findUnique({
      where: { username }
    });
    if (!friend) throw new BadRequestException("User not found");

    return this.sendFriendRequest(userId, friend.id);
  }

  /**
   * Отправить заявку в друзья
   */
  public async sendFriendRequest(userId: string, friendId: string) {
    if (userId === friendId) {
      throw new BadRequestException("Cannot send friend request to yourself");
    }

    const friend = await this.prismaService.user.findUnique({
      where: { id: friendId }
    });
    if (!friend) throw new BadRequestException("User not found");

    const existing = await this.prismaService.friendship.findFirst({
      where: {
        OR: [
          { userId, friendId },
          { userId: friendId, friendId: userId }
        ]
      }
    });

    if (existing) {
      if (existing.status === FriendshipStatusEnum.ACCEPTED) {
        throw new BadRequestException("Already friends");
      }
      if (existing.status === FriendshipStatusEnum.PENDING) {
        throw new BadRequestException("Friend request already pending");
      }
      if (existing.status === FriendshipStatusEnum.BLOCKED) {
        throw new BadRequestException("Cannot send request to this user");
      }
      if (existing.status === FriendshipStatusEnum.DECLINED) {
        // Повторная заявка после отклонения — обновляем
        return this.prismaService.friendship.update({
          where: { id: existing.id },
          data: { status: FriendshipStatusEnum.PENDING, userId, friendId },
          include: { user: true, friend: true }
        });
      }
    }

    return this.prismaService.friendship.create({
      data: { userId, friendId, status: FriendshipStatusEnum.PENDING },
      include: { user: true, friend: true }
    });
  }

  /**
   * Принять заявку в друзья (может только получатель friendId)
   */
  public async acceptFriendRequest(userId: string, friendshipId: string) {
    const friendship = await this.prismaService.friendship.findUnique({
      where: { id: friendshipId }
    });
    if (!friendship) throw new BadRequestException("Friend request not found");

    if (friendship.friendId !== userId) {
      throw new BadRequestException(
        "Only the recipient can accept a friend request"
      );
    }

    if (friendship.status !== FriendshipStatusEnum.PENDING) {
      throw new BadRequestException("Friend request is not pending");
    }

    await this.prismaService.chat.create({
      data: {
        chatName: null,
        isGroup: false,
        members: {
          create: [
            { userId: friendship.userId },
            { userId: friendship.friendId }
          ]
        }
      }
    });

    return this.prismaService.friendship.update({
      where: { id: friendshipId },
      data: { status: FriendshipStatusEnum.ACCEPTED },
      include: { user: true, friend: true }
    });
  }

  /**
   * Отклонить заявку в друзья (может только получатель friendId)
   */
  public async declineFriendRequest(userId: string, friendshipId: string) {
    const friendship = await this.prismaService.friendship.findUnique({
      where: { id: friendshipId }
    });
    if (!friendship) throw new BadRequestException("Friend request not found");

    if (friendship.friendId !== userId) {
      throw new BadRequestException(
        "Only the recipient can decline a friend request"
      );
    }

    if (friendship.status !== FriendshipStatusEnum.PENDING) {
      throw new BadRequestException("Friend request is not pending");
    }

    return this.prismaService.friendship.update({
      where: { id: friendshipId },
      data: { status: FriendshipStatusEnum.DECLINED },
      include: { user: true, friend: true }
    });
  }

  /**
   * Отменить свою исходящую заявку (может только инициатор userId)
   */
  public async cancelFriendRequest(userId: string, friendshipId: string) {
    const friendship = await this.prismaService.friendship.findUnique({
      where: { id: friendshipId },
      include: { user: true, friend: true }
    });
    if (!friendship) throw new BadRequestException("Friend request not found");

    if (friendship.userId !== userId) {
      throw new BadRequestException(
        "Only the sender can cancel a friend request"
      );
    }

    if (friendship.status !== FriendshipStatusEnum.PENDING) {
      throw new BadRequestException("Friend request is not pending");
    }

    await this.prismaService.friendship.delete({
      where: { id: friendshipId }
    });

    return friendship;
  }

  /**
   * Удалить из друзей (может любая сторона)
   */
  public async removeFriend(userId: string, friendshipId: string) {
    const friendship = await this.prismaService.friendship.findUnique({
      where: { id: friendshipId },
      include: { user: true, friend: true }
    });
    if (!friendship) throw new BadRequestException("Friendship not found");

    if (friendship.userId !== userId && friendship.friendId !== userId) {
      throw new BadRequestException("You are not part of this friendship");
    }

    if (friendship.status !== FriendshipStatusEnum.ACCEPTED) {
      throw new BadRequestException("You are not friends");
    }

    await this.prismaService.friendship.delete({
      where: { id: friendshipId }
    });

    return friendship;
  }

  /**
   * Заблокировать пользователя
   */
  public async blockUser(userId: string, targetUserId: string) {
    if (userId === targetUserId) {
      throw new BadRequestException("Cannot block yourself");
    }

    const target = await this.prismaService.user.findUnique({
      where: { id: targetUserId }
    });
    if (!target) throw new BadRequestException("User not found");

    const existing = await this.prismaService.friendship.findFirst({
      where: {
        OR: [
          { userId, friendId: targetUserId },
          { userId: targetUserId, friendId: userId }
        ]
      }
    });

    if (existing) {
      if (existing.status === FriendshipStatusEnum.BLOCKED) {
        throw new BadRequestException("User is already blocked");
      }
      return this.prismaService.friendship.update({
        where: { id: existing.id },
        data: {
          status: FriendshipStatusEnum.BLOCKED,
          userId,
          friendId: targetUserId
        },
        include: { user: true, friend: true }
      });
    }

    return this.prismaService.friendship.create({
      data: {
        userId,
        friendId: targetUserId,
        status: FriendshipStatusEnum.BLOCKED
      },
      include: { user: true, friend: true }
    });
  }

  /**
   * Разблокировать пользователя (может только тот, кто заблокировал)
   */
  public async unblockUser(userId: string, friendshipId: string) {
    const friendship = await this.prismaService.friendship.findUnique({
      where: { id: friendshipId },
      include: { user: true, friend: true }
    });
    if (!friendship) throw new BadRequestException("Friendship not found");

    if (friendship.userId !== userId) {
      throw new BadRequestException("Only the blocker can unblock");
    }

    if (friendship.status !== FriendshipStatusEnum.BLOCKED) {
      throw new BadRequestException("User is not blocked");
    }

    await this.prismaService.friendship.delete({
      where: { id: friendshipId }
    });

    return friendship;
  }

  /**
   * Получить список друзей (принятые)
   */
  public async getFriends(userId: string) {
    return this.prismaService.friendship.findMany({
      where: {
        OR: [{ userId }, { friendId: userId }],
        status: FriendshipStatusEnum.ACCEPTED
      },
      include: { user: true, friend: true }
    });
  }

  /**
   * Получить входящие заявки в друзья
   */
  public async getIncomingRequests(userId: string) {
    return this.prismaService.friendship.findMany({
      where: {
        friendId: userId,
        status: FriendshipStatusEnum.PENDING
      },
      include: { user: true }
    });
  }

  /**
   * Получить исходящие заявки в друзья
   */
  public async getOutgoingRequests(userId: string) {
    return this.prismaService.friendship.findMany({
      where: {
        userId,
        status: FriendshipStatusEnum.PENDING
      },
      include: { friend: true }
    });
  }

  /**
   * Получить список заблокированных пользователей
   */
  public async getBlockedUsers(userId: string) {
    return this.prismaService.friendship.findMany({
      where: {
        userId,
        status: FriendshipStatusEnum.BLOCKED
      },
      include: { friend: true }
    });
  }
}
