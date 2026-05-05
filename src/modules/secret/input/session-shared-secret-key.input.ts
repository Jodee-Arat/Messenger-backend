import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class SessionSharedSecretKeyInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  chatId: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  groupId?: string | null;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fromSessionId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  toSessionId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  toUserId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  ikPub: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  ekPub: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  usedOpk?: string | null;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  ukm: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  iv: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  encryptedKey: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  sig: string;
}
