import { ConflictException, Injectable } from "@nestjs/common";
import { GraphQLUpload, Upload } from "graphql-upload";
import * as sharp from "sharp";

import { User } from "@prisma/client";
import { PrismaService } from "../../../core/prisma/prisma.service";

import { StorageService } from "../../libs/storage/storage.service";

import { ChangeProfileInfoInput } from "./inputs/change-profile-info.input";

@Injectable()
export class ProfileService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService
  ) {}

  async changeAvatar(user: User, file: Upload) {
    const chunks: Buffer[] = [];
    for await (const chunk of file.createReadStream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const uniqueName = `${user.username}-${Date.now()}.webp`;
    const fileName = `/users/${uniqueName}`;

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

    if (user.avatarUrl) {
      await this.storageService.remove(user.avatarUrl);
    }

    await this.prismaService.user.update({
      where: { id: user.id },
      data: { avatarUrl: fileName }
    });

    return fileName;
  }

  public async removeAvatar(user: User) {
    if (user.avatarUrl) {
      await this.storageService.remove(user.avatarUrl);
      await this.prismaService.user.update({
        where: { id: user.id },
        data: { avatarUrl: null }
      });
    } else {
      return;
    }
    return true;
  }

  public async changeInfo(user: User, input: ChangeProfileInfoInput) {
    const { bio, username } = input;

    const usernameExists = await this.prismaService.user.findUnique({
      where: { username }
    });

    if (usernameExists && username !== user.username) {
      throw new ConflictException("Username already exists");
    }

    const updatedUser = await this.prismaService.user.update({
      where: { id: user.id },
      data: {
        username,
        bio
      }
    });
    return true;
  }
}
