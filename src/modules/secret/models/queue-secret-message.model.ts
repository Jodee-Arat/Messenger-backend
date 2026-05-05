import { Field, ID, ObjectType } from "@nestjs/graphql";

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
  fromSessionId?: string | null;

  @Field(() => [String])
  toSessionIds: string[];

  @Field(() => [String])
  checkedSessionIds: string[];

  @Field(() => String, { nullable: true })
  ukm?: string | null;

  @Field(() => String)
  iv: string;

  @Field(() => String)
  encryptedMessage: string;

  @Field(() => String)
  sig: string;

  @Field(() => [String])
  secretAttachmentIds: string[];

  @Field(() => String, { nullable: true })
  ikPub?: string | null;

  @Field(() => String, { nullable: true })
  ekPub?: string | null;

  @Field(() => String, { nullable: true })
  usedOpk?: string | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
