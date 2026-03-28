import { ReadStream } from "fs";

export function validateFileFormat(
  filename: string,
  allowedFileFormats: string[]
) {
  const fileParts = filename.split(".");
  const extension = fileParts[fileParts.length - 1].toLowerCase();

  return allowedFileFormats.includes(extension);
}

export async function validateFileSize(
  fileStream: ReadStream,
  allowedFileSizeInBytes: number
) {
  return new Promise((resolve, reject) => {
    let fileSizeInBytes = 0;
    let settled = false;

    fileStream
      .on("data", (data: Buffer) => {
        fileSizeInBytes += data.length;

        if (!settled && fileSizeInBytes > allowedFileSizeInBytes) {
          settled = true;
          resolve(false);
          fileStream.destroy();
        }
      })
      .on("end", () => {
        if (!settled) {
          settled = true;
          resolve(fileSizeInBytes <= allowedFileSizeInBytes);
        }
      })
      .on("close", () => {
        if (!settled) {
          settled = true;
          resolve(fileSizeInBytes <= allowedFileSizeInBytes);
        }
      })
      .on("error", (error) => {
        if (settled) {
          return;
        }
        settled = true;
        reject(error);
      });
  });
}
