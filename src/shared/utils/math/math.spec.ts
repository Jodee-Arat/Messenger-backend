import gcd from "./gcd";
import isPrime from "./is-prime";
import modInverse from "./mod-inverse";
import { modPow } from "./mod-pow";

describe("Math Utilities", () => {
  describe("gcd", () => {
    it("should compute gcd of two numbers", () => {
      expect(gcd(12n, 8n)).toBe(4n);
      expect(gcd(54n, 24n)).toBe(6n);
      expect(gcd(17n, 13n)).toBe(1n);
    });

    it("should handle zero", () => {
      expect(gcd(0n, 5n)).toBe(5n);
      expect(gcd(7n, 0n)).toBe(7n);
    });

    it("should handle equal numbers", () => {
      expect(gcd(10n, 10n)).toBe(10n);
    });

    it("should handle coprime numbers", () => {
      expect(gcd(35n, 64n)).toBe(1n);
    });
  });

  describe("isPrime", () => {
    it("should return false for numbers less than 2", () => {
      expect(isPrime(0n)).toBe(false);
      expect(isPrime(1n)).toBe(false);
      expect(isPrime(-1n)).toBe(false);
    });

    it("should return true for prime numbers", () => {
      expect(isPrime(2n)).toBe(true);
      expect(isPrime(3n)).toBe(true);
      expect(isPrime(5n)).toBe(true);
      expect(isPrime(7n)).toBe(true);
      expect(isPrime(11n)).toBe(true);
      expect(isPrime(13n)).toBe(true);
      expect(isPrime(97n)).toBe(true);
    });

    it("should return false for composite numbers", () => {
      expect(isPrime(4n)).toBe(false);
      expect(isPrime(6n)).toBe(false);
      expect(isPrime(9n)).toBe(false);
      expect(isPrime(15n)).toBe(false);
      expect(isPrime(100n)).toBe(false);
    });
  });

  describe("modPow", () => {
    it("should compute modular exponentiation", () => {
      expect(modPow(2n, 10n, 1000n)).toBe(24n); // 2^10 = 1024, 1024 % 1000 = 24
      expect(modPow(3n, 4n, 5n)).toBe(1n); // 3^4 = 81, 81 % 5 = 1
      expect(modPow(5n, 3n, 13n)).toBe(8n); // 5^3 = 125, 125 % 13 = 8
    });

    it("should return 0 when modulus is 1", () => {
      expect(modPow(5n, 3n, 1n)).toBe(0n);
    });

    it("should handle exponent 0", () => {
      expect(modPow(5n, 0n, 13n)).toBe(1n);
    });

    it("should handle large numbers", () => {
      const result = modPow(7n, 256n, 13n);
      expect(result >= 0n && result < 13n).toBe(true);
    });
  });

  describe("modInverse", () => {
    it("should compute modular inverse", () => {
      // 3 * 9 = 27 ≡ 1 (mod 26)
      expect(modInverse(3n, 26n)).toBe(9n);
    });

    it("should satisfy a * modInverse(a, m) ≡ 1 (mod m)", () => {
      const a = 7n;
      const m = 26n;
      const inv = modInverse(a, m);
      expect((a * inv) % m).toBe(1n);
    });

    it("should work with coprime numbers", () => {
      const a = 17n;
      const m = 43n;
      const inv = modInverse(a, m);
      expect((a * inv) % m).toBe(1n);
    });

    it("should work with common crypto-size numbers", () => {
      const e = 65537n;
      const phi = 3120n;
      const d = modInverse(e, phi);
      expect((e * d) % phi).toBe(1n);
    });
  });
});
