import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

import { GroupPermissionEnum } from "@prisma/client";

registerEnumType(GroupPermissionEnum, { name: "GroupPermissionEnum" });

@InputType()
export class UpsertGroupRoleInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  color: string;

  @Field(() => [GroupPermissionEnum])
  @IsNotEmpty()
  permissions: GroupPermissionEnum[];
}
