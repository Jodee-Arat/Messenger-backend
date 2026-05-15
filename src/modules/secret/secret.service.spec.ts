jest.mock("../chat/chat.service", () => ({
  ChatService: class ChatService {}
}));

import { SecretService } from "./secret.service";

describe("SecretService secret attachment cleanup", () => {
  let prisma: {
    secretAttachment: {
      create: jest.Mock;
      findMany: jest.Mock;
      updateMany: jest.Mock;
      deleteMany: jest.Mock;
    };
  };
  let storage: {
    upload: jest.Mock;
    remove: jest.Mock;
  };
  let chatService: {
    ensureDirectChatAccess: jest.Mock;
  };
  let service: SecretService;
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    prisma = {
      secretAttachment: {
        create: jest.fn(),
        findMany: jest.fn(),
        updateMany: jest.fn(),
        deleteMany: jest.fn()
      }
    };
    storage = {
      upload: jest.fn().mockResolvedValue(undefined),
      remove: jest.fn().mockResolvedValue(undefined)
    };
    chatService = {
      ensureDirectChatAccess: jest.fn().mockResolvedValue({
        id: "secret-chat",
        isSecret: true,
        isSaved: true,
        isGroup: false,
        members: [{ userId: "user-1" }]
      })
    };
    service = new SecretService(
      prisma as any,
      {} as any,
      storage as any,
      chatService as any
    );
    warnSpy = jest.spyOn(console, "warn").mockImplementation(() => undefined);
  });

  afterEach(() => {
    service.onModuleDestroy();
    warnSpy.mockRestore();
  });

  it("removes expired staged and committed attachment blobs and rows", async () => {
    prisma.secretAttachment.findMany
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([
        { id: "staged-attachment", storageKey: "secret/staged.bin" },
        { id: "committed-attachment", storageKey: "secret/committed.bin" }
      ]);

    await (service as any).cleanupExpiredSecretAttachments();

    expect(prisma.secretAttachment.findMany).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        where: {
          expiresAt: {
            lte: expect.any(Date)
          }
        }
      })
    );
    expect(storage.remove).toHaveBeenCalledWith("secret/staged.bin");
    expect(storage.remove).toHaveBeenCalledWith("secret/committed.bin");
    expect(prisma.secretAttachment.deleteMany).toHaveBeenCalledWith({
      where: { id: "staged-attachment" }
    });
    expect(prisma.secretAttachment.deleteMany).toHaveBeenCalledWith({
      where: { id: "committed-attachment" }
    });
  });

  it("backfills expiresAt for legacy committed attachments", async () => {
    const committedAt = new Date("2026-05-07T12:00:00.000Z");
    prisma.secretAttachment.findMany
      .mockResolvedValueOnce([{ id: "legacy-committed", committedAt }])
      .mockResolvedValueOnce([]);

    await (service as any).cleanupExpiredSecretAttachments();

    expect(prisma.secretAttachment.updateMany).toHaveBeenCalledWith({
      where: {
        id: "legacy-committed",
        expiresAt: null
      },
      data: {
        expiresAt: new Date("2026-05-08T12:00:00.000Z")
      }
    });
  });

  it("keeps database row when storage removal fails", async () => {
    prisma.secretAttachment.findMany
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([
        { id: "expired-attachment", storageKey: "secret/expired.bin" }
      ]);
    storage.remove.mockRejectedValueOnce(new Error("storage unavailable"));

    await (service as any).cleanupExpiredSecretAttachments();

    expect(storage.remove).toHaveBeenCalledWith("secret/expired.bin");
    expect(prisma.secretAttachment.deleteMany).not.toHaveBeenCalled();
  });

  it("stores secret attachment upload without original file metadata", async () => {
    prisma.secretAttachment.findMany.mockResolvedValue([]);
    prisma.secretAttachment.create.mockResolvedValue({
      id: "attachment-id",
      chatId: "secret-chat",
      storageKey: "secret-chats/secret-chat/attachments/attachment-id.bin",
      ciphertextSize: "11",
      expiresAt: expect.any(Date)
    });

    await service.uploadSecretAttachment("user-1", {
      chatId: "secret-chat",
      ciphertextBase64: Buffer.from("ciphertext").toString("base64"),
      fileName: "passport.png",
      fileFormat: "png"
    } as any);

    expect(prisma.secretAttachment.create).toHaveBeenCalledWith({
      data: expect.not.objectContaining({
        fileName: expect.anything(),
        fileFormat: expect.anything(),
        originalFileName: expect.anything()
      })
    });
    expect(prisma.secretAttachment.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        chatId: "secret-chat",
        uploaderUserId: "user-1",
        ciphertextSize: "10",
        expiresAt: expect.any(Date)
      })
    });
    expect(storage.upload).toHaveBeenCalledWith(
      Buffer.from("ciphertext"),
      expect.stringMatching(
        /^secret-chats\/secret-chat\/attachments\/.+\.bin$/
      ),
      "application/octet-stream"
    );
  });
});
