import { Field, InputType } from "@nestjs/graphql";
import { registerEnumType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

import { QueueActionTypeEnum } from "@/prisma/generated";

registerEnumType(QueueActionTypeEnum, { name: "QueueActionTypeEnum" });

@InputType()
export class CreateSecretChatInput {
  @Field(() => QueueActionTypeEnum)
  @IsString()
  @IsNotEmpty()
  action: QueueActionTypeEnum;

  @Field(() => String, { nullable: true })
  @IsOptional()
  metadata: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  description: string | null;
}
