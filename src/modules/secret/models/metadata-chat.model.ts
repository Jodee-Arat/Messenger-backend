import { Field, ObjectType } from "@nestjs/graphql";

import { UserModel } from "../../auth/account/models/user.model";

ObjectType();
export class MetadataChatModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  chatName: string;

  @Field(() => String)
  isGroup: string;

  @Field(() => Boolean)
  isSecret: boolean;

  // @Field(() => String)
  // description: string;

  @Field(() => String)
  groupId: string;

  @Field(() => [UserModel])
  members: UserModel[];

  @Field(() => Date)
  lastMessageAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
