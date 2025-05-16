import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class SendChatMessageInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public message: string;
}
