import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";

import { Friendship, FriendshipStatusEnum } from "@prisma/client";
import { UserModel } from "@/src/modules/auth/account/models/user.model";

registerEnumType(FriendshipStatusEnum, { name: "FriendshipStatusEnum" });

@ObjectType()
export class FriendshipModel implements Friendship {
  @Field(() => String)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  friendId: string;

  @Field(() => FriendshipStatusEnum)
  status: FriendshipStatusEnum;

  @Field(() => UserModel, { nullable: true })
  user?: UserModel;

  @Field(() => UserModel, { nullable: true })
  friend?: UserModel;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
