import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { fileTypeFromBuffer } from "file-type";
import { Upload } from "graphql-upload";

import {
  ChatMessage,
  ChatPermissionEnum,
  DraftMessage,
  User
} from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";
import { StorageService } from "@/src/modules/libs/storage/storage.service";

import { ChatService } from "../../chat.service";

@Injectable()
export class FileService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => ChatService))
    private readonly chatService: ChatService
  ) {}
  public async sendFile(user: User, chatId: string, file: Upload) {
    const chatAccess = await this.chatService.ensureDirectChatMessagingAccess(
      user.id,
      chatId
    );

    if (chatAccess.isGroup) {
      await this.chatService.validatePermission(
        user.id,
        chatId,
        ChatPermissionEnum.SEND_MESSAGES
      );
    }

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
            userId: user.id
          },
          include: {
            files: true
          }
        }
      }
    });

    let chatDraftMessage: DraftMessage;

    if (chatWithDraft?.draftMessages?.[0]) {
      chatDraftMessage = chatWithDraft.draftMessages[0];

      if (chatDraftMessage.text == null) {
        chatDraftMessage = await this.prismaService.draftMessage.update({
          where: { id: chatDraftMessage.id },
          data: {
            text: ""
          }
        });
      }
    } else {
      chatDraftMessage = await this.prismaService.draftMessage.create({
        data: {
          text: "",
          userId: user.id,
          chatId
        }
      });

      await this.prismaService.chat.update({
        where: { id: chatId },
        data: {
          draftMessages: {
            connect: { id: chatDraftMessage.id }
          }
        }
      });
    }

    const fileTypeResult = await fileTypeFromBuffer(buffer);
    const fileFormat = fileTypeResult?.ext ?? "unknown";
    const filePath = `chats/${chatId}/${chatDraftMessage.id}/${filename}`;

    const fileMessage = await this.prismaService.fileMessage.create({
      data: {
        fileName: filename,
        fileFullName: filePath,
        fileSize: buffer.length.toString(),
        fileFormat,
        fileUrl: `${this.configService.getOrThrow<string>("S3_URL")}${filePath}`,
        draftMessageId: chatDraftMessage.id,
        userId: user.id,
        chatId
      }
    });

    await this.prismaService.draftMessage.update({
      where: { id: chatDraftMessage.id },
      data: {
        files: {
          connect: { id: fileMessage.id }
        }
      }
    });

    await this.storageService.upload(buffer, filePath, mimetype);

    return {
      fileId: fileMessage.id,
      chatDraftMessageId: chatDraftMessage.id
    };
  }

  public async removeFile(userId: string, chatId: string, fileId: string) {
    await this.chatService.ensureDirectChatAccess(userId, chatId);

    const fileMessage = await this.prismaService.fileMessage.findUnique({
      where: {
        id: fileId
      },
      include: {
        draftMessage: {
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
    const draft = fileMessage.draftMessage;

    if (!draft) {
      throw new BadRequestException("Draft message not found for the file");
    }

    const fileExists = draft.files.some((file) => file.id === fileId);
    if (fileExists) {
      await this.storageService.remove(fileMessage.fileFullName);
    }

    const isDraftEmpty =
      (!draft.text || draft.text.trim() === "") &&
      (!draft.files || (draft.files.length === 1 && fileExists)) &&
      (!draft.repliedToLinks || draft.repliedToLinks.length === 0) &&
      (draft.filesEditId.length === 0 ||
        (draft.filesEditId.length === 1 && !fileExists));
    if (isDraftEmpty) {
      await this.prismaService.draftMessage.delete({
        where: { id: draft.id }
      });
    } else {
      await this.prismaService.draftMessage.update({
        where: { id: draft.id },
        data: {
          files: {
            set: draft.files
              .map((file) => file.id)
              .filter((id) => id !== fileId)
              .map((id) => ({ id }))
          }
        }
      });
    }
    await this.prismaService.fileMessage.deleteMany({
      where: { id: fileId }
    });

    return true;
  }

  public async downloadFile(userId: string, chatId: string, fileId: string) {
    await this.chatService.ensureDirectChatAccess(userId, chatId);

    const fileMessage = await this.prismaService.fileMessage.findUnique({
      where: { id: fileId }
    });

    if (!fileMessage) {
      throw new BadRequestException("File not found");
    }

    const fileUrl = await this.storageService.getPresignedUrl(
      fileMessage.fileFullName
    );

    return {
      fileUrl,
      filename: fileMessage.fileName
    };
  }
}
