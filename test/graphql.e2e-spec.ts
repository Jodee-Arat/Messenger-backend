jest.mock("otplib", () => ({
  generateSecret: jest.fn(() => "totp-secret"),
  generateURI: jest.fn(() => "otpauth://totp/test"),
  verify: jest.fn(() => true)
}));

import { ApolloDriver } from "@nestjs/apollo";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { App } from "supertest/types";

import { PrismaService } from "../src/core/prisma/prisma.service";
import { RedisService } from "../src/core/redis/redis.service";
import { AccountService } from "../src/modules/auth/account/account.service";
import { AccountResolver } from "../src/modules/auth/account/account.resolver";
import { SessionResolver } from "../src/modules/auth/session/session.resolver";
import { SessionService } from "../src/modules/auth/session/session.service";
import { ChatResolver } from "../src/modules/chat/chat.resolver";
import { ChatService } from "../src/modules/chat/chat.service";
import { MessageResolver } from "../src/modules/chat/message/message.resolver";
import { MessageService } from "../src/modules/chat/message/message.service";
import { RoleResolver } from "../src/modules/chat/role/role.resolver";
import { RoleService } from "../src/modules/chat/role/role.service";
import { GroupResolver } from "../src/modules/group/group.resolver";
import { GroupService } from "../src/modules/group/group.service";
import { GroupRoleResolver } from "../src/modules/group/role/group-role.resolver";
import { GroupRoleService } from "../src/modules/group/role/group-role.service";
import { ChatPermissionEnum, GroupPermissionEnum } from "../prisma/generated";

type GraphqlResponse<TData = Record<string, unknown>> = {
  body: {
    data?: TData;
    errors?: Array<{ message: string; extensions?: { code?: string } }>;
  };
};

const now = new Date("2026-05-11T00:00:00.000Z");
const user = {
  id: "user-a",
  username: "alice",
  email: "alice@example.com",
  password: "hashed",
  bio: null,
  avatarUrl: null,
  totpSecret: null,
  isTotpEnabled: false,
  isDeactivated: false,
  deactivatedAt: null,
  createdAt: now,
  updatedAt: now
};

const chatMembers = [
  {
    id: "chat-member-a",
    userId: user.id,
    chatId: "chat-1",
    isCreator: true,
    pinnedMessageId: null,
    joinedAt: now,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "chat-member-b",
    userId: "user-b",
    chatId: "chat-1",
    isCreator: false,
    pinnedMessageId: null,
    joinedAt: now,
    createdAt: now,
    updatedAt: now
  }
];

const groupMembers = [
  {
    id: "group-member-a",
    userId: user.id,
    groupId: "group-1",
    isCreator: true,
    joinedAt: now,
    createdAt: now,
    updatedAt: now
  }
];

const group = {
  id: "group-1",
  groupName: "Engineering",
  avatarUrl: null,
  description: null,
  isDeleted: false,
  members: groupMembers,
  chats: [],
  createdAt: now,
  updatedAt: now
};

const chat = {
  id: "chat-1",
  chatName: "General",
  isGroup: true,
  description: null,
  avatarUrl: null,
  isDeleted: false,
  isSecret: false,
  isSaved: false,
  ownerId: null,
  requireTotp: false,
  members: chatMembers,
  group,
  groupId: group.id,
  lastMessageId: null,
  lastMessage: null,
  pinnedMessageId: null,
  pinnedMessage: null,
  draftMessages: null,
  lastMessageAt: null,
  createdAt: now,
  updatedAt: now,
  isPinned: false,
  pinnedOrder: null
};

const message = {
  id: "message-1",
  text: "hello from supertest",
  isStarted: false,
  isDeleted: false,
  isEdited: false,
  isForwarded: false,
  isReply: false,
  isDraft: false,
  files: [],
  replies: [],
  repliedToLinks: [],
  user,
  lastMessageForChat: null,
  pinnedInChat: null,
  draftOfChatId: null,
  draftOfChat: null,
  userId: user.id,
  chat,
  chatId: chat.id,
  createdAt: now,
  updatedAt: now
};

