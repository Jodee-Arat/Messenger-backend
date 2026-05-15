import { Field, ID, ObjectType } from "@nestjs/graphql";

import { Group } from "@prisma/client";

import { ChatModel } from "../../chat/models/chat.model";

import { GroupMemberModel } from "./group-member.model";

@ObjectType()
export class GroupModel implements Group {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  groupName: string;

  @Field(() => String, { nullable: true })
  avatarUrl: string | null;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => Boolean)
  isDeleted: boolean;

  @Field(() => [GroupMemberModel])
  members: GroupMemberModel[];

  @Field(() => [ChatModel])
  chats: ChatModel[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
