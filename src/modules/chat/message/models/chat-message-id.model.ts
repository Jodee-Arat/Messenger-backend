import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ChatMessageIdModel {
  @Field(() => String)
  id: string;
}
