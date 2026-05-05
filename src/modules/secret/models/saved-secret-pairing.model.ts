import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SavedSecretPairingModel {
  @Field(() => String)
  pairingId: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  chatId: string;

  @Field(() => String)
  webSecretSessionId: string;

  @Field(() => String, { nullable: true })
  mobileSecretSessionId?: string | null;

  @Field(() => String)
  challenge: string;

  @Field(() => String)
  safetyCode: string;

  @Field(() => String, { nullable: true })
  qrPayload?: string | null;

  @Field(() => String, { nullable: true })
  qrCodeUrl?: string | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  expiresAt: Date;

  @Field(() => Date, { nullable: true })
  confirmedAt?: Date | null;
}
