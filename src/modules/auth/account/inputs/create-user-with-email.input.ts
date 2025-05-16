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
export class createUserWEmail {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/)
  @Length(6, 30)
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
