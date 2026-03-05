import { Module } from "@nestjs/common";

import { SessionModule } from "../session/session.module";

import { ProfileResolver } from "./profile.resolver";
import { ProfileService } from "./profile.service";

@Module({
  imports: [SessionModule],
  providers: [ProfileResolver, ProfileService]
})
export class ProfileModule {}
