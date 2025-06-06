import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class ExchangeKeysInput {
  @Field(() => String)
  @IsNotEmpty()
  public publicKeyE: string;

  @Field(() => String)
  @IsNotEmpty()
  public publicKeyN: string;

  @Field(() => String)
  @IsNotEmpty()
  public publicKeyG: string;

  @Field(() => String)
  @IsNotEmpty()
  public publicKeyP: string;

  @Field(() => String)
  @IsNotEmpty()
  public publicKeyDiffie: string;
}
