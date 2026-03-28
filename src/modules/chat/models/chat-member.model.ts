import { Field, ID, ObjectType } from "@nestjs/graphql";

import { ChatMember } from "@/prisma/generated";

import { UserModel } from "../../auth/account/models/user.model";
import { ChatRoleModel } from "../role/models/chat-role.model";

import { ChatModel } from "./chat.model";

@ObjectType()
export class ChatMemberModel implements ChatMember {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => Boolean, { nullable: true })
  isCreator: boolean;

  @Field(() => String)
  chatId: string;

  @Field(() => ChatModel)
  chat: ChatModel;

  @Field(() => Date)
  joinedAt: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  pinnedMessageId: string | null;

  @Field(() => [ChatRoleModel], { nullable: true })
  roles?: any[];
}
