import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { Authorization } from "@/src/shared/decorators/auth.decorator";
import { Authorized } from "@/src/shared/decorators/authorized.decorator";

import { CryptoService } from "./crypto.service";
import { ExchangeKeysInput } from "./inputs/exchange-keys.input";
import { ExchangeKeysModel } from "./models/exchange-keys.model";

@Resolver("Crypto")
export class CryptoResolver {
  constructor(private readonly cryptoService: CryptoService) {}

  @Authorization()
  @Mutation(() => ExchangeKeysModel, { name: "exchangeKey" })
  public async exchangeKeys(
    @Authorized("id") userId: string,
    @Args("chatId") chatId: string,
    @Args("data") input: ExchangeKeysInput
  ) {
    return await this.cryptoService.exchangeKeys(userId, chatId, input);
  }
}
