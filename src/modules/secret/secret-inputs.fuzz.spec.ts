import "reflect-metadata";

import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import fc from "fast-check";

import { PreKeyInput } from "./input/preKey.input";
import { SessionSecretMessageInput } from "./input/session-secret-message.input";
import { SessionSharedSecretKeyInput } from "./input/session-shared-secret-key.input";
import { UploadSecretAttachmentInput } from "./input/upload-secret-attachment.input";

const scalar = fc.oneof(
  fc.string({ maxLength: 128 }),
  fc.integer(),
  fc.boolean(),
  fc.constant(null),
  fc.constant(undefined),
  fc.array(fc.string({ maxLength: 64 }), { maxLength: 8 })
);

const malformedRecord = fc.dictionary(
  fc.string({ minLength: 1, maxLength: 32 }),
  scalar,
  { maxKeys: 20 }
);

async function validateDto<T extends object>(
  dto: new () => T,
  value: Record<string, unknown>
) {
  const instance = plainToInstance(dto, value);
  await expect(validate(instance)).resolves.toBeDefined();
}

describe("secret GraphQL input DTO fuzzing", () => {
  it("does not crash while validating malformed pre-key bundles", async () => {
    await fc.assert(
      fc.asyncProperty(malformedRecord, async value => {
        await validateDto(PreKeyInput, value);
      }),
      { numRuns: 100 }
    );
  });

  it("does not crash while validating malformed secret message inputs", async () => {
    await fc.assert(
      fc.asyncProperty(malformedRecord, async value => {
        await validateDto(SessionSecretMessageInput, value);
      }),
      { numRuns: 100 }
    );
  });

  it("does not crash while validating malformed shared key inputs", async () => {
    await fc.assert(
      fc.asyncProperty(malformedRecord, async value => {
        await validateDto(SessionSharedSecretKeyInput, value);
      }),
      { numRuns: 100 }
    );
  });

  it("does not crash while validating malformed secret attachment uploads", async () => {
    await fc.assert(
      fc.asyncProperty(malformedRecord, async value => {
        await validateDto(UploadSecretAttachmentInput, value);
      }),
      { numRuns: 100 }
    );
  });
});
