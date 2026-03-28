import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SecretAttachmentModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  chatId: string;

  @Field(() => String)
  ciphertextSize: string;

  @Field(() => Date, { nullable: true })
  committedAt?: Date | null;

  @Field(() => Date, { nullable: true })
  expiresAt?: Date | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
