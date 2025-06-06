import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform
} from "@nestjs/common";
import { ReadStream } from "fs";

import { validateFileFormat, validateFileSize } from "../utils/file.util";

@Injectable()
export class FileValidationAvatarPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (!value.filename) {
      throw new BadRequestException("File has not been uploaded");
    }

    const { filename, createReadStream } = value;
    const fileStream = createReadStream() as ReadStream;

    const allowedFileFormats = ["jpg", "jpeg", "png", "webp", "gif"];
    const isFileFormatValid = validateFileFormat(filename, allowedFileFormats);

    if (!isFileFormatValid) {
      throw new BadRequestException("Недопустимый формат файла!");
    }

    const isFileSizeValid = await validateFileSize(
      fileStream,
      10 * 1024 * 1024
    ); // 10 MB

    if (!isFileSizeValid) {
      throw new BadRequestException("Размер файла превышает допустимый лимит!");
    }
    return value;
  }
}
