import { ms } from "./ms.util";

describe("ms utility", () => {
  describe("milliseconds", () => {
    it("should return number as-is for plain number string", () => {
      expect(ms("100")).toBe(100);
    });

    it("should parse ms/milliseconds", () => {
      expect(ms("500ms")).toBe(500);
      expect(ms("200 msecs")).toBe(200);
      expect(ms("1 millisecond")).toBe(1);
    });
  });

  describe("seconds", () => {
    it("should parse seconds variants", () => {
      expect(ms("1s")).toBe(1000);
      expect(ms("5 seconds")).toBe(5000);
      expect(ms("2 sec")).toBe(2000);
      expect(ms("3 secs")).toBe(3000);
    });
  });

  describe("minutes", () => {
    it("should parse minutes variants", () => {
      expect(ms("1m")).toBe(60_000);
      expect(ms("5 minutes")).toBe(300_000);
      expect(ms("2 min")).toBe(120_000);
      expect(ms("10 mins")).toBe(600_000);
    });
  });

  describe("hours", () => {
    it("should parse hours variants", () => {
      expect(ms("1h")).toBe(3_600_000);
      expect(ms("2 hours")).toBe(7_200_000);
      expect(ms("3 hr")).toBe(10_800_000);
    });
  });

  describe("days", () => {
    it("should parse days variants", () => {
      expect(ms("1d")).toBe(86_400_000);
      expect(ms("7 days")).toBe(604_800_000);
      expect(ms("15d")).toBe(15 * 86_400_000);
    });
  });

  describe("weeks", () => {
    it("should parse weeks variants", () => {
      expect(ms("1w")).toBe(604_800_000);
      expect(ms("2 weeks")).toBe(1_209_600_000);
    });
  });

  describe("years", () => {
    it("should parse years variants", () => {
      expect(ms("1y")).toBe(365.25 * 86_400_000);
      expect(ms("2 years")).toBe(2 * 365.25 * 86_400_000);
    });
  });

  describe("case insensitivity", () => {
    it("should be case insensitive", () => {
      expect(ms("1D")).toBe(86_400_000);
      expect(ms("1 Day")).toBe(86_400_000);
      expect(ms("5 HOURS")).toBe(18_000_000);
    });
  });

  describe("negative values", () => {
    it("should handle negative values", () => {
      expect(ms("-1d")).toBe(-86_400_000);
      expect(ms("-500ms")).toBe(-500);
    });
  });

  describe("decimal values", () => {
    it("should handle decimal values", () => {
      expect(ms("1.5d")).toBe(1.5 * 86_400_000);
      expect(ms("0.5h")).toBe(1_800_000);
    });
  });

  describe("with spaces", () => {
    it("should handle spaces between number and unit", () => {
      expect(ms("5 d")).toBe(5 * 86_400_000);
      expect(ms("10 minutes")).toBe(600_000);
    });
  });

  describe("invalid input", () => {
    it("should throw for empty string", () => {
      expect(() => ms("" as any)).toThrow();
    });

    it("should return NaN for unrecognized format", () => {
      expect(ms("abc" as any)).toBeNaN();
    });
  });
});
