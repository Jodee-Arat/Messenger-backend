import { Field, InputType } from "@nestjs/graphql";
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length
} from "class-validator";

@InputType()
export class CreateChatInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  public chatName: string;

  @Field(() => [String])
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  public userIds: string[];

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  public isSecret: boolean | null;

  @Field(() => Boolean)
  @IsBoolean()
  public isGroup: boolean;
}
