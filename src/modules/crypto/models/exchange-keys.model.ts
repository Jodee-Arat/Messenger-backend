import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ExchangeKeysModel {
  @Field(() => String)
  publicKeyE: string;

  @Field(() => String)
  publicKeyN: string;

  @Field(() => String)
  openKeyServerDiffie: string;
}
