import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { GraphQLUpload, Upload } from "graphql-upload";

import { User } from "@prisma/client";
import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";
import { IsMemberChat } from "@/src/shared/decorators/chat/is-member-chat.decorator";
import { FileValidationPipe } from "@/src/shared/pipes/file-validation.pipe";

import { FileService } from "./file.service";
import { AttachFileModel } from "./models/attach-file.model";
import { FileDownloadData } from "./models/file-download-data";

@Resolver("File")
export class FileResolver {
  constructor(private readonly fileService: FileService) {}
  @Authorization()
  @IsMemberChat()
  @Mutation(() => AttachFileModel, { name: "sendFile" })
  async sendFile(
    @Authorized() user: User,
    @Args("chatId") chatId: string,
    @Args("file", { type: () => GraphQLUpload }, FileValidationPipe)
    file: Upload,
    @Args("messageId", { nullable: true }) messageId?: string
  ) {
    return this.fileService.sendFile(user, chatId, file);
  }
  @Authorization()
  @IsMemberChat()
  @Mutation(() => Boolean, { name: "removeFile" })
  async removeFile(
    @Authorized("id") userId: string,
    @Args("fileId") fileId: string,
    @Args("chatId") chatId: string
  ) {
    return this.fileService.removeFile(userId, chatId, fileId);
  }

  @Authorization()
  @IsMemberChat()
  @Mutation(() => FileDownloadData, { name: "downloadFile" })
  async downloadFile(
    @Authorized("id") userId: string,
    @Args("fileId") fileId: string,
    @Args("chatId") chatId: string
  ) {
    return this.fileService.downloadFile(userId, chatId, fileId);
  }
}
