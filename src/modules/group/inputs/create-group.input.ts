import { Field, InputType } from "@nestjs/graphql";
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  Length
} from "class-validator";

@InputType()
export class CreateGroupInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  public groupName: string;

  @Field(() => [String])
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  public userIds: string[];
}
