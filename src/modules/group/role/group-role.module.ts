import { Module } from "@nestjs/common";

import { SessionModule } from "../../auth/session/session.module";

import { GroupRoleResolver } from "./group-role.resolver";
import { GroupRoleService } from "./group-role.service";

@Module({
  imports: [SessionModule],
  providers: [GroupRoleResolver, GroupRoleService],
  exports: [GroupRoleService]
})
export class GroupRoleModule {}
