import { Field, ID, ObjectType } from "@nestjs/graphql";

import { type User } from "@/prisma/generated";

@ObjectType()
export class UserModel implements User {
  @Field(() => ID)
  public id: string;

  @Field(() => String)
  public email: string;

  @Field(() => String)
  public password: string;

  @Field(() => String)
  public username: string;

  @Field(() => String, { nullable: true })
  public bio: string | null;

  @Field(() => String, { nullable: true })
  public avatarUrl: string | null;

  @Field(() => String, { nullable: true })
  public totpSecret: string | null;

  @Field(() => Boolean)
  public isTotpEnabled: boolean;

  @Field(() => Boolean)
  public isDeactivated: boolean;

  @Field(() => Date, { nullable: true })
  public deactivatedAt: Date;

  @Field(() => Date)
  public createdAt: Date;

  @Field(() => Date)
  public updatedAt: Date;
}
