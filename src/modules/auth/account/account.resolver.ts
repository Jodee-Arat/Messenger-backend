import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { Authorization } from "@/src/shared/decorators/auth.decorator";
import { Authorized } from "@/src/shared/decorators/authorized.decorator";

import { AccountService } from "./account.service";
import { createUserWEmail } from "./inputs/create-user-with-email.input";
import { UserModel } from "./models/user.model";

@Resolver("Account")
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation(() => Boolean, { name: "createUserWEmail" })
  public async create(@Args("data") input: createUserWEmail) {
    return await this.accountService.create(input);
  }

  @Authorization()
  @Query(() => UserModel, { name: "findProfile" })
  public async me(@Authorized("id") id: string) {
    return await this.accountService.me(id);
  }
}
