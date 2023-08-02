import { Tokens, FiatRate, Chain, ExtendedWagmiChain } from './'

export enum CacheType {
  CHAINS = 'CHAINS',
  TOKENS = 'TOKENS',
  FIAT_RATE = 'FIAT_RATE',
}

export interface CacheBase {
  type: CacheType
  updatedAt: number
}

export interface ChainsCache extends CacheBase {
  type: CacheType.CHAINS
  data: {
    crossify: Chain[]
    wagmi: ExtendedWagmiChain[]
  }
}

export interface TokensCache extends CacheBase {
  type: CacheType.TOKENS
  data: Tokens
}

export interface FiatRateCache extends CacheBase {
  type: CacheType.FIAT_RATE
  data: FiatRate
}

export type Cache = TokensCache | FiatRateCache
