import { Field, ID, ObjectType } from "@nestjs/graphql";

import { FileMessage } from "@/prisma/generated";
import { UserModel } from "@/src/modules/auth/account/models/user.model";

import { ChatModel } from "../../../models/chat.model";
import { ChatDraftMessageModel } from "../../models/chat-draft-message.model";
import { ChatMessageModel } from "../../models/chat-message.model";

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

  @Field(() => ChatMessageModel, { nullable: true })
  chatMessage?: ChatMessageModel;

  @Field(() => String)
  chatMessageId: string;

  @Field(() => ChatDraftMessageModel, { nullable: true })
  draftMessage?: ChatDraftMessageModel;
  @Field(() => String)
  draftMessageId: string;

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
