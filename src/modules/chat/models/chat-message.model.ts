import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";

import { ChatMessage, MessageType } from "@/prisma/generated";

import { UserModel } from "../../auth/account/models/user.model";

import { ChatModel } from "./chat.model";

registerEnumType(MessageType, { name: "MessageType" });

@ObjectType()
export class ChatMessageModel implements ChatMessage {
  @Field(() => ID)
  id: string;

  @Field(() => MessageType)
  type: MessageType;

  @Field({ nullable: true })
  text: string | null;

  @Field({ nullable: true })
  imageUrl: string | null;

  @Field({ nullable: true })
  fileUrl: string | null;

  @Field()
  isDeleted: boolean;

  @Field()
  isEdited: boolean;

  @Field({ nullable: true })
  replyToId: string | null;

  @Field({ nullable: true })
  readCount: string | null;

  @Field()
  userId: string;

  @Field()
  chatId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => ChatMessageModel, { nullable: true })
  replyTo?: ChatMessageModel | null;

  @Field(() => [ChatMessageModel])
  replies: ChatMessageModel[];

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => ChatModel)
  chat: ChatModel;
}
