import { Field, ObjectType } from "@nestjs/graphql";

import { $Enums, ChatPermissionEnum, ChatRole } from "@prisma/client";

@ObjectType()
export class ChatRoleModel implements ChatRole {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  color: string;

  @Field(() => String)
  chatId: string;

  @Field(() => [ChatPermissionEnum])
  permissions: ChatPermissionEnum[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
