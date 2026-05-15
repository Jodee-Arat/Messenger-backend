import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

import { Chat } from "@prisma/client";

import { GroupModel } from "../../group/models/group.model";
import { ChatDraftMessageModel } from "../message/models/chat-draft-message.model";
import { ChatMessageModel } from "../message/models/chat-message.model";

import { ChatMemberModel } from "./chat-member.model";

@ObjectType()
export class ChatModel implements Chat {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  chatName: string;

  @Field(() => Boolean)
  isGroup: boolean;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => String, { nullable: true })
  avatarUrl: string;

  @Field(() => Boolean)
  isDeleted: boolean;

  @Field(() => Boolean)
  isSecret: boolean;

  @Field(() => Boolean)
  isSaved: boolean;

  @Field(() => String, { nullable: true })
  ownerId: string | null;

  @Field(() => Boolean)
  requireTotp: boolean;

  @Field(() => [ChatMemberModel])
  members: ChatMemberModel[];

  @Field(() => GroupModel, { nullable: true })
  group?: GroupModel | null;

  @Field(() => String, { nullable: true })
  groupId: string | null;

  @Field(() => String, { nullable: true })
  lastMessageId: string | null;

  @Field(() => ChatMessageModel, { nullable: true })
  lastMessage?: ChatMessageModel | null;

  @Field(() => String, { nullable: true })
  pinnedMessageId: string | null;

  @Field(() => ChatMessageModel, { nullable: true })
  pinnedMessage?: ChatMessageModel | null;

  @Field(() => [ChatDraftMessageModel], { nullable: true })
  draftMessages?: ChatDraftMessageModel[] | null;

  @Field(() => Date, { nullable: true })
  lastMessageAt: Date | null;
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Boolean, { nullable: true })
  isPinned?: boolean;

  @Field(() => Int, { nullable: true })
  pinnedOrder?: number;
}
