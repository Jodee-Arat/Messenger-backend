import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TotpSetupModel {
  @Field(() => String)
  totpSecret: string;

  @Field(() => String)
  qrCodeUrl: string;
}
