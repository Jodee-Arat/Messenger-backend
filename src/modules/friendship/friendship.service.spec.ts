import { BadRequestException, ForbiddenException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";

import { PrismaService } from "../../core/prisma/prisma.service";

import { FriendshipService } from "./friendship.service";

describe("FriendshipService", () => {
  let service: FriendshipService;
  let prisma: {
    user: { findUnique: jest.Mock };
    friendship: {
      findFirst: jest.Mock;
      findUnique: jest.Mock;
      findMany: jest.Mock;
      create: jest.Mock;
      update: jest.Mock;
      delete: jest.Mock;
    };
    chat: { create: jest.Mock };
  };

  beforeEach(async () => {
    prisma = {
      user: { findUnique: jest.fn() },
      friendship: {
        findFirst: jest.fn(),
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn()
      },
      chat: { create: jest.fn() }
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FriendshipService,
        { provide: PrismaService, useValue: prisma }
      ]
    }).compile();

    service = module.get<FriendshipService>(FriendshipService);
  });

  describe("sendFriendRequest", () => {
    it("should create a friend request", async () => {
      const friendship = {
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "PENDING"
      };
      prisma.user.findUnique.mockResolvedValue({ id: "user2" });
      prisma.friendship.findFirst.mockResolvedValue(null);
      prisma.friendship.create.mockResolvedValue(friendship);

      const result = await service.sendFriendRequest("user1", "user2");

      expect(result).toEqual(friendship);
      expect(prisma.friendship.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: { userId: "user1", friendId: "user2", status: "PENDING" }
        })
      );
    });

    it("should throw when sending to yourself", async () => {
      await expect(service.sendFriendRequest("user1", "user1")).rejects.toThrow(
        BadRequestException
      );
      await expect(service.sendFriendRequest("user1", "user1")).rejects.toThrow(
        "Cannot send friend request to yourself"
      );
    });

    it("should throw if user not found", async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(service.sendFriendRequest("user1", "user2")).rejects.toThrow(
        "User not found"
      );
    });

    it("should throw if already friends", async () => {
      prisma.user.findUnique.mockResolvedValue({ id: "user2" });
      prisma.friendship.findFirst.mockResolvedValue({
        id: "fr1",
        status: "ACCEPTED"
      });

      await expect(service.sendFriendRequest("user1", "user2")).rejects.toThrow(
        "Already friends"
      );
    });

    it("should throw if request already pending", async () => {
      prisma.user.findUnique.mockResolvedValue({ id: "user2" });
      prisma.friendship.findFirst.mockResolvedValue({
        id: "fr1",
        status: "PENDING"
      });

      await expect(service.sendFriendRequest("user1", "user2")).rejects.toThrow(
        "Friend request already pending"
      );
    });

    it("should throw if user is blocked", async () => {
      prisma.user.findUnique.mockResolvedValue({ id: "user2" });
      prisma.friendship.findFirst.mockResolvedValue({
        id: "fr1",
        status: "BLOCKED"
      });

      await expect(service.sendFriendRequest("user1", "user2")).rejects.toThrow(
        "Cannot send request to this user"
      );
    });

    it("should re-send after decline", async () => {
      prisma.user.findUnique.mockResolvedValue({ id: "user2" });
      prisma.friendship.findFirst.mockResolvedValue({
        id: "fr1",
        status: "DECLINED"
      });
      prisma.friendship.update.mockResolvedValue({
        id: "fr1",
        status: "PENDING",
        userId: "user1",
        friendId: "user2"
      });

      const result = await service.sendFriendRequest("user1", "user2");

      expect(result.status).toBe("PENDING");
      expect(prisma.friendship.update).toHaveBeenCalled();
    });
  });

  describe("sendFriendRequestByUsername", () => {
    it("should find user by username and send request", async () => {
      prisma.user.findUnique
        .mockResolvedValueOnce({ id: "user2", username: "bob" }) // by username
        .mockResolvedValueOnce({ id: "user2" }); // in sendFriendRequest
      prisma.friendship.findFirst.mockResolvedValue(null);
      prisma.friendship.create.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "PENDING"
      });

      const result = await service.sendFriendRequestByUsername("user1", "bob");

      expect(result.friendId).toBe("user2");
    });

    it("should throw if username not found", async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(
        service.sendFriendRequestByUsername("user1", "nonexistent")
      ).rejects.toThrow("User not found");
    });
  });

  describe("acceptFriendRequest", () => {
    it("should accept a pending request and create chat", async () => {
      prisma.friendship.findUnique.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "PENDING"
      });
      prisma.chat.create.mockResolvedValue({ id: "chat1" });
      prisma.friendship.update.mockResolvedValue({
        id: "fr1",
        status: "ACCEPTED"
      });

      const result = await service.acceptFriendRequest("user2", "fr1");

      expect(result.status).toBe("ACCEPTED");
      expect(prisma.chat.create).toHaveBeenCalledWith({
        data: {
          chatName: null,
          isGroup: false,
          members: {
            create: [{ userId: "user1" }, { userId: "user2" }]
          }
        }
      });
    });

    it("should throw if not the recipient", async () => {
      prisma.friendship.findUnique.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "PENDING"
      });

      await expect(service.acceptFriendRequest("user1", "fr1")).rejects.toThrow(
        "Only the recipient can accept a friend request"
      );
    });

    it("should throw if not pending", async () => {
      prisma.friendship.findUnique.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "ACCEPTED"
      });

      await expect(service.acceptFriendRequest("user2", "fr1")).rejects.toThrow(
        "Friend request is not pending"
      );
    });
  });

  describe("declineFriendRequest", () => {
    it("should decline a pending request", async () => {
      prisma.friendship.findUnique.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "PENDING"
      });
      prisma.friendship.update.mockResolvedValue({
        id: "fr1",
        status: "DECLINED"
      });

      const result = await service.declineFriendRequest("user2", "fr1");

      expect(result.status).toBe("DECLINED");
    });

    it("should throw if not the recipient", async () => {
      prisma.friendship.findUnique.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "PENDING"
      });

      await expect(
        service.declineFriendRequest("user1", "fr1")
      ).rejects.toThrow("Only the recipient can decline a friend request");
    });
  });

  describe("cancelFriendRequest", () => {
    it("should cancel own outgoing request", async () => {
      const friendship = {
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "PENDING"
      };
      prisma.friendship.findUnique.mockResolvedValue(friendship);
      prisma.friendship.delete.mockResolvedValue(friendship);

      const result = await service.cancelFriendRequest("user1", "fr1");

      expect(result).toEqual(friendship);
      expect(prisma.friendship.delete).toHaveBeenCalledWith({
        where: { id: "fr1" }
      });
    });

    it("should throw if not the sender", async () => {
      prisma.friendship.findUnique.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "PENDING"
      });

      await expect(service.cancelFriendRequest("user2", "fr1")).rejects.toThrow(
        "Only the sender can cancel a friend request"
      );
    });
  });

  describe("removeFriend", () => {
    it("should remove an accepted friendship", async () => {
      const friendship = {
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "ACCEPTED"
      };
      prisma.friendship.findUnique.mockResolvedValue(friendship);
      prisma.friendship.delete.mockResolvedValue(friendship);

      const result = await service.removeFriend("user1", "fr1");

      expect(result).toEqual(friendship);
    });

    it("should throw if not part of friendship", async () => {
      prisma.friendship.findUnique.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "ACCEPTED"
      });

      await expect(service.removeFriend("user3", "fr1")).rejects.toThrow(
        "You are not part of this friendship"
      );
    });

    it("should throw if not friends", async () => {
      prisma.friendship.findUnique.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "PENDING"
      });

      await expect(service.removeFriend("user1", "fr1")).rejects.toThrow(
        "You are not friends"
      );
    });
  });

  describe("blockUser", () => {
    it("should block a user", async () => {
      prisma.user.findUnique.mockResolvedValue({ id: "user2" });
      prisma.friendship.findFirst.mockResolvedValue(null);
      prisma.friendship.create.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "BLOCKED"
      });

      const result = await service.blockUser("user1", "user2");

      expect(result.status).toBe("BLOCKED");
    });

    it("should throw when blocking yourself", async () => {
      await expect(service.blockUser("user1", "user1")).rejects.toThrow(
        "Cannot block yourself"
      );
    });

    it("should throw if already blocked", async () => {
      prisma.user.findUnique.mockResolvedValue({ id: "user2" });
      prisma.friendship.findFirst.mockResolvedValue({
        id: "fr1",
        status: "BLOCKED"
      });

      await expect(service.blockUser("user1", "user2")).rejects.toThrow(
        "User is already blocked"
      );
    });
  });

  describe("unblockUser", () => {
    it("should unblock a user", async () => {
      const friendship = {
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "BLOCKED"
      };
      prisma.friendship.findUnique.mockResolvedValue(friendship);
      prisma.friendship.delete.mockResolvedValue(friendship);

      const result = await service.unblockUser("user1", "fr1");

      expect(result).toEqual(friendship);
    });

    it("should throw if not the blocker", async () => {
      prisma.friendship.findUnique.mockResolvedValue({
        id: "fr1",
        userId: "user1",
        friendId: "user2",
        status: "BLOCKED"
      });

      await expect(service.unblockUser("user2", "fr1")).rejects.toThrow(
        "Only the blocker can unblock"
      );
    });
  });

  describe("getFriends", () => {
    it("should return accepted friendships for user", async () => {
      const friends = [
        { id: "fr1", userId: "user1", friendId: "user2", status: "ACCEPTED" }
      ];
      prisma.friendship.findMany.mockResolvedValue(friends);

      const result = await service.getFriends("user1");

      expect(result).toEqual(friends);
      expect(prisma.friendship.findMany).toHaveBeenCalledWith({
        where: {
          OR: [{ userId: "user1" }, { friendId: "user1" }],
          status: "ACCEPTED"
        },
        include: { user: true, friend: true }
      });
    });
  });

  describe("getIncomingRequests", () => {
    it("should return pending requests where user is recipient", async () => {
      prisma.friendship.findMany.mockResolvedValue([]);

      await service.getIncomingRequests("user1");

      expect(prisma.friendship.findMany).toHaveBeenCalledWith({
        where: { friendId: "user1", status: "PENDING" },
        include: { user: true }
      });
    });
  });

  describe("getOutgoingRequests", () => {
    it("should return pending requests sent by user", async () => {
      prisma.friendship.findMany.mockResolvedValue([]);

      await service.getOutgoingRequests("user1");

      expect(prisma.friendship.findMany).toHaveBeenCalledWith({
        where: { userId: "user1", status: "PENDING" },
        include: { friend: true }
      });
    });
  });

  describe("getBlockedUsers", () => {
    it("should return blocked friendships", async () => {
      prisma.friendship.findMany.mockResolvedValue([]);

      await service.getBlockedUsers("user1");

      expect(prisma.friendship.findMany).toHaveBeenCalledWith({
        where: { userId: "user1", status: "BLOCKED" },
        include: { friend: true }
      });
    });
  });

  describe("findBlockingFriendshipBetweenUsers", () => {
    it("should query blocked friendships in both directions", async () => {
      prisma.friendship.findFirst.mockResolvedValue({ id: "fr1" });

      const result = await service.findBlockingFriendshipBetweenUsers(
        "user1",
        "user2"
      );

      expect(result).toEqual({ id: "fr1" });
      expect(prisma.friendship.findFirst).toHaveBeenCalledWith({
        where: {
          status: "BLOCKED",
          OR: [
            { userId: "user1", friendId: "user2" },
            { userId: "user2", friendId: "user1" }
          ]
        }
      });
    });
  });

  describe("findAcceptedFriendshipBetweenUsers", () => {
    it("should query accepted friendships in both directions", async () => {
      prisma.friendship.findFirst.mockResolvedValue({ id: "fr1" });

      const result = await service.findAcceptedFriendshipBetweenUsers(
        "user1",
        "user2"
      );

      expect(result).toEqual({ id: "fr1" });
      expect(prisma.friendship.findFirst).toHaveBeenCalledWith({
        where: {
          status: "ACCEPTED",
          OR: [
            { userId: "user1", friendId: "user2" },
            { userId: "user2", friendId: "user1" }
          ]
        }
      });
    });
  });

  describe("ensureUsersCanDirectContact", () => {
    it("should allow direct contact when there is no blocking friendship", async () => {
      prisma.friendship.findFirst.mockResolvedValue(null);

      await expect(
        service.ensureUsersCanDirectContact("user1", "user2")
      ).resolves.toBeUndefined();
    });

    it("should throw when either side has blocked the other", async () => {
      prisma.friendship.findFirst.mockResolvedValue({
        id: "fr1",
        status: "BLOCKED"
      });

      await expect(
        service.ensureUsersCanDirectContact("user1", "user2")
      ).rejects.toThrow(ForbiddenException);
      await expect(
        service.ensureUsersCanDirectContact("user1", "user2")
      ).rejects.toThrow(
        "Direct contact is unavailable because one of the users has blocked the other"
      );
    });
  });

  describe("ensureUsersCanDirectMessage", () => {
    it("should allow direct messaging for accepted friends without block", async () => {
      prisma.friendship.findFirst
        .mockResolvedValueOnce(null)
        .mockResolvedValueOnce({
          id: "fr1",
          status: "ACCEPTED"
        });

      await expect(
        service.ensureUsersCanDirectMessage("user1", "user2")
      ).resolves.toBeUndefined();
    });

    it("should throw when users are not accepted friends", async () => {
      prisma.friendship.findFirst.mockResolvedValue(null);

      await expect(
        service.ensureUsersCanDirectMessage("user1", "user2")
      ).rejects.toThrow(ForbiddenException);
      await expect(
        service.ensureUsersCanDirectMessage("user1", "user2")
      ).rejects.toThrow(
        "Direct messages are only available between friends"
      );
    });
  });

  describe("getBlockedCounterpartIds", () => {
    it("should return unique blocked counterpart ids from both directions", async () => {
      prisma.friendship.findMany.mockResolvedValue([
        { userId: "user1", friendId: "user2" },
        { userId: "user3", friendId: "user1" },
        { userId: "user1", friendId: "user2" }
      ]);

      const result = await service.getBlockedCounterpartIds("user1");

      expect(result).toEqual(["user2", "user3"]);
      expect(prisma.friendship.findMany).toHaveBeenCalledWith({
        where: {
          status: "BLOCKED",
          OR: [{ userId: "user1" }, { friendId: "user1" }]
        },
        select: {
          userId: true,
          friendId: true
        }
      });
    });
  });
});
