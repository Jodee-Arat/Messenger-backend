import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { fileTypeFromBuffer } from "file-type";
import { Upload } from "graphql-upload";

import { ChatMessage, User } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";
import { StorageService } from "@/src/modules/libs/storage/storage.service";

@Injectable()
export class FileService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService,
    private readonly configService: ConfigService
  ) {}
  public async sendFile(user: User, chatId: string, file: Upload) {
    const { createReadStream, filename, mimetype } = await file;

    const chunks: Buffer[] = [];
    for await (const chunk of createReadStream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const chatWithDraft = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: {
        draftMessages: {
          where: {
            userId: user.id,
            isDraft: true
          },
          include: {
            files: true
          }
        }
      }
    });

    let chatMessage: ChatMessage;

    if (chatWithDraft?.draftMessages?.length > 0) {
      chatMessage = chatWithDraft.draftMessages[0];
    } else {
      chatMessage = await this.prismaService.chatMessage.create({
        data: {
          userId: user.id,
          chatId,
          isDraft: true
        }
      });

      await this.prismaService.chat.update({
        where: { id: chatId },
        data: {
          draftMessages: {
            connect: { id: chatMessage.id }
          }
        }
      });
    }

    const fileTypeResult = await fileTypeFromBuffer(buffer);
    const fileFormat = fileTypeResult?.ext ?? "unknown";
    const filePath = `chats/${chatId}/${chatMessage.id}/${filename}`;

    const fileMessage = await this.prismaService.fileMessage.create({
      data: {
        fileName: filename,
        fileFullName: filePath,
        fileSize: buffer.length.toString(),
        fileFormat,
        fileUrl: `${this.configService.getOrThrow<string>("S3_URL")}${filePath}`,
        chatMessageId: chatMessage.id,
        userId: user.id,
        chatId
      }
    });

    await this.prismaService.chatMessage.update({
      where: { id: chatMessage.id },
      data: {
        files: {
          connect: { id: fileMessage.id }
        }
      }
    });

    await this.storageService.upload(buffer, filePath, mimetype);

    return {
      fileId: fileMessage.id,
      chatMessageId: chatMessage.id
    };
  }

  public async removeFile(fileId: string) {
    const fileMessage = await this.prismaService.fileMessage.findUnique({
      where: {
        id: fileId
      },
      include: {
        chatMessage: {
          include: {
            files: true,
            repliedToLinks: true
          }
        }
      }
    });

    if (!fileMessage) {
      throw new BadRequestException(`File message with id ${fileId} not found`);
    }

    await this.storageService.remove(fileMessage.fileFullName);

    const draft = fileMessage.chatMessage;

    const isDraftEmpty =
      (!draft.text || draft.text.trim() === "") &&
      (!draft.files || draft.files.length === 1) &&
      (!draft.repliedToLinks || draft.repliedToLinks.length === 0);

    if (isDraftEmpty) {
      await this.prismaService.chatMessage.delete({
        where: { id: draft.id }
      });
    } else {
      await this.prismaService.fileMessage.delete({
        where: { id: fileId }
      });
    }

    return true;
  }

  public async downloadFile(fileId: string) {
    const fileMessage = await this.prismaService.fileMessage.findUnique({
      where: {
        id: fileId
      }
    });

    if (!fileMessage) {
      throw new BadRequestException("File not found");
    }

    return {
      fileUrl: fileMessage.fileUrl,
      filename: fileMessage.fileName
    };
  }
}
