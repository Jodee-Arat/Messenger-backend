import { Field, ID, ObjectType } from "@nestjs/graphql";

import { ChatMessageReply } from "@/prisma/generated";

import { ChatMessageModel } from "./chat-message.model";

@ObjectType()
export class ChatMessageReplyModel implements ChatMessageReply {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  replyId: string;
  @Field(() => String)
  repliedToId: string;
  @Field(() => ChatMessageModel, { nullable: true })
  reply?: ChatMessageModel | null;
  @Field(() => ChatMessageModel, { nullable: true })
  repliedTo?: ChatMessageModel | null;
}
