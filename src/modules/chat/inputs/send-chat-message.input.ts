import { Field, InputType } from "@nestjs/graphql";
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString
} from "class-validator";

@InputType()
export class SendChatMessageInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  public message: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  public hash: string[];

  @Field(() => Boolean)
  @IsBoolean()
  @IsNotEmpty()
  public isFake: boolean;

  @Field(() => [String])
  @IsArray()
  public fileIds: string[];
}
