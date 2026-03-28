import { ConflictException, Injectable } from "@nestjs/common";
import { hash } from "argon2";
import { generateSecret, generateURI, verify as verifyTotp } from "otplib";
import * as QRCode from "qrcode";

import { FriendshipStatusEnum, Prisma, User } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";

import { FiltersInput } from "../../inputs/filters.input";
import { PreKeyInput } from "../../secret/input/preKey.input";

import { CreateUserWEmailInput } from "./inputs/create-user-with-email.input";

@Injectable()
export class AccountService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async create(input: CreateUserWEmailInput) {
    const { email, password, username } = input;

    const isUsernameExists = await this.prismaService.user.findUnique({
      where: {
        username
      }
    });

    if (isUsernameExists) {
      throw new ConflictException("Username already exists");
    }

    const isEmailExists = await this.prismaService.user.findUnique({
      where: {
        email
      }
    });

    if (isEmailExists) {
      throw new ConflictException("Email already exists");
    }

    await this.prismaService.user.create({
      data: {
        email,
        password: await hash(password),
        username
      }
    });

    return true;
  }

  public async generateTotpSecret(userId: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new ConflictException("User not found");
    }

    if (user.isTotpEnabled) {
      throw new ConflictException("TOTP is already enabled");
    }

    const totpSecret = generateSecret();
    const otpauthUrl = generateURI({
      issuer: "AraratMessenger",
      label: user.email,
      secret: totpSecret
    });
    const qrCodeDataUrl = await QRCode.toDataURL(otpauthUrl);

    await this.prismaService.user.update({
      where: { id: userId },
      data: { totpSecret, isTotpEnabled: false }
    });

    return {
      totpSecret,
      qrCodeUrl: qrCodeDataUrl
    };
  }

  public async enableTotp(userId: string, token: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId }
    });

    if (!user || !user.totpSecret) {
      throw new ConflictException("User or TOTP secret not found");
    }

    const result = await verifyTotp({
      token,
      secret: user.totpSecret
    });

    if (!result.valid) {
      throw new ConflictException("Invalid TOTP code");
    }

    await this.prismaService.user.update({
      where: { id: user.id },
      data: { isTotpEnabled: true }
    });

    return true;
  }

  public async disableTotp(userId: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new ConflictException("User not found");
    }

    await this.prismaService.user.update({
      where: { id: userId },
      data: { totpSecret: null, isTotpEnabled: false }
    });

    return true;
  }

  public async me(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id
      }
    });

    if (!user) {
      throw new ConflictException("User not found");
    }

    return user;
  }

  public async findAllUsers(userId: string, input?: FiltersInput) {
    const normalizedSearchTerm = input?.searchTerm?.trim();
    const take = this.normalizeTake(input?.take);
    const skip = this.normalizeSkip(input?.skip);

    const blockedFriendships = await this.prismaService.friendship.findMany({
      where: {
        status: FriendshipStatusEnum.BLOCKED,
        OR: [{ userId }, { friendId: userId }]
      },
      select: { userId: true, friendId: true }
    });

    const blockedIds = blockedFriendships.map((f) =>
      f.userId === userId ? f.friendId : f.userId
    );

    const users = await this.prismaService.user.findMany({
      where: {
        AND: [
          { id: { not: userId } },
          ...(blockedIds.length > 0 ? [{ id: { notIn: blockedIds } }] : []),
          ...(normalizedSearchTerm
            ? [this.findBySearchTermUserFilter(normalizedSearchTerm)]
            : [])
        ]
      },
      orderBy: { username: "asc" },
      skip,
      take: normalizedSearchTerm ? Math.max(take * 5, 30) : take
    });

    if (!normalizedSearchTerm) {
      return users;
    }

    return this.rankUsersBySearchTerm(users, normalizedSearchTerm).slice(0, take);
  }

  private normalizeTake(take?: number | null) {
    if (!take || Number.isNaN(take)) {
      return 10;
    }

    return Math.min(Math.max(Math.floor(take), 1), 25);
  }

  private normalizeSkip(skip?: number | null) {
    if (!skip || Number.isNaN(skip)) {
      return 0;
    }

    return Math.max(Math.floor(skip), 0);
  }

  private findBySearchTermUserFilter(searchTerm: string): Prisma.UserWhereInput {
    return {
      OR: [
        {
          username: {
            contains: searchTerm,
            mode: "insensitive"
          }
        },
        {
          bio: {
            contains: searchTerm,
            mode: "insensitive"
          }
        }
      ]
    };
  }

  private rankUsersBySearchTerm(users: User[], searchTerm: string) {
    const normalizedSearchTerm = searchTerm.toLowerCase();

    const getScore = (user: User) => {
      const username = user.username.toLowerCase();
      const bio = user.bio?.toLowerCase() ?? "";

      if (username === normalizedSearchTerm) {
        return 400;
      }

      if (username.startsWith(normalizedSearchTerm)) {
        return 300;
      }

      if (
        username
          .split(/[\s._-]+/)
          .some((part) => part.startsWith(normalizedSearchTerm))
      ) {
        return 250;
      }

      if (username.includes(normalizedSearchTerm)) {
        return 200;
      }

      if (bio.includes(normalizedSearchTerm)) {
        return 100;
      }

      return 0;
    };

    return [...users].sort((left, right) => {
      const scoreDelta = getScore(right) - getScore(left);
      if (scoreDelta !== 0) {
        return scoreDelta;
      }

      return left.username.localeCompare(right.username);
    });
  }
}
