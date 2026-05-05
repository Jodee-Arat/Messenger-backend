import { Field, InputType } from "@nestjs/graphql";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";

import { PreKeyInput } from "./preKey.input";
import { SecretSessionPlatform } from "../models/secret-session-platform.enum";

@InputType()
export class RegisterSecretSessionInput {
  @Field(() => SecretSessionPlatform)
  @IsEnum(SecretSessionPlatform)
  platform: SecretSessionPlatform;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  deviceName?: string | null;

  @Field(() => PreKeyInput)
  @ValidateNested()
  publicPreKey: PreKeyInput;
}
