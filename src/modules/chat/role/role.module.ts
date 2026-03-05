import { Module } from "@nestjs/common";

import { SessionModule } from "@/src/modules/auth/session/session.module";

import { RoleResolver } from "./role.resolver";
import { RoleService } from "./role.service";

@Module({
  imports: [SessionModule],
  providers: [RoleResolver, RoleService],
  exports: [RoleService]
})
export class RoleModule {}
