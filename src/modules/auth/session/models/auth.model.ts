import { Field, ObjectType } from "@nestjs/graphql";

import { UserModel } from "../../account/models/user.model";

@ObjectType()
export class AuthModel {
  @Field(() => UserModel, { nullable: true })
  user: UserModel;

  @Field(() => String, { nullable: true })
  message: String;

  @Field(() => String, { nullable: true })
  sessionId: String;

  @Field(() => String, { nullable: true })
  accessToken: String;

  @Field(() => String, { nullable: true })
  refreshToken: String;
}
