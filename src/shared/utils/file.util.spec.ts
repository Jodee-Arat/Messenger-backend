import { validateFileFormat } from "./file.util";

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
