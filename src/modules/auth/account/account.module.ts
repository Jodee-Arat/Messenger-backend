import { Module } from "@nestjs/common";

import { SessionModule } from "../session/session.module";

import { AccountResolver } from "./account.resolver";
import { AccountService } from "./account.service";

@Module({
  imports: [SessionModule],
  providers: [AccountResolver, AccountService]
})
export class AccountModule {}
