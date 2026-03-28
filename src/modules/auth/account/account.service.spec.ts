import { ConflictException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";

import { PrismaService } from "@/src/core/prisma/prisma.service";

import { AccountService } from "./account.service";

// Mock argon2 BEFORE imports
jest.mock("argon2", () => ({
  hash: jest.fn().mockResolvedValue("hashed_password")
}));

// Mock otplib BEFORE imports
jest.mock("otplib", () => ({
  generateSecret: jest.fn().mockReturnValue("TOTPSECRET123"),
  generateURI: jest
    .fn()
    .mockReturnValue(
      "otpauth://totp/AraratMessenger:test@test.com?secret=TOTPSECRET123"
    ),
  verify: jest.fn()
}));

// Mock qrcode BEFORE imports
jest.mock("qrcode", () => ({
  toDataURL: jest.fn().mockResolvedValue("data:image/png;base64,qrcode")
}));

describe("AccountService", () => {
  let service: AccountService;
  let prisma: {
    user: {
      findUnique: jest.Mock;
      findMany: jest.Mock;
      create: jest.Mock;
      update: jest.Mock;
    };
    friendship: {
      findMany: jest.Mock;
    };
  };

  beforeEach(async () => {
    prisma = {
      user: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn()
      },
      friendship: {
        findMany: jest.fn()
      }
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountService, { provide: PrismaService, useValue: prisma }]
    }).compile();

    service = module.get<AccountService>(AccountService);
  });

  describe("create", () => {
    const input = {
      email: "test@test.com",
      password: "password123",
      username: "testuser"
    };

    it("should create a user successfully", async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      prisma.user.create.mockResolvedValue({ id: "1", ...input });

      const result = await service.create(input);

      expect(result).toBe(true);
      expect(prisma.user.create).toHaveBeenCalledWith({
        data: {
          email: "test@test.com",
          password: "hashed_password",
          username: "testuser"
        }
      });
    });

    it("should throw ConflictException if username exists", async () => {
      prisma.user.findUnique.mockResolvedValue({
        id: "1",
        username: "testuser"
      }); // username lookup always returns existing

      await expect(service.create(input)).rejects.toThrow(ConflictException);
    });

    it("should throw ConflictException if email exists", async () => {
      prisma.user.findUnique
        .mockResolvedValueOnce(null) // username lookup
        .mockResolvedValueOnce({ id: "1", email: "test@test.com" }); // email lookup

      await expect(service.create(input)).rejects.toThrow(ConflictException);
    });
  });

  describe("generateTotpSecret", () => {
    it("should generate TOTP secret for user", async () => {
      prisma.user.findUnique.mockResolvedValue({
        id: "user1",
        email: "test@test.com",
        isTotpEnabled: false
      });
      prisma.user.update.mockResolvedValue({});

      const result = await service.generateTotpSecret("user1");

      expect(result.totpSecret).toBe("TOTPSECRET123");
      expect(result.qrCodeUrl).toBe("data:image/png;base64,qrcode");
      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: "user1" },
        data: { totpSecret: "TOTPSECRET123", isTotpEnabled: false }
      });
    });

    it("should throw if user not found", async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(service.generateTotpSecret("nonexistent")).rejects.toThrow(
        ConflictException
      );
    });

    it("should throw if TOTP already enabled", async () => {
      prisma.user.findUnique.mockResolvedValue({
        id: "user1",
        isTotpEnabled: true
      });

      await expect(service.generateTotpSecret("user1")).rejects.toThrow(
        "TOTP is already enabled"
      );
    });
  });

  describe("enableTotp", () => {
    it("should enable TOTP with valid token", async () => {
      prisma.user.findUnique.mockResolvedValue({
        id: "user1",
        totpSecret: "TOTPSECRET123"
      });
      prisma.user.update.mockResolvedValue({});

      const { verify } = require("otplib");
      verify.mockReturnValue({ valid: true });

      const result = await service.enableTotp("user1", "123456");

      expect(result).toBe(true);
      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: "user1" },
        data: { isTotpEnabled: true }
      });
    });

    it("should throw if token is invalid", async () => {
      prisma.user.findUnique.mockResolvedValue({
        id: "user1",
        totpSecret: "TOTPSECRET123"
      });

      const { verify } = require("otplib");
      verify.mockReturnValue({ valid: false });

      await expect(service.enableTotp("user1", "000000")).rejects.toThrow(
        "Invalid TOTP code"
      );
    });

    it("should throw if user has no TOTP secret", async () => {
      prisma.user.findUnique.mockResolvedValue({
        id: "user1",
        totpSecret: null
      });

      await expect(service.enableTotp("user1", "123456")).rejects.toThrow(
        ConflictException
      );
    });
  });

  describe("disableTotp", () => {
    it("should disable TOTP", async () => {
      prisma.user.findUnique.mockResolvedValue({ id: "user1" });
      prisma.user.update.mockResolvedValue({});

      const result = await service.disableTotp("user1");

      expect(result).toBe(true);
      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: "user1" },
        data: { totpSecret: null, isTotpEnabled: false }
      });
    });

    it("should throw if user not found", async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(service.disableTotp("nonexistent")).rejects.toThrow(
        ConflictException
      );
    });
  });

  describe("me", () => {
    it("should return user by id", async () => {
      const user = { id: "user1", username: "test", email: "test@test.com" };
      prisma.user.findUnique.mockResolvedValue(user);

      const result = await service.me("user1");

      expect(result).toEqual(user);
    });

    it("should throw if user not found", async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(service.me("nonexistent")).rejects.toThrow(
        ConflictException
      );
    });
  });

  describe("findAllUsers", () => {
    it("should return all users except the given one (no blocks)", async () => {
      const users = [{ id: "user2", username: "other" }];
      prisma.friendship.findMany.mockResolvedValue([]);
      prisma.user.findMany.mockResolvedValue(users);

      const result = await service.findAllUsers("user1");

      expect(result).toEqual(users);
      expect(prisma.friendship.findMany).toHaveBeenCalledWith({
        where: {
          status: "BLOCKED",
          OR: [{ userId: "user1" }, { friendId: "user1" }]
        },
        select: { userId: true, friendId: true }
      });
      expect(prisma.user.findMany).toHaveBeenCalledWith({
        where: {
          AND: [{ id: { not: "user1" } }]
        }
      });
    });

    it("should exclude users in a blocked relationship (either direction)", async () => {
      // user1 blocked user2; user3 blocked user1
      prisma.friendship.findMany.mockResolvedValue([
        { userId: "user1", friendId: "user2" },
        { userId: "user3", friendId: "user1" }
      ]);
      const users = [{ id: "user4", username: "other" }];
      prisma.user.findMany.mockResolvedValue(users);

      const result = await service.findAllUsers("user1");

      expect(result).toEqual(users);
      expect(prisma.user.findMany).toHaveBeenCalledWith({
        where: {
          AND: [{ id: { not: "user1" } }, { id: { notIn: ["user2", "user3"] } }]
        }
      });
    });
  });
});