const chatRole = {
  id: "chat-role-1",
  name: "Moderator",
  color: "#3366ff",
  chatId: chat.id,
  permissions: [ChatPermissionEnum.SEND_MESSAGES],
  createdAt: now,
  updatedAt: now
};

const groupRole = {
  id: "group-role-1",
  name: "Group Moderator",
  color: "#22aa66",
  groupId: group.id,
  permissions: [GroupPermissionEnum.CREATE_CHATS],
  createdAt: now,
  updatedAt: now
};

describe("GraphQL API integration (Supertest)", () => {
  let app: INestApplication<App>;
  let moduleFixture: TestingModule;
  let groupService: jest.Mocked<Partial<GroupService>>;
  let chatService: jest.Mocked<Partial<ChatService>>;
  let messageService: jest.Mocked<Partial<MessageService>>;
  let roleService: jest.Mocked<Partial<RoleService>>;
  let groupRoleService: jest.Mocked<Partial<GroupRoleService>>;
  let sessionService: jest.Mocked<Partial<SessionService>>;

  const graphql = (query: string, variables?: Record<string, unknown>) =>
    request(app.getHttpServer()).post("/graphql").send({ query, variables });

  const authGraphql = (
    query: string,
    variables?: Record<string, unknown>
  ) =>
    graphql(query, variables)
      .set("Authorization", "Bearer access-token")
      .set("x-session-id", "session-1");

  beforeEach(async () => {
    groupService = {
      createGroup: jest.fn().mockResolvedValue(group),
      changeInfo: jest.fn().mockResolvedValue(true),
      findGroupByGroupId: jest.fn().mockResolvedValue(group),
      isUserInGroup: jest.fn().mockResolvedValue(true)
    };

    chatService = {
      createChat: jest.fn().mockResolvedValue(chat),
      checkChatAccess: jest.fn().mockResolvedValue(true),
      isUserInChat: jest.fn().mockResolvedValue(true),
      getChatUpdatedBroadcastPayload: jest.fn().mockResolvedValue(chat),
      getMemberPinnedMessageIds: jest.fn().mockResolvedValue({})
    };

    messageService = {
      sendChatMessage: jest.fn().mockResolvedValue({ message, chat })
    };

    roleService = {
      upsertChatRole: jest.fn().mockResolvedValue(chatRole)
    };

    groupRoleService = {
      upsertGroupRole: jest.fn().mockResolvedValue(groupRole)
    };

    sessionService = {
      loginUser: jest.fn().mockResolvedValue({
        user,
        message: "ok",
        sessionId: "session-1",
        accessToken: "access-token",
        refreshToken: "refresh-token"
      })
    };

    moduleFixture = await Test.createTestingModule({
      imports: [
        GraphQLModule.forRoot({
          driver: ApolloDriver,
          autoSchemaFile: true,
          path: "/graphql",
          context: ({ req, res }) => ({ req, res })
        })
      ],
      providers: [
        AccountResolver,
        SessionResolver,
        GroupResolver,
        ChatResolver,
        MessageResolver,
        RoleResolver,
        GroupRoleResolver,
        { provide: AccountService, useValue: { create: jest.fn() } },
        { provide: SessionService, useValue: sessionService },
        { provide: GroupService, useValue: groupService },
        { provide: ChatService, useValue: chatService },
        { provide: MessageService, useValue: messageService },
        { provide: RoleService, useValue: roleService },
        { provide: GroupRoleService, useValue: groupRoleService },
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn().mockResolvedValue(user)
            }
          }
        },
        {
          provide: JwtService,
          useValue: {
            verifyAsync: jest.fn().mockResolvedValue({ userId: user.id })
          }
        },
        {
          provide: ConfigService,
          useValue: {
            getOrThrow: jest.fn((key: string) => {
              if (key === "SESSION_FOLDER") {
                return "sess:";
              }
              return "test-value";
            })
          }
        },
        {
          provide: RedisService,
          useValue: {
            get: jest.fn().mockResolvedValue(JSON.stringify({ userId: user.id }))
          }
        }
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    app.use((req, _res, next) => {
      if (req.headers.authorization) {
        req.session = { userId: user.id };
      }
      next();
    });
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it("handles authentication mutation through GraphQL HTTP", async () => {
    const response: GraphqlResponse<{
      loginUser: {
        sessionId: string;
        accessToken: string;
        user: { id: string; username: string };
      };
    }> = await graphql(
      `
        mutation Login($data: LoginInput!) {
          loginUser(data: $data) {
            sessionId
            accessToken
            user {
              id
              username
            }
          }
        }
      `,
      {
        data: {
          login: user.email,
          password: "password"
        }
      }
    ).expect(200);

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data?.loginUser).toEqual({
      sessionId: "session-1",
      accessToken: "access-token",
      user: {
        id: user.id,
        username: user.username
      }
    });
    expect(sessionService.loginUser).toHaveBeenCalledWith(
      expect.objectContaining({ headers: expect.any(Object) }),
      { login: user.email, password: "password", pin: undefined },
      undefined
    );
  });

  it("rejects guarded GraphQL operations without auth", async () => {
    const response: GraphqlResponse = await graphql(`
      query Chats($filters: FiltersInput!) {
        findAllChatsByUser(filters: $filters) {
          id
        }
      }
    `, {
      filters: {
        searchTerm: ""
      }
    }).expect(200);

    expect(response.body.data).toBeNull();
    expect(response.body.errors?.[0]?.extensions?.code).toBe("UNAUTHENTICATED");
    expect(chatService.checkChatAccess).not.toHaveBeenCalled();
  });

  it("creates and modifies group/chat entities through authenticated GraphQL", async () => {
    const createGroupResponse: GraphqlResponse<{
      createGroup: { id: string; groupName: string };
    }> = await authGraphql(
      `
        mutation CreateGroup($data: CreateGroupInput!) {
          createGroup(data: $data) {
            id
            groupName
          }
        }
      `,
      {
        data: {
          groupName: "Engineering",
          userIds: ["user-b"]
        }
      }
    ).expect(200);

    expect(createGroupResponse.body.errors).toBeUndefined();
    expect(createGroupResponse.body.data?.createGroup.groupName).toBe(
      "Engineering"
    );
    expect(groupService.createGroup).toHaveBeenCalledWith(user.id, {
      groupName: "Engineering",
      userIds: ["user-b"]
    });

    const createChatResponse: GraphqlResponse<{
      createChat: { id: string; chatName: string; groupId: string };
    }> = await authGraphql(
      `
        mutation CreateChat($groupId: String!, $data: CreateChatInput!) {
          createChat(groupId: $groupId, data: $data) {
            id
            chatName
            groupId
          }
        }
      `,
      {
        groupId: group.id,
        data: {
          chatName: "General",
          userIds: ["user-b"],
          isSecret: false,
          isGroup: true
        }
      }
    ).expect(200);

    expect(createChatResponse.body.errors).toBeUndefined();
    expect(createChatResponse.body.data?.createChat).toEqual({
      id: chat.id,
      chatName: chat.chatName,
      groupId: group.id
    });
    expect(chatService.createChat).toHaveBeenCalledWith(user.id, group.id, {
      chatName: "General",
      userIds: ["user-b"],
      isSecret: false,
      isGroup: true
    });

    const changeGroupResponse: GraphqlResponse<{
      changeGroupInfo: boolean;
    }> = await authGraphql(
      `
        mutation ChangeGroup($groupId: String!, $data: ChangeGroupInfoInput!) {
          changeGroupInfo(groupId: $groupId, data: $data)
        }
      `,
      {
        groupId: group.id,
        data: {
          groupName: "Engineering-Updated",
          description: "updated"
        }
      }
    ).expect(200);

    expect(changeGroupResponse.body.errors).toBeUndefined();
    expect(changeGroupResponse.body.data?.changeGroupInfo).toBe(true);
    expect(groupService.isUserInGroup).toHaveBeenCalledWith(user.id, group.id);
    expect(groupService.changeInfo).toHaveBeenCalledWith(
      expect.objectContaining({ id: user.id }),
      group.id,
      {
      groupName: "Engineering-Updated",
        description: "updated"
      }
    );
  });

  it("checks chat membership guard before delivering message mutation", async () => {
    const response: GraphqlResponse<{
      sendChatMessage: boolean;
    }> = await authGraphql(
      `
        mutation SendMessage($chatId: String!, $data: SendChatMessageInput!) {
          sendChatMessage(chatId: $chatId, data: $data)
        }
      `,
      {
        chatId: chat.id,
        data: {
          text: "hello from supertest"
        }
      }
    ).expect(200);

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data?.sendChatMessage).toBe(true);
    expect(chatService.isUserInChat).toHaveBeenCalledWith(user.id, chat.id);
    expect(messageService.sendChatMessage).toHaveBeenCalledWith(user.id, chat.id, {
      text: "hello from supertest"
    });
  });

  it("blocks message delivery when chat membership guard fails", async () => {
    chatService.isUserInChat?.mockResolvedValueOnce(false);

    const response: GraphqlResponse = await authGraphql(
      `
        mutation SendMessage($chatId: String!, $data: SendChatMessageInput!) {
          sendChatMessage(chatId: $chatId, data: $data)
        }
      `,
      {
        chatId: "foreign-chat",
        data: {
          text: "not allowed"
        }
      }
    ).expect(200);

    expect(response.body.data).toBeNull();
    expect(response.body.errors?.[0]?.extensions?.code).toBe("FORBIDDEN");
    expect(messageService.sendChatMessage).not.toHaveBeenCalledWith(
      user.id,
      "foreign-chat",
      expect.anything()
    );
  });

  it("creates and assigns role definitions through GraphQL mutations", async () => {
    const chatRoleResponse: GraphqlResponse<{
      upsertChatRole: boolean;
    }> = await authGraphql(
      `
        mutation UpsertChatRole($chatId: String!, $data: UpsertChatRoleInput!) {
          upsertChatRole(chatId: $chatId, data: $data)
        }
      `,
      {
        chatId: chat.id,
        data: {
          name: "Moderator",
          color: "#3366ff",
          permissions: ["SEND_MESSAGES"]
        }
      }
    ).expect(200);

    expect(chatRoleResponse.body.errors).toBeUndefined();
    expect(chatRoleResponse.body.data?.upsertChatRole).toBe(true);
    expect(roleService.upsertChatRole).toHaveBeenCalledWith(user.id, chat.id, {
      name: "Moderator",
      color: "#3366ff",
      permissions: [ChatPermissionEnum.SEND_MESSAGES]
    });

    const groupRoleResponse: GraphqlResponse<{
      upsertGroupRole: boolean;
    }> = await authGraphql(
      `
        mutation UpsertGroupRole($groupId: String!, $data: UpsertGroupRoleInput!) {
          upsertGroupRole(groupId: $groupId, data: $data)
        }
      `,
      {
        groupId: group.id,
        data: {
          name: "Group Moderator",
          color: "#22aa66",
          permissions: ["CREATE_CHATS"]
        }
      }
    ).expect(200);

    expect(groupRoleResponse.body.errors).toBeUndefined();
    expect(groupRoleResponse.body.data?.upsertGroupRole).toBe(true);
    expect(groupRoleService.upsertGroupRole).toHaveBeenCalledWith(
      user.id,
      group.id,
      {
        name: "Group Moderator",
        color: "#22aa66",
        permissions: [GroupPermissionEnum.CREATE_CHATS]
      }
    );
  });
});
