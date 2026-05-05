import { Field, ObjectType } from "@nestjs/graphql";

import { SecretSessionPlatform } from "./secret-session-platform.enum";

@ObjectType()
export class SecretSessionPublicPreKeyModel {
  @Field(() => String)
  ikPub: string;

  @Field(() => String)
  spkPub: string;

  @Field(() => String)
  spkSig: string;

  @Field(() => [String])
  opkPubs: string[];

  @Field(() => Number)
  indexOpkPub: number;
}

@ObjectType()
export class SecretSessionModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => SecretSessionPlatform)
  platform: SecretSessionPlatform;

  @Field(() => String, { nullable: true })
  deviceName?: string | null;

  @Field(() => SecretSessionPublicPreKeyModel)
  publicPreKey: SecretSessionPublicPreKeyModel;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  expiresAt: Date;

  @Field(() => Date, { nullable: true })
  revokedAt?: Date | null;
}
