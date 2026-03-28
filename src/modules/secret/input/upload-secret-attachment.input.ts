import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class UploadSecretAttachmentInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public chatId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public ciphertextBase64: string;
}
