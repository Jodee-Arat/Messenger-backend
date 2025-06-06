import { BadRequestException, Injectable, OnModuleInit } from "@nestjs/common";
import * as CryptoJS from "crypto-js";

import { PrismaService } from "@/src/core/prisma/prisma.service";
import generateRSAKeyPair from "@/src/shared/utils/crypto/generate-rsa-key-pair";
import {
  prepareDesBytesKey,
  prepareDesKey
} from "@/src/shared/utils/crypto/prepare-des-key";
import { modPow } from "@/src/shared/utils/math/mod-pow";
import { toBigIntFields } from "@/src/shared/utils/to-bigint-fields";

import { ExchangeKeysInput } from "./inputs/exchange-keys.input";

@Injectable()
export class CryptoService implements OnModuleInit {
  public constructor(private readonly prismaService: PrismaService) {}

  async onModuleInit() {
    await this.createKeyRsaStartServer();
  }

  public async exchangeKeys(
    userId: string,
    chatId: string,
    input: ExchangeKeysInput
  ) {
    const { publicKeyDiffie, publicKeyE, publicKeyG, publicKeyN, publicKeyP } =
      toBigIntFields(input);

    const secretKeyDiffie = BigInt(
      Math.floor(Math.random() * Number(publicKeyP - 2n)) + 2
    );
    const openSecretKeyDiffie = modPow(publicKeyG, secretKeyDiffie, publicKeyP);
    const sessionKey = modPow(publicKeyDiffie, secretKeyDiffie, publicKeyP);

    const serverKeyRsa = await this.prismaService.serverKey.findUnique({
      where: {
        chatId
      }
    });

    await this.prismaService.clientKey.upsert({
      where: {
        userId
      },
      create: {
        publicKeyE,
        publicKeyN,
        sessionKey,
        user: {
          connect: {
            id: userId
          }
        }
      },
      update: {
        publicKeyE,
        publicKeyN,
        sessionKey
      }
    });

    return {
      openKeyServerDiffie: openSecretKeyDiffie.toString(),
      publicKeyE: serverKeyRsa.publicKeyE.toString(),
      publicKeyN: serverKeyRsa.publicKeyN.toString()
    };
  }

  public decryptHashRsa(encryptedHash: string[], keyE: bigint, keyN: bigint) {
    const decryptedBytes: number[] = [];

    for (const encryptedByteStr of encryptedHash) {
      const decryptedByte = modPow(BigInt(encryptedByteStr), keyE, keyN);
      decryptedBytes.push(Number(decryptedByte));
    }

    const decoder = new TextDecoder();
    return decoder.decode(new Uint8Array(decryptedBytes));
  }

  public encryptHashRsa(hash: string, keyD: bigint, keyN: bigint) {
    const encoder = new TextEncoder();
    const hashBytes = encoder.encode(hash);

    const encrypted: string[] = [];

    for (const byte of hashBytes) {
      const encryptedByte = modPow(BigInt(byte), keyD, keyN);

      encrypted.push(encryptedByte.toString());
    }

    return encrypted;
  }

  public encryptTextDes(key: string, text: string) {
    let desKey = prepareDesKey(key);

    try {
      const encrypted = CryptoJS.DES.encrypt(
        text,
        CryptoJS.enc.Utf8.parse(desKey),
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }
      );
      return encrypted.toString();
    } catch (err) {
      console.error("Error:", err);
    }
  }

  public decryptTextDes(key: string, encryptedText: string) {
    const desKey = prepareDesKey(key);

    try {
      const decrypted = CryptoJS.DES.decrypt(
        encryptedText,
        CryptoJS.enc.Utf8.parse(desKey),
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }
      );

      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (err) {
      console.error("Error:", err);
      return "";
    }
  }

  public encryptBytesDes(key: string, bytes: Uint8Array): Uint8Array | null {
    const desKey = prepareDesBytesKey(key);

    try {
      const wordArray = CryptoJS.lib.WordArray.create(bytes as any);

      const encrypted = CryptoJS.DES.encrypt(wordArray, desKey, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });

      const encryptedWords = CryptoJS.enc.Base64.parse(encrypted.toString());
      return Uint8Array.from(
        CryptoJS.enc.Hex.parse(
          encryptedWords.toString(CryptoJS.enc.Hex)
        ).words.flatMap((word) => [
          (word >> 24) & 0xff,
          (word >> 16) & 0xff,
          (word >> 8) & 0xff,
          word & 0xff
        ])
      );
    } catch (err) {
      throw new BadRequestException("Error" + err.message);
    }
  }

  public decryptBytesDes(
    key: string,
    encryptedBytes: Uint8Array
  ): Uint8Array | null {
    try {
      const desKey = prepareDesBytesKey(key);

      const encryptedWordArray = CryptoJS.lib.WordArray.create(
        encryptedBytes as any
      );

      const decrypted = CryptoJS.DES.decrypt(
        { ciphertext: encryptedWordArray } as any,
        desKey,
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }
      );

      const words = decrypted.words;
      const sigBytes = decrypted.sigBytes;

      const result = new Uint8Array(sigBytes);

      for (let i = 0; i < sigBytes; i++) {
        result[i] = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      }

      return result;
    } catch (err) {
      throw new BadRequestException("Error" + err.message);
    }
  }

  public async createKeyRsaServerByChatId(chatId: string) {
    const chat = await this.prismaService.chat.findUnique({
      where: {
        id: chatId
      },
      include: {
        serverKey: true
      }
    });

    const { primes, privateKey, publicKey } = generateRSAKeyPair();

    await this.prismaService.serverKey.upsert({
      where: {
        chatId: chat.id
      },
      create: {
        publicKeyE: publicKey.e,
        publicKeyN: publicKey.n,
        privateKeyD: privateKey.d,
        privateKeyP: primes.p,
        privateKeyQ: primes.q,
        chat: {
          connect: {
            id: chat.id
          }
        }
      },
      update: {
        publicKeyE: publicKey.e,
        publicKeyN: publicKey.n,
        privateKeyD: privateKey.d,
        privateKeyP: primes.p,
        privateKeyQ: primes.q
      }
    });
  }

  private async createKeyRsaStartServer() {
    const chats = await this.prismaService.chat.findMany({
      include: {
        serverKey: true
      }
    });

    for (const chat of chats) {
      const { primes, privateKey, publicKey } = generateRSAKeyPair();

      await this.prismaService.serverKey.upsert({
        where: {
          chatId: chat.id
        },
        create: {
          publicKeyE: publicKey.e,
          publicKeyN: publicKey.n,
          privateKeyD: privateKey.d,
          privateKeyP: primes.p,
          privateKeyQ: primes.q,
          chat: {
            connect: {
              id: chat.id
            }
          }
        },
        update: {
          publicKeyE: publicKey.e,
          publicKeyN: publicKey.n,
          privateKeyD: privateKey.d,
          privateKeyP: primes.p,
          privateKeyQ: primes.q
        }
      });
    }
  }
}
