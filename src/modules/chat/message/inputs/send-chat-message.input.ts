import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";

@InputType()
export class SendChatMessageInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  public text?: string;

  @Field(() => String, {
    nullable: true
  })
  @IsString()
  @IsOptional()
  public targetChatId?: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  public forwardedMessageIds?: string[];

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  public isEdit?: boolean;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  public fileIds?: string[];
}
