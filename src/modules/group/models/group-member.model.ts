import { Field, ID, ObjectType } from "@nestjs/graphql";

import { GroupMember } from "@/prisma/generated";

import { UserModel } from "../../auth/account/models/user.model";
import { GroupRoleModel } from "../role/models/group-role.model";

import { GroupModel } from "./group.model";

@ObjectType()
export class GroupMemberModel implements GroupMember {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => Boolean, { nullable: true })
  isCreator: boolean;

  @Field(() => String)
  groupId: string;

  @Field(() => GroupModel)
  group: GroupModel;

  @Field(() => Date)
  joinedAt: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [GroupRoleModel], { nullable: true })
  roles?: any[];
}
