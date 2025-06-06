import { ConflictException, Injectable } from "@nestjs/common";
import { hash } from "argon2";

import { PrismaService } from "@/src/core/prisma/prisma.service";

import { createUserWEmail } from "./inputs/create-user-with-email.input";

@Injectable()
export class AccountService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async create(input: createUserWEmail) {
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
