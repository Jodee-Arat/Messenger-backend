import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { Authorization } from "../../../shared/decorators/auth/auth.decorator";
import { Authorized } from "../../../shared/decorators/auth/authorized.decorator";

import { FiltersInput } from "../../inputs/filters.input";

import { AccountService } from "./account.service";
import { CreateUserWEmailInput } from "./inputs/create-user-with-email.input";
import { TotpSetupModel } from "./models/totp-setup.model";
import { UserModel } from "./models/user.model";

@Resolver("Account")
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation(() => Boolean, { name: "createUserWEmail" })
  public async create(@Args("data") input: CreateUserWEmailInput) {
    return await this.accountService.create(input);
  }

  @Authorization()
  @Mutation(() => TotpSetupModel, { name: "generateTotpSecret" })
  public async generateTotpSecret(@Authorized("id") userId: string) {
    return await this.accountService.generateTotpSecret(userId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "enableTotp" })
  public async enableTotp(
    @Authorized("id") userId: string,
    @Args("token") token: string
  ) {
    return await this.accountService.enableTotp(userId, token);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "disableTotp" })
  public async disableTotp(
    @Authorized("id") userId: string,
    @Args("token") token: string
  ) {
    return await this.accountService.disableTotp(userId, token);
  }

  @Authorization()
  @Query(() => UserModel, { name: "findProfile" })
  public async me(@Authorized("id") id: string) {
    return await this.accountService.me(id);
  }

  @Authorization()
  @Query(() => [UserModel], { name: "findAllUsers" })
  public async findAllUsers(
    @Authorized("id") userId: string,
    @Args("filters", { nullable: true }) input?: FiltersInput
  ) {
    return await this.accountService.findAllUsers(userId, input);
  }
}
