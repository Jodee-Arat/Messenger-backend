import { parseBoolean } from "./parse-boolean.util";

describe("parseBoolean utility", () => {
  it('should parse "true" string', () => {
    expect(parseBoolean("true")).toBe(true);
  });

  it('should parse "false" string', () => {
    expect(parseBoolean("false")).toBe(false);
  });

  it("should be case insensitive", () => {
    expect(parseBoolean("TRUE")).toBe(true);
    expect(parseBoolean("False")).toBe(false);
    expect(parseBoolean("TRUE")).toBe(true);
  });

  it("should trim whitespace", () => {
    expect(parseBoolean("  true  ")).toBe(true);
    expect(parseBoolean(" false ")).toBe(false);
  });

  it("should handle boolean input directly", () => {
    expect(parseBoolean(true as any)).toBe(true);
    expect(parseBoolean(false as any)).toBe(false);
  });

  it("should throw for invalid values", () => {
    expect(() => parseBoolean("yes")).toThrow();
    expect(() => parseBoolean("1")).toThrow();
    expect(() => parseBoolean("no")).toThrow();
    expect(() => parseBoolean("")).toThrow();
  });
});
