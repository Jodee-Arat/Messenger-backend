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
  @Matches(/^[a-zA-Zа-яА-ЯёЁ0-9_]+(?:-[a-zA-Zа-яА-ЯёЁ0-9_]+)*$/)
  @Length(3, 30)
  public username: string;

  @Field(() => String)
  @IsString()
  @IsOptional()
  @MaxLength(300)
  public bio: string;
}
