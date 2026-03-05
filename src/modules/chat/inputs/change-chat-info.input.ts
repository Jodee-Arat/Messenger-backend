import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString, Length, Matches } from "class-validator";

@InputType()
export class ChangeChatInfoInput {
  @Field(() => String)
  @IsString()
  @Matches(/^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/)
  @Length(1, 30)
  public chatName: string;

  @Field(() => String)
  @IsString()
  @IsOptional()
  @Length(0, 300)
  public description: string;
}
