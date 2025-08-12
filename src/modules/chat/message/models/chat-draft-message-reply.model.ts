import { Field, ID, ObjectType } from "@nestjs/graphql";

import { DraftMessageReply } from "@/prisma/generated";

import { ChatDraftMessageModel } from "./chat-draft-message.model";
import { ChatMessageModel } from "./chat-message.model";

@ObjectType()
export class chatDraftMessageReplyModel implements DraftMessageReply {
  @Field(() => ID)
  id: string;

  @Field(() => ChatDraftMessageModel)
  draftMessage: ChatDraftMessageModel;
  @Field(() => String)
  draftMessageId: string;

  @Field(() => ChatMessageModel)
  repliedTo: ChatMessageModel;
  @Field(() => String)
  repliedToId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
