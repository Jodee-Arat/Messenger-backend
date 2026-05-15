import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";

import { Authorization } from "../../../shared/decorators/auth/auth.decorator";
import { UserAgent } from "../../../shared/decorators/user-agent.decorator";
import { GqlContext } from "../../../shared/types/gql-context.types";

import { LoginInput } from "./inputs/login.input";
import { AuthModel } from "./models/auth.model";
import { SessionModel } from "./models/session.model";
import { TokenResponseModel } from "./models/token.model";
import { SessionService } from "./session.service";

@Resolver("Session")
export class SessionResolver {
  constructor(private readonly sessionService: SessionService) {}

  @Authorization()
  @Query(() => [SessionModel], { name: "findSessionsByUser" })
  public async findSessionsByUser(@Context() { req }: GqlContext) {
    return await this.sessionService.findSessionsByUser(req);
  }

  @Authorization()
  @Query(() => SessionModel, { name: "findCurrentSession" })
  public async findCurrentSession(@Context() { req }: GqlContext) {
    return await this.sessionService.findCurrentSession(req);
  }

  @Mutation(() => AuthModel, { name: "loginUser" })
  public async loginUser(
    @Context() { req }: GqlContext,
    @Args("data") input: LoginInput,
    @UserAgent() userAgent: string
  ) {
    return await this.sessionService.loginUser(req, input, userAgent);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "logoutUser" })
  public async logoutUser(@Context() { req }: GqlContext) {
    return await this.sessionService.logoutUser(req);
  }

  @Mutation(() => Boolean, { name: "clearSessionCookie" })
  async clearSession(@Context() { req }: GqlContext) {
    return await this.sessionService.clearSession(req);
  }

  @Mutation(() => String)
  async refreshToken(@Args("data") refreshToken: string) {
    return this.sessionService.refreshToken(refreshToken);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "removeSession" })
  async removeSession(
    @Context() { req }: GqlContext,
    @Args("id") id: string
  ) {
    return await this.sessionService.removeSession(req, id);
  }
}
