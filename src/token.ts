import { CoinKey } from '.'

export interface BaseToken {
  chainId: number
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

export interface Tokens {
  [key: string]: Token[]
}

//=================REQUEST/RESPONSE=================
// REQUESTS
export type TokenRequest = { chainId?: number; tokenAddress?: string }

// RESPONSES
export type TokenResponse = Token

export interface TokensResponse {
  [key: string]: Token[]
}
