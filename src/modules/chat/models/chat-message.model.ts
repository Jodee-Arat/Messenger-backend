import { Field, ID, ObjectType } from "@nestjs/graphql";

import { ChatMessage } from "@/prisma/generated";

import { UserModel } from "../../auth/account/models/user.model";

import { ChatModel } from "./chat.model";
import { FileMessageModel } from "./file-message.model";

@ObjectType()
export class ChatMessageModel implements ChatMessage {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  text: string | null;

  @Field(() => Boolean)
  isStarted: boolean;

  @Field(() => Boolean)
  isFake: boolean;

  @Field(() => Boolean)
  isDeleted: boolean;

  @Field(() => Boolean)
  isEdited: boolean;

  @Field(() => [FileMessageModel], { nullable: true })
  files?: FileMessageModel[];

  @Field(() => ChatMessageModel, { nullable: true })
  replyTo?: ChatMessageModel | null;

  @Field({ nullable: true })
  replyToId: string | null;

  @Field({ nullable: true })
  readCount: string | null;

  @Field(() => UserModel)
  user: UserModel;

  @Field()
  userId: string;

  @Field(() => ChatModel)
  chat: ChatModel;

  @Field()
  chatId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [String])
  hash: string[];

  @Field(() => [ChatMessageModel])
  replies: ChatMessageModel[];
}
