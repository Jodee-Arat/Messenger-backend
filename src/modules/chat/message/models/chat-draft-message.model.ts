import { Field, ID, ObjectType } from "@nestjs/graphql";

import { DraftMessage } from "@prisma/client";
import { UserModel } from "@/src/modules/auth/account/models/user.model";

import { ChatModel } from "../../models/chat.model";
import { FileMessageModel } from "../file/models/file-message.model";

import { chatDraftMessageReplyModel } from "./chat-draft-message-reply.model";

@ObjectType()
export class ChatDraftMessageModel implements DraftMessage {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  text: string;
  @Field(() => Boolean)
  isForwarded: boolean;

  @Field(() => String, { nullable: true })
  editId: string | null;

  @Field(() => [FileMessageModel])
  files: FileMessageModel[];

  @Field(() => [String])
  filesEditId: string[];

  @Field(() => [chatDraftMessageReplyModel])
  repliedToLinks: chatDraftMessageReplyModel[];

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
