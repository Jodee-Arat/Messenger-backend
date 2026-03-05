import { Module } from "@nestjs/common";

import { SessionModule } from "../auth/session/session.module";

import { GroupResolver } from "./group.resolver";
import { GroupService } from "./group.service";
import { GroupRoleModule } from "./role/group-role.module";

@Module({
  imports: [SessionModule, GroupRoleModule],
  providers: [GroupResolver, GroupService],
  exports: [GroupService]
})
export class GroupModule {}
