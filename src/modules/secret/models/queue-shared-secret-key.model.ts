import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

import { QueueSharedSecretKey } from "@prisma/client";

@ObjectType()
export class QueueSharedSecretKeyModel implements QueueSharedSecretKey {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  groupId: string;

  @Field(() => String)
  chatId: string;

  @Field(() => String)
  fromUserId: string;

  @Field(() => String)
  toUserId: string;

  @Field(() => String, { nullable: true })
  fromSessionId: string | null;

  @Field(() => String, { nullable: true })
  toSessionId: string | null;

  @Field(() => String)
  keyKind: string;

  @Field(() => String, { nullable: true })
  senderKeyId: string | null;

  @Field(() => Int, { nullable: true })
  senderKeyEpoch: number | null;

  @Field(() => String)
  ikPub: string;

  @Field(() => String)
  ekPub: string;

  @Field(() => String, { nullable: true })
  usedOpk: string | null;

  @Field(() => String)
  ukm: string;

  @Field(() => String)
  iv: string;

  @Field(() => String)
  encryptedKey: string;

  @Field(() => String)
  sig: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
