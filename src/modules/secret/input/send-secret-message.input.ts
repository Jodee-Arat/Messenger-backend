import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class SendSecretMessageInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  groupId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  chatId: string;

  @Field(() => [String])
  @IsArray()
  @IsNotEmpty()
  toUserIds: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  secretAttachmentIds?: string[];

  @Field(() => String, { nullable: true })
  @IsOptional()
  ukm: string | null;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  isKey: boolean | null;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  iv: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  encryptedMessage: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  sig: string;
}
