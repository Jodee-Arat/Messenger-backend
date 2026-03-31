import { Field, InputType } from "@nestjs/graphql";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MinLength
} from "class-validator";

@InputType()
export class CreateUserWEmailInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Zа-яА-ЯёЁ0-9_]+(?:-[a-zA-Zа-яА-ЯёЁ0-9_]+)*$/)
  @Length(3, 30)
  public username: string;

  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  public password: string;
}
