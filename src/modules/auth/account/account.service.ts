import { ConflictException, Injectable } from "@nestjs/common";
import { hash } from "argon2";
import { generateSecret, generateURI, verify as verifyTotp } from "otplib";
import * as QRCode from "qrcode";

import { PrismaService } from "@/src/core/prisma/prisma.service";

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

  public async findAllUsers(userId: string) {
    return await this.prismaService.user.findMany({
      where: {
        id: {
          not: userId
        }
      }
    });
  }
}
