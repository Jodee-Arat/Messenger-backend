import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty } from "class-validator";

@InputType()
export class SendFileInput {
  @Field(() => [String])
  @IsArray()
  @IsNotEmpty()
  public hashFile: string[];
}
