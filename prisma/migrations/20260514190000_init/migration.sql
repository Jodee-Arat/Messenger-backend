-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "QueueActionTypeEnum" AS ENUM ('CREATE_CHAT', 'OTHER');

-- CreateEnum
CREATE TYPE "FriendshipStatusEnum" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "ChatPermissionEnum" AS ENUM ('SEND_MESSAGES', 'EDIT_MESSAGES', 'DELETE_MESSAGES', 'PIN_MESSAGES', 'INVITE_MEMBERS', 'REMOVE_MEMBERS', 'MANAGE_ROLES', 'CHANGE_ROLE_INFO', 'CHANGE_CHAT_INFO', 'CHANGE_CHAT_NAME', 'CHANGE_CHAT_AVATAR', 'CREATE_ROLES', 'DELETE_ROLES');

-- CreateEnum
CREATE TYPE "GroupPermissionEnum" AS ENUM ('INVITE_MEMBERS', 'REMOVE_MEMBERS', 'CHANGE_GROUP_INFO', 'CHANGE_GROUP_NAME', 'CHANGE_GROUP_AVATAR', 'MANAGE_ROLES', 'CREATE_ROLES', 'CHANGE_ROLE_INFO', 'CREATE_CHATS', 'DELETE_ROLES', 'DELETE_GROUP', 'DELETE_CHATS');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "bio" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT,
    "totp_secret" TEXT,
    "is_totp_enabled" BOOLEAN NOT NULL DEFAULT false,
    "is_deactivated" BOOLEAN NOT NULL DEFAULT false,
    "deactivated_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friendships" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "friend_id" TEXT NOT NULL,
    "status" "FriendshipStatusEnum" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "friendships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_messages" (
    "id" TEXT NOT NULL,
    "text" TEXT,
    "is_started" BOOLEAN NOT NULL DEFAULT false,
    "is_edited" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "is_forwarded" BOOLEAN NOT NULL DEFAULT false,
    "is_reply" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_messages_reply" (
    "id" TEXT NOT NULL,
    "reply_id" TEXT NOT NULL,
    "replied_to_id" TEXT NOT NULL,

    CONSTRAINT "chat_messages_reply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "draft_messages" (
    "id" TEXT NOT NULL,
    "text" TEXT,
    "is_forwarded" BOOLEAN NOT NULL DEFAULT false,
    "edit_id" TEXT,
    "files_edit_id" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "user_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "draft_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "draft_message_replies" (
    "id" TEXT NOT NULL,
    "draft_message_id" TEXT NOT NULL,
    "replied_to_id" TEXT NOT NULL,

    CONSTRAINT "draft_message_replies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "file_messages" (
    "id" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileFullName" TEXT NOT NULL,
    "fileSize" TEXT NOT NULL,
    "fileFormat" TEXT NOT NULL,
    "chat_message_id" TEXT,
    "draft_message_id" TEXT,
    "user_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "file_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "group_name" TEXT NOT NULL,
    "avatar_url" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chats" (
    "id" TEXT NOT NULL,
    "chat_name" TEXT,
    "isGroup" BOOLEAN NOT NULL DEFAULT false,
    "avatar_url" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "is_secret" BOOLEAN NOT NULL DEFAULT false,
    "is_saved" BOOLEAN NOT NULL DEFAULT false,
    "require_totp" BOOLEAN NOT NULL DEFAULT false,
    "owner_id" TEXT,
    "group_id" TEXT,
    "last_message_id" TEXT,
    "pinned_message_id" TEXT,
    "last_message_at" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pinned_chats" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "pinnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "pinned_chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_members" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_creator" BOOLEAN DEFAULT false,
    "chat_id" TEXT NOT NULL,
    "pinned_message_id" TEXT,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_members" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_creator" BOOLEAN DEFAULT false,
    "group_id" TEXT,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "group_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    "permissions" "ChatPermissionEnum"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "permissions" "GroupPermissionEnum"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "group_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_role_members" (
    "chat_member_id" TEXT NOT NULL,
    "chat_role_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_role_members_pkey" PRIMARY KEY ("chat_member_id","chat_role_id")
);

-- CreateTable
CREATE TABLE "group_role_members" (
    "group_member_id" TEXT NOT NULL,
    "group_role_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "group_role_members_pkey" PRIMARY KEY ("group_member_id","group_role_id")
);

-- CreateTable
CREATE TABLE "queue_secret_messages" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    "is_key" BOOLEAN NOT NULL DEFAULT false,
    "from_user_id" TEXT NOT NULL,
    "to_user_ids" TEXT[],
    "who_checked_ids" TEXT[],
    "from_session_id" TEXT,
    "to_session_ids" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "checked_session_ids" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "ukm" TEXT,
    "sender_key_id" TEXT,
    "sender_key_iteration" INTEGER,
    "sender_key_epoch" INTEGER,
    "iv" TEXT NOT NULL,
    "encrypted_message" TEXT NOT NULL,
    "sig" TEXT NOT NULL,
    "secret_attachment_ids" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "queue_secret_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "secret_attachments" (
    "id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    "uploader_user_id" TEXT NOT NULL,
    "storage_key" TEXT NOT NULL,
    "ciphertext_size" TEXT NOT NULL,
    "allowed_user_ids" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "committed_message_id" TEXT,
    "committed_at" TIMESTAMP(3),
    "expires_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "secret_attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "queue_shared_secret_keys" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    "from_user_id" TEXT NOT NULL,
    "to_user_id" TEXT NOT NULL,
    "from_session_id" TEXT,
    "to_session_id" TEXT,
    "key_kind" TEXT NOT NULL DEFAULT 'SESSION_KEY',
    "sender_key_id" TEXT,
    "sender_key_epoch" INTEGER,
    "ik_pub" TEXT NOT NULL,
    "ek_pub" TEXT NOT NULL,
    "used_opk_id" TEXT,
    "ukm" TEXT NOT NULL,
    "iv" TEXT NOT NULL,
    "encrypted_key" TEXT NOT NULL,
    "sig" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "queue_shared_secret_keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "friendships_user_id_friend_id_key" ON "friendships"("user_id", "friend_id");

-- CreateIndex
CREATE UNIQUE INDEX "chat_messages_reply_reply_id_replied_to_id_key" ON "chat_messages_reply"("reply_id", "replied_to_id");

-- CreateIndex
CREATE UNIQUE INDEX "draft_message_replies_draft_message_id_replied_to_id_key" ON "draft_message_replies"("draft_message_id", "replied_to_id");

-- CreateIndex
CREATE UNIQUE INDEX "chats_last_message_id_key" ON "chats"("last_message_id");

-- CreateIndex
CREATE UNIQUE INDEX "chats_pinned_message_id_key" ON "chats"("pinned_message_id");

-- CreateIndex
CREATE INDEX "chats_owner_id_idx" ON "chats"("owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "chats_owner_id_is_saved_key" ON "chats"("owner_id", "is_saved");

-- CreateIndex
CREATE UNIQUE INDEX "pinned_chats_userId_chatId_key" ON "pinned_chats"("userId", "chatId");

-- CreateIndex
CREATE UNIQUE INDEX "chat_roles_chat_id_name_key" ON "chat_roles"("chat_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "group_roles_group_id_name_key" ON "group_roles"("group_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "secret_attachments_storage_key_key" ON "secret_attachments"("storage_key");

-- CreateIndex
CREATE INDEX "secret_attachments_chat_id_uploader_user_id_idx" ON "secret_attachments"("chat_id", "uploader_user_id");

-- CreateIndex
CREATE INDEX "secret_attachments_expires_at_idx" ON "secret_attachments"("expires_at");

-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_friend_id_fkey" FOREIGN KEY ("friend_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages_reply" ADD CONSTRAINT "chat_messages_reply_reply_id_fkey" FOREIGN KEY ("reply_id") REFERENCES "chat_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages_reply" ADD CONSTRAINT "chat_messages_reply_replied_to_id_fkey" FOREIGN KEY ("replied_to_id") REFERENCES "chat_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_messages" ADD CONSTRAINT "draft_messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_messages" ADD CONSTRAINT "draft_messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_message_replies" ADD CONSTRAINT "draft_message_replies_draft_message_id_fkey" FOREIGN KEY ("draft_message_id") REFERENCES "draft_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_message_replies" ADD CONSTRAINT "draft_message_replies_replied_to_id_fkey" FOREIGN KEY ("replied_to_id") REFERENCES "chat_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_messages" ADD CONSTRAINT "file_messages_chat_message_id_fkey" FOREIGN KEY ("chat_message_id") REFERENCES "chat_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_messages" ADD CONSTRAINT "file_messages_draft_message_id_fkey" FOREIGN KEY ("draft_message_id") REFERENCES "draft_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_messages" ADD CONSTRAINT "file_messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_messages" ADD CONSTRAINT "file_messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_last_message_id_fkey" FOREIGN KEY ("last_message_id") REFERENCES "chat_messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_pinned_message_id_fkey" FOREIGN KEY ("pinned_message_id") REFERENCES "chat_messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pinned_chats" ADD CONSTRAINT "pinned_chats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pinned_chats" ADD CONSTRAINT "pinned_chats_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "chats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_members" ADD CONSTRAINT "chat_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_members" ADD CONSTRAINT "chat_members_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_members" ADD CONSTRAINT "chat_members_pinned_message_id_fkey" FOREIGN KEY ("pinned_message_id") REFERENCES "chat_messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_roles" ADD CONSTRAINT "chat_roles_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_roles" ADD CONSTRAINT "group_roles_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_role_members" ADD CONSTRAINT "chat_role_members_chat_member_id_fkey" FOREIGN KEY ("chat_member_id") REFERENCES "chat_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_role_members" ADD CONSTRAINT "chat_role_members_chat_role_id_fkey" FOREIGN KEY ("chat_role_id") REFERENCES "chat_roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_role_members" ADD CONSTRAINT "group_role_members_group_member_id_fkey" FOREIGN KEY ("group_member_id") REFERENCES "group_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_role_members" ADD CONSTRAINT "group_role_members_group_role_id_fkey" FOREIGN KEY ("group_role_id") REFERENCES "group_roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "secret_attachments" ADD CONSTRAINT "secret_attachments_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "secret_attachments" ADD CONSTRAINT "secret_attachments_uploader_user_id_fkey" FOREIGN KEY ("uploader_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
