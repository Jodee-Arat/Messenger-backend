import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RemoveMessagesInput {
  @Field(() => [String])
  messageIds: string[];
}
