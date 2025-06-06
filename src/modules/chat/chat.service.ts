import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { fileTypeFromBuffer, fileTypeFromFile } from "file-type";
import { Upload } from "graphql-upload";

import { ChatMessage, Prisma, User } from "@/prisma/generated";
import { PrismaService } from "@/src/core/prisma/prisma.service";
import { sha1Hash } from "@/src/shared/utils/crypto/sha-1-hash";
import { sha1HashBytes } from "@/src/shared/utils/crypto/sha-1-hash-bytes";
import { downloadFileToBuffer } from "@/src/shared/utils/download-file-to-buffer";

import { CryptoService } from "../crypto/crypto.service";
import { StorageService } from "../libs/storage/storage.service";

import { CreateChatInput } from "./inputs/create-chat.input";
import { FiltersInput } from "./inputs/filters.input";
import { RemoveMessagesInput } from "./inputs/remove-messages.input";
import { SendChatMessageInput } from "./inputs/send-chat-message.input";
import { SendFileInput } from "./inputs/send-file.input";
import { ChatMessageModel } from "./models/chat-message.model";

@Injectable()
export class ChatService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly cryptoService: CryptoService,
    private readonly storageService: StorageService,
    private readonly configService: ConfigService
  ) {}

  public async findAllChatsByUser(userId: string, input: FiltersInput) {
    const { searchTerm, skip, take } = input;

    const whereClause = searchTerm
      ? this.findBySearchTermChatFilter(searchTerm)
      : undefined;

    const chats = await this.prismaService.chat.findMany({
      take: take ?? 12,
      skip: skip ?? 0,
      where: {
        isDeleted: false,
        members: {
          some: {
            userId
          }
        },
        ...whereClause
      },
      orderBy: {
        lastMessageAt: "desc"
      }
    });

    return chats;
  }

  public async findChatByChatId(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.findFirst({
      where: {
        id: chatId,
        isDeleted: false,
        members: {
          some: {
            userId
          }
        }
      },
      include: {
        members: {
          include: {
            user: true
          }
        }
      }
    });

    if (!chat) {
      throw new BadRequestException("Chat not found");
    }

    return chat;
  }

  public async findAllMessagesByChat(
    userId: string,
    chatId: string,
    input: FiltersInput
  ) {
    const { searchTerm, skip, take } = input;
    const whereClause = searchTerm
      ? this.findBySearchTermMessageFilter(searchTerm)
      : null;

    const messages = await this.prismaService.chatMessage.findMany({
      take: take ?? 20,
      skip: skip ?? 0,
      where: {
        chatId,
        isDeleted: false,
        isFake: false,

        chat: {
          members: {
            some: {
              userId
            }
          }
        },
        ...whereClause
      },
      include: {
        files: true,
        chat: {
          include: {
            members: {
              include: {
                user: true
              }
            }
          }
        },
        replies: true,
        replyTo: {
          include: {}
        },
        user: true
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    return messages.map(async (message) => {
      if (message.text === null) {
        return {
          ...message,
          text: "null",
          hash: ["null"]
        };
      }
      const encrypted = await this.encryptMessage(message.text, userId, chatId);

      return {
        ...message,
        text: encrypted.encryptedText,
        hash: encrypted.encryptedHash
      };
    });
  }

  public async createChat(creatorId: string, input: CreateChatInput) {
    const { chatName, userIds } = input;

    if (!chatName || userIds.length === 0) {
      throw new BadRequestException("Chat name and user IDs must be provided");
    }

    const allUsersIds = [creatorId, ...userIds];

    const isGroup = userIds.length > 1;

    // if (!isGroup) {
    //   const existing = await this.prismaService.chat.findFirst({
    //     where: {
    //       isGroup: false,
    //       members: {
    //         every: {
    //           id: { in: [creatorId, userIds[0]] }
    //         }
    //       }
    //     },
    //     include: { members: true }
    //   });

    //   if (existing) {
    //     throw new ConflictException("Chat already exists");
    //   }
    // }

    const chat = await this.prismaService.chat.create({
      data: {
        chatName: chatName,
        isGroup,
        lastMessageAt: isGroup ? new Date() : null,
        members: {
          create: allUsersIds.map((userId) => ({
            user: {
              connect: { id: userId }
            },
            isCreator: isGroup && userId === creatorId
          }))
        }
      },
      include: {
        members: {
          include: {
            user: true
          }
        }
      }
    });

    if (!chat) {
      throw new InternalServerErrorException("Failed to create chat");
    }

    if (isGroup) {
      await this.prismaService.chatMessage.create({
        data: {
          chatId: chat.id,
          text: `${chatName} group created`,
          userId: creatorId
        }
      });
    }

    await this.cryptoService.createKeyRsaServerByChatId(chat.id);

    return chat;
  }

  public async deleteChat(userId: string, chatId: string) {
    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: { members: true }
    });

    if (!chat) {
      throw new BadRequestException("Chat not found");
    }

    const isMember = chat.members.some((member) => member.userId === userId);

    if (!isMember) {
      throw new BadRequestException("User is not a member of the chat");
    }

    await this.prismaService.chat.delete({
      where: { id: chatId }
    });

    return true;
  }

  public async encryptMessage(
    text: string,
    userId: string,
    chatId: string,
    isFake: boolean = false
  ) {
    const clientKey = await this.prismaService.clientKey.findUnique({
      where: {
        userId
      }
    });

    const serverKey = await this.prismaService.serverKey.findUnique({
      where: {
        chatId
      }
    });
    let hash = await sha1Hash("fakeHash");

    if (!isFake) {
      hash = await sha1Hash(text);
    }

    const encryptedHash = this.cryptoService.encryptHashRsa(
      hash,
      serverKey.privateKeyD,
      serverKey.publicKeyN
    );

    const encryptedText = this.cryptoService.encryptTextDes(
      clientKey.sessionKey.toString(),
      text
    );
    console.log("client key session key:", clientKey.sessionKey.toString());

    console.log("encrypted text for client:", encryptedText);
    console.log("encrypted hash for client:", encryptedHash);

    return { encryptedText, encryptedHash };
  }

  public async decryptMessage(
    encryptedText: string,
    encryptedHash: string[],
    userId: string
  ) {
    const clientKey = await this.prismaService.clientKey.findUnique({
      where: {
        userId
      }
    });
    console.log(clientKey.sessionKey.toString());

    const decryptedText = this.cryptoService.decryptTextDes(
      clientKey.sessionKey.toString(),
      encryptedText
    );

    const decryptedHash = this.cryptoService.decryptHashRsa(
      encryptedHash,
      clientKey.publicKeyE,
      clientKey.publicKeyN
    );

    return { decryptedText, decryptedHash };
  }

  public async sendChatMessage(
    userId: string,
    chatId: string,
    input: SendChatMessageInput
  ) {
    const { message, hash, isFake, fileIds } = input;

    console.log("encrypted message from client:", message);
    console.log("encrypted hash from client:", hash);

    const chat = await this.prismaService.chat.findUnique({
      where: { id: chatId },
      include: { members: true }
    });

    if (!chat) {
      throw new BadRequestException("Chat not found");
    }

    const isMember = chat.members.some((member) => member.userId === userId);

    if (!isMember) {
      throw new BadRequestException("User is not a member of the chat");
    }

    if (message !== null) {
      const serverKey = await this.prismaService.serverKey.findUnique({
        where: {
          chatId
        }
      });
      const clientKey = await this.prismaService.clientKey.findUnique({
        where: {
          userId
        }
      });

      if (!serverKey || !clientKey) {
        throw new BadRequestException("Server or client key not found");
      }

      const decryptedHash = this.cryptoService.decryptHashRsa(
        hash,
        clientKey.publicKeyE,
        clientKey.publicKeyN
      );

      const decryptedText = this.cryptoService.decryptTextDes(
        clientKey.sessionKey.toString(),
        message
      );

      const isValidHash = (await sha1Hash(decryptedText)) === decryptedHash;
      if (!isValidHash) {
        throw new BadRequestException("Invalid hash from client");
      }

      if (fileIds.length > 0) {
        const chatMessage = await this.prismaService.chatMessage.findFirst({
          where: {
            files: {
              some: {
                id: { in: fileIds }
              }
            }
          }
        });
        if (!chatMessage) {
          throw new BadRequestException(
            "Chat message not found for the provided file IDs"
          );
        }
        const encryptChatMessage = await this.prismaService.chatMessage.update({
          where: {
            id: chatMessage.id
          },
          data: {
            text: decryptedText,
            userId,
            chatId,
            isFake
          },
          include: {
            files: {
              where: {
                id: { in: fileIds }
              }
            },
            chat: {
              include: {
                members: {
                  include: {
                    user: true
                  }
                }
              }
            },
            replies: true,
            replyTo: {
              include: {}
            },
            user: true
          }
        });
        return encryptChatMessage;
      } else {
        const chatMessage = await this.prismaService.chatMessage.create({
          data: {
            text: decryptedText,
            userId,
            chatId,
            isFake
          },

          include: {
            files: {
              where: {
                id: { in: fileIds }
              }
            },
            chat: {
              include: {
                members: {
                  include: {
                    user: true
                  }
                }
              }
            },
            replies: true,
            replyTo: {
              include: {}
            },
            user: true
          }
        });

        return chatMessage;
      }
    } else {
      const chatMessage = await this.prismaService.chatMessage.findFirst({
        where: {
          files: {
            some: {
              id: { in: fileIds }
            }
          }
        },
        include: {
          files: {
            where: {
              id: { in: fileIds }
            }
          },
          chat: {
            include: {
              members: {
                include: {
                  user: true
                }
              }
            }
          },
          replies: true,
          replyTo: {
            include: {}
          },
          user: true
        }
      });
      if (!chatMessage) {
        throw new BadRequestException(
          "Chat message not found for the provided file IDs"
        );
      }
      return chatMessage;
    }
  }

  public async sendFile(
    user: User,
    chatId: string,
    file: Upload,
    input: SendFileInput,
    messageId?: string
  ) {
    const { hashFile } = input;
    const { createReadStream, filename, mimetype } = await file;
    console.log("encrypted hash from client:", hashFile);

    const chunks: Buffer[] = [];

    for await (const chunk of createReadStream()) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const clientKey = await this.prismaService.clientKey.findUnique({
      where: {
        userId: user.id
      }
    });

    const decryptedBytes = this.cryptoService.decryptBytesDes(
      clientKey.sessionKey.toString(),
      new Uint8Array(buffer)
    );
    if (!decryptedBytes) {
      throw new BadRequestException("Failed to decrypt file bytes");
    }

    const hashDecryptedBytes = await sha1HashBytes(decryptedBytes);
    const decryptedHashFile = this.cryptoService.decryptHashRsa(
      hashFile,
      clientKey.publicKeyE,
      clientKey.publicKeyN
    );

    console.log("decrypted hash of the file from client:", decryptedHashFile);

    if (hashDecryptedBytes !== decryptedHashFile) {
      throw new BadRequestException("Invalid file hash from client");
    }

    let chatMessage: ChatMessage = null;
    if (messageId === "null" || !messageId) {
      chatMessage = await this.prismaService.chatMessage.create({
        data: {
          userId: user.id,
          chatId: chatId
        }
      });
    } else {
      chatMessage = await this.prismaService.chatMessage.findUnique({
        where: {
          id: messageId
        }
      });
    }

    const decryptedBuffer = Buffer.from(decryptedBytes);

    const fileTypeResult = await fileTypeFromBuffer(decryptedBuffer);
    const fileFormat = fileTypeResult?.ext ?? "unknown";
    const fileName = `chats/${chatId}/${chatMessage.id}/${filename}`;

    await this.storageService.upload(buffer, fileName + ".enc", mimetype);

    const fileMessage = await this.prismaService.fileMessage.create({
      data: {
        fileName: filename.toString(),
        fileFullName: fileName,
        fileSize: decryptedBuffer.length.toString(),
        fileFormat,
        fileUrl: `${this.configService.getOrThrow<string>("S3_URL")}${fileName}`,
        chatMessageId: chatMessage.id,
        userId: user.id,
        chatId: chatId
      }
    });

    await this.prismaService.chatMessage.update({
      where: {
        id: chatMessage.id
      },
      data: {
        files: {
          connect: {
            id: fileMessage.id
          }
        }
      }
    });

    await this.storageService.upload(decryptedBuffer, fileName, mimetype);

    return { fileId: fileMessage.id, chatMessageId: chatMessage.id };
  }

  public async removeMessages(
    userId: string,
    chatId: string,
    input: RemoveMessagesInput
  ) {
    const { messageIds } = input;
    const messages = await this.prismaService.chatMessage.findMany({
      where: {
        id: { in: messageIds },
        chatId,
        isDeleted: false
      },
      include: {
        files: true,
        chat: {
          include: {
            members: {
              include: {
                user: true
              }
            }
          }
        }
      }
    });

    if (messages.length === 0) {
      throw new BadRequestException("No messages found to delete");
    } else {
      const isMember = messages.every((message) =>
        message.chat.members.some((member) => member.userId === userId)
      );

      if (!isMember) {
        throw new BadRequestException("User is not a member of the chat");
      }

      for (const message of messages) {
        for (const file of message.files) {
          await this.storageService.remove(`${file.fileFullName}`);
          await this.storageService.remove(`${file.fileFullName}.enc`);
        }
      }
      await this.prismaService.chatMessage.deleteMany({
        where: {
          id: { in: messageIds },
          chatId
        }
      });
    }
    return true;
  }

  public async removeFile(fileId: string) {
    const fileMessage = await this.prismaService.fileMessage.findUnique({
      where: {
        id: fileId
      },
      include: {
        chatMessage: {
          include: {
            files: true
          }
        }
      }
    });

    await this.storageService.remove(fileMessage.fileFullName);

    if (fileMessage.chatMessage.files.length === 1) {
      await this.prismaService.chatMessage.delete({
        where: {
          id: fileMessage.chatMessageId
        }
      });
    } else {
      await this.prismaService.fileMessage.delete({
        where: {
          id: fileId
        }
      });
    }
    return true;
  }

  public async downloadFile(fileId: string, userId: string) {
    const fileMessage = await this.prismaService.fileMessage.findUnique({
      where: {
        id: fileId
      }
    });

    if (!fileMessage) {
      throw new BadRequestException("File not found");
    }

    const clientKey = await this.prismaService.clientKey.findUnique({
      where: {
        userId: userId
      }
    });
    if (!clientKey) {
      throw new BadRequestException("Client key not found");
    }
    const serverKey = await this.prismaService.serverKey.findUnique({
      where: {
        chatId: fileMessage.chatId
      }
    });

    const buffer = await downloadFileToBuffer(fileMessage.fileUrl);
    const { mime } = await fileTypeFromBuffer(buffer);
    const byteArray: Uint8Array = new Uint8Array(buffer);

    const hashFile = await sha1HashBytes(byteArray);

    const encryptedHashFile = this.cryptoService.encryptHashRsa(
      hashFile,
      serverKey.privateKeyD,
      serverKey.publicKeyN
    );

    const encryptedBytes = this.cryptoService.encryptBytesDes(
      clientKey.sessionKey.toString(),
      byteArray
    );

    const base64EncryptedBytes = Buffer.from(encryptedBytes).toString("base64");

    if (!encryptedBytes) {
      throw new BadRequestException("Failed to encrypt file bytes");
    }

    return {
      base64: base64EncryptedBytes,
      mimetype: mime,
      filename: fileMessage.fileName,
      hash: encryptedHashFile
    };
  }

  private findBySearchTermChatFilter(
    searchTerm: string
  ): Prisma.ChatWhereInput {
    return {
      OR: [
        {
          chatName: {
            contains: searchTerm,
            mode: "insensitive"
          }
        }
      ]
    };
  }

  private findBySearchTermMessageFilter(
    searchTerm: string
  ): Prisma.ChatMessageWhereInput {
    return {
      OR: [
        {
          text: {
            contains: searchTerm,
            mode: "insensitive"
          }
        },
        {
          user: {
            username: {
              contains: searchTerm,
              mode: "insensitive"
            }
          }
        }
      ]
    };
  }
}
