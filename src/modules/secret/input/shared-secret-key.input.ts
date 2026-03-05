import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class SharedSecretKeyInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public chatId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public groupId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public toUserId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public ikPub: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public ekPub: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  public usedOpk: string | null;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public ukm: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public iv: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public encryptedKey: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public sig: string;
}
