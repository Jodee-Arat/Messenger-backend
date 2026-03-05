import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SecretKeyRotationModel {
  @Field(() => String)
  chatId: string;
}
