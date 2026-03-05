import { Field, ID, ObjectType } from "@nestjs/graphql";

// Note: Do not implement Prisma interface here; GraphQL allows nullable ukm
// import { QueueSecretMessage } from "@/prisma/generated";

@ObjectType()
export class QueueSecretMessageModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  groupId: string;

  @Field(() => Boolean)
  isKey: boolean;

  @Field(() => String)
  chatId: string;

  @Field(() => String)
  fromUserId: string;

  @Field(() => [String])
  toUserIds: string[];

  @Field(() => [String])
  whoCheckedIds: string[];

  @Field(() => String, { nullable: true })
  ukm?: string | null;

  @Field(() => String)
  iv: string;

  @Field(() => String)
  encryptedMessage: string;

  @Field(() => String)
  sig: string;

  // Дополнительные поля для восстановления начальной сессии
  @Field(() => String, { nullable: true })
  ikPub?: string | null;

  @Field(() => String, { nullable: true })
  ekPub?: string;

  @Field(() => String, { nullable: true })
  usedOpk?: string | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
