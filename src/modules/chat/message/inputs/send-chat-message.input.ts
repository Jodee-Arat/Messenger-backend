import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";

@InputType()
export class SendChatMessageInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  public text?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  public targetChatsId?: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  public editId?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  public forwardedMessageIds?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  public fileIds?: string[];
}
