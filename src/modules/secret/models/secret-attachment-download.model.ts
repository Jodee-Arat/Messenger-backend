import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SecretAttachmentDownloadModel {
  @Field(() => String)
  attachmentId: string;

  @Field(() => String)
  chatId: string;

  @Field(() => String)
  ciphertextBase64: string;

  @Field(() => String)
  ciphertextSize: string;
}
