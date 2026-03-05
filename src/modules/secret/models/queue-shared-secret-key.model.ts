import { Field, ID, ObjectType } from "@nestjs/graphql";

import { QueueSharedSecretKey } from "@/prisma/generated";

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
