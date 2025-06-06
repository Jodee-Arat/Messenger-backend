import { Global, Module } from "@nestjs/common";

import { CryptoResolver } from "./crypto.resolver";
import { CryptoService } from "./crypto.service";

@Global()
@Module({
  providers: [CryptoService, CryptoResolver],
  exports: [CryptoService]
})
export class CryptoModule {}
