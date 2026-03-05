import { Field, ObjectType } from "@nestjs/graphql";

import { GroupPermissionEnum, GroupRole } from "@/prisma/generated";

@ObjectType()
export class GroupRoleModel implements GroupRole {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  color: string;

  @Field(() => String)
  groupId: string;

  @Field(() => [GroupPermissionEnum])
  permissions: GroupPermissionEnum[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
