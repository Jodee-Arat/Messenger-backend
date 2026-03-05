import { Field, ID, ObjectType } from "@nestjs/graphql";

import { PreKey } from "@/prisma/generated";

import { UserModel } from "../../auth/account/models/user.model";

@ObjectType()
export class PreKeyModel implements PreKey {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  ikPub: string;

  @Field(() => String)
  spkPub: string;

  @Field(() => String)
  spkSig: string;

  @Field(() => [String])
  opkPubs: string[];

  @Field(() => Number)
  indexOpkPub: number;

  // @Field(() => UserModel)
  // user: UserModel;

  @Field(() => String)
  userId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
