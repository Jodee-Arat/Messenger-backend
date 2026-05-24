import { ReadStream } from "fs";

const PERCENT_ENCODED_BYTE_PATTERN = /%[0-9a-fA-F]{2}/;
const LATIN1_UTF8_MOJIBAKE_PATTERN = /[ÐÑ][\u0080-\u00BF]/;
const CYRILLIC_PATTERN = /[\u0400-\u04FF]/;
const CONTROL_CHARS_PATTERN = /[\u0000-\u001F\u007F]/g;
const SAFE_STORAGE_FORMAT_PATTERN = /[^a-z0-9]/g;

function safelyDecodeURIComponent(value: string) {
  if (!PERCENT_ENCODED_BYTE_PATTERN.test(value)) {
    return value;
  }

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function repairLatin1Utf8Mojibake(value: string) {
  if (!LATIN1_UTF8_MOJIBAKE_PATTERN.test(value)) {
    return value;
  }

  const repaired = Buffer.from(value, "latin1").toString("utf8");

  if (!repaired.includes("\uFFFD") && CYRILLIC_PATTERN.test(repaired)) {
    return repaired;
  }

  return value;
}

export function normalizeUploadedFilename(filename: string) {
  const basename = filename.replace(/\\/g, "/").split("/").pop() ?? "file";
  const decoded = safelyDecodeURIComponent(basename);
  const repaired = repairLatin1Utf8Mojibake(decoded);
  const normalized = repaired.replace(CONTROL_CHARS_PATTERN, "_").trim();

  return normalized || "file";
}

export function getFilenameExtension(filename: string) {
  const basename = normalizeUploadedFilename(filename);
  const extension = basename.split(".").pop()?.trim().toLowerCase();

  if (!extension || extension === basename.toLowerCase()) {
    return null;
  }

  return extension;
}

export function toSafeStorageFileFormat(fileFormat: string) {
  const normalized = fileFormat
    .trim()
    .toLowerCase()
    .replace(SAFE_STORAGE_FORMAT_PATTERN, "");

  return normalized || "bin";
}

export function validateFileFormat(
  filename: string,
  allowedFileFormats: string[]
) {
  const extension = getFilenameExtension(filename);

  return extension ? allowedFileFormats.includes(extension) : false;
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
