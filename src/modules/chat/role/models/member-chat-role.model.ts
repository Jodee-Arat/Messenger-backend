import { Field, ObjectType } from "@nestjs/graphql";

import { ChatPermissionEnum, ChatRole } from "@/prisma/generated";

@ObjectType()
export class MemberChatRoleModel implements ChatRole {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  color: string;

  @Field(() => String)
  chatId: string;

  @Field(() => Boolean)
  isCreator: boolean;

  @Field(() => [ChatPermissionEnum])
  permissions: ChatPermissionEnum[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
