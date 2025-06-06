import { Field, ID, ObjectType } from "@nestjs/graphql";

import { FileMessage } from "@/prisma/generated";

import { UserModel } from "../../auth/account/models/user.model";

import { ChatMessageModel } from "./chat-message.model";
import { ChatModel } from "./chat.model";

@ObjectType()
export class FileMessageModel implements FileMessage {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  fileUrl: string;

  @Field(() => String)
  fileName: string;

  @Field(() => String)
  fileFullName: string;

  @Field(() => String)
  fileFormat: string;

  @Field(() => String)
  fileSize: string;

  @Field(() => ChatMessageModel)
  chatMessage: ChatMessageModel;

  @Field(() => String)
  chatMessageId: string;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => String)
  userId: string;

  @Field(() => ChatModel)
  chat: ChatModel;

  @Field(() => String)
  chatId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
