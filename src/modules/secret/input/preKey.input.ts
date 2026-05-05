import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

@InputType()
export class PreKeyInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public ikPub: string;
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public spkPub: string;
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public spkSig: string;
  @Field(() => [String])
  @IsArray()
  public opkPubs: string[];

  @Field(() => Number, { nullable: true })
  @IsNumber()
  @IsOptional()
  public indexOpkPub?: number | null;
}
