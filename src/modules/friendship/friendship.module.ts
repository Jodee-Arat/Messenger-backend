import { Module } from "@nestjs/common";

import { SessionModule } from "@/src/modules/auth/session/session.module";

import { FriendshipResolver } from "./friendship.resolver";
import { FriendshipService } from "./friendship.service";

@Module({
  imports: [SessionModule],
  providers: [FriendshipResolver, FriendshipService]
})
export class FriendshipModule {}
