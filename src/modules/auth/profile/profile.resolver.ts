import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { GraphQLUpload, Upload } from "graphql-upload";

import { User } from "@/prisma/generated";
import { Authorization } from "@/src/shared/decorators/auth/auth.decorator";
import { Authorized } from "@/src/shared/decorators/auth/authorized.decorator";
import { FileValidationPipe } from "@/src/shared/pipes/file-validation.pipe";

import { ChangeProfileInfoInput } from "./inputs/change-profile-info.input";
import { ProfileService } from "./profile.service";

@Resolver("Profile")
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Authorization()
  @Mutation(() => String, { name: "changeProfileAvatar" })
  public async changeAvatar(
    @Authorized() user: User,
    @Args("avatar", { type: () => GraphQLUpload }, FileValidationPipe)
    avatar: Upload
  ) {
    return this.profileService.changeAvatar(user, avatar);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "removeProfileAvatar" })
  public async removeAvatar(@Authorized() user: User) {
    return this.profileService.removeAvatar(user);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: "changeProfileInfo" })
  public async changeProfileInfo(
    @Authorized() user: User,
    @Args("data") input: ChangeProfileInfoInput
  ) {
    return this.profileService.changeInfo(user, input);
  }
}
