import { Field, ID, ObjectType } from "@nestjs/graphql";

import { ChatMessage } from "@/prisma/generated";

import { UserModel } from "../../../auth/account/models/user.model";
import { ChatModel } from "../../models/chat.model";
import { FileMessageModel } from "../file/models/file-message.model";

import { ChatMessageReplyModel } from "./chat-message-reply.model";

@ObjectType()
export class ChatMessageModel implements ChatMessage {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  text: string | null;

  @Field(() => Boolean)
  isStarted: boolean;

  @Field(() => Boolean)
  isDeleted: boolean;

  @Field(() => Boolean)
  isEdited: boolean;

  @Field(() => Boolean)
  isForwarded: boolean;

  @Field(() => Boolean)
  isReply: boolean;

  @Field(() => Boolean)
  isDraft: boolean;

  @Field(() => [FileMessageModel], { nullable: true })
  files?: FileMessageModel[];

  @Field(() => [ChatMessageReplyModel], { nullable: "itemsAndList" })
  replies: ChatMessageReplyModel[];

  @Field(() => [ChatMessageReplyModel], { nullable: "itemsAndList" })
  repliedToLinks: ChatMessageReplyModel[];

  @Field({ nullable: true })
  readCount: string | null;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => ChatModel, { nullable: true })
  lastMessageForChat?: ChatModel | null;

  @Field(() => ChatModel, { nullable: true })
  pinnedInChat?: ChatModel | null;

  @Field(() => String, { nullable: true })
  draftOfChatId: string;

  @Field(() => [ChatModel], { nullable: true })
  draftOfChat?: ChatModel | null;

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
}
