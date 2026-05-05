import { Field, ObjectType } from "@nestjs/graphql";

import { SecretSessionPlatform } from "./secret-session-platform.enum";

@ObjectType()
export class SecretSessionPreKeyModel {
  @Field(() => String)
  secretSessionId: string;

  @Field(() => String)
  userId: string;

  @Field(() => SecretSessionPlatform)
  platform: SecretSessionPlatform;

  @Field(() => String, { nullable: true })
  deviceName?: string | null;

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
