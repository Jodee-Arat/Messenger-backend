import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TypingIndicatorModel {
  @Field(() => String)
  userId: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  chatId: string;
}
