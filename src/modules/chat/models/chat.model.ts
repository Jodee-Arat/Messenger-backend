import { Field, ID, ObjectType } from "@nestjs/graphql";

import { Chat } from "@/prisma/generated";

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
  avatarUrl: string;

  @Field(() => Boolean)
  isDeleted: boolean;

  @Field(() => [ChatMemberModel])
  members: ChatMemberModel[];

  @Field(() => String, { nullable: true })
  lastMessageId: string | null;

  @Field(() => ChatMessageModel, { nullable: true })
  lastMessage?: ChatMessageModel | null;

  @Field(() => [ChatMessageModel], { nullable: true })
  draftMessages?: ChatMessageModel[] | null;

  @Field(() => Date, { nullable: true })
  lastMessageAt: Date | null;
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
