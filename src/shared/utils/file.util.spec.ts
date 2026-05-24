import {
  getFilenameExtension,
  normalizeUploadedFilename,
  toSafeStorageFileFormat,
  validateFileFormat
} from "./file.util";

describe("validateFileFormat", () => {
  it("should return true for allowed extensions", () => {
    expect(validateFileFormat("photo.jpg", ["jpg", "png", "gif"])).toBe(true);
    expect(validateFileFormat("image.png", ["jpg", "png", "gif"])).toBe(true);
    expect(validateFileFormat("animation.gif", ["jpg", "png", "gif"])).toBe(
      true
    );
  });

  it("should return false for disallowed extensions", () => {
    expect(validateFileFormat("script.exe", ["jpg", "png", "gif"])).toBe(false);
    expect(validateFileFormat("document.pdf", ["jpg", "png"])).toBe(false);
  });

  it("should be case insensitive for extension", () => {
    expect(validateFileFormat("photo.JPG", ["jpg", "png"])).toBe(true);
    expect(validateFileFormat("image.PNG", ["jpg", "png"])).toBe(true);
  });

  it("should handle files with multiple dots", () => {
    expect(validateFileFormat("my.photo.jpg", ["jpg"])).toBe(true);
    expect(validateFileFormat("archive.tar.gz", ["gz"])).toBe(true);
  });

  it("should return false for empty allowed formats", () => {
    expect(validateFileFormat("file.txt", [])).toBe(false);
  });
});

describe("normalizeUploadedFilename", () => {
  it("keeps regular unicode filenames readable", () => {
    expect(normalizeUploadedFilename("пример.txt")).toBe("пример.txt");
  });

  it("decodes percent-encoded filenames when picker returns encoded names", () => {
    expect(
      normalizeUploadedFilename("%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80.txt")
    ).toBe("пример.txt");
  });

  it("repairs latin1-decoded UTF-8 mojibake from multipart filenames", () => {
    expect(normalizeUploadedFilename("Ð¿ÑÐ¸Ð¼ÐµÑ.txt")).toBe("пример.txt");
  });

  it("removes path segments and control characters", () => {
    expect(normalizeUploadedFilename("folder\\bad\u0000name.txt")).toBe(
      "bad_name.txt"
    );
  });
});

describe("getFilenameExtension", () => {
  it("returns normalized extension from unicode filenames", () => {
    expect(getFilenameExtension("пример.TXT")).toBe("txt");
  });

  it("returns null for names without extensions", () => {
    expect(getFilenameExtension("README")).toBeNull();
  });
});

describe("toSafeStorageFileFormat", () => {
  it("keeps storage file format ASCII-safe", () => {
    expect(toSafeStorageFileFormat("tar.gz")).toBe("targz");
    expect(toSafeStorageFileFormat("../png")).toBe("png");
    expect(toSafeStorageFileFormat("")).toBe("bin");
  });
});
