import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AttachFileModel {
  @Field(() => String)
  fileId: string;

  @Field(() => String)
  chatMessageId: string;
}
