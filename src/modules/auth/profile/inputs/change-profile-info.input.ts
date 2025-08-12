import { Field, InputType } from "@nestjs/graphql";
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength
} from "class-validator";

@InputType()
export class ChangeProfileInfoInput {
  @Field(() => String)
  @IsString()
  @Matches(/^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/)
  @Length(6, 30)
  public username: string;

  @Field(() => String)
  @IsString()
  @IsOptional()
  @MaxLength(300)
  public bio: string;
}
