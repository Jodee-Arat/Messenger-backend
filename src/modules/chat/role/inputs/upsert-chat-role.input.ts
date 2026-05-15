import { Field, InputType, registerEnumType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

import { ChatPermissionEnum } from "@prisma/client";

registerEnumType(ChatPermissionEnum, { name: "ChatPermissionEnum" });

@InputType()
export class UpsertChatRoleInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  color: string;

  @Field(() => [ChatPermissionEnum])
  @IsNotEmpty()
  permissions: ChatPermissionEnum[];
}
