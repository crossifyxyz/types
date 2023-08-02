import { ChainId, CoinKey } from '.'

export interface BaseToken {
  chainId: ChainId
  address: string
}
export interface StaticToken extends BaseToken {
  symbol: string
  decimals: number
  name: string
  coinKey?: CoinKey
  logoURI?: string
}
export interface Token extends StaticToken {
  priceUSD: string
}
export interface TokenAmount extends Token {
  amount: string
  amountUSD?: string
  blockNumber?: number
}

export type Tokens = Record<number, Token[]>

//=================REQUEST/RESPONSE=================
// REQUESTS
export type TokenRequest = { chainId?: number; tokenAddress?: string }

// RESPONSES
export type TokenResponse = Token

export type TokensResponse = Tokens
