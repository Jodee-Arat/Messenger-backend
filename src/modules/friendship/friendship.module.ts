import { Module } from "@nestjs/common";

import { SessionModule } from "../auth/session/session.module";

import { FriendshipResolver } from "./friendship.resolver";
import { FriendshipService } from "./friendship.service";

@Module({
  imports: [SessionModule],
  providers: [FriendshipResolver, FriendshipService],
  exports: [FriendshipService]
})
export class FriendshipModule {}
