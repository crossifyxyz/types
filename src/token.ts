export interface Token {
  address: string
  symbol: string
  decimals: number
  chainId: number
  name: string
  priceUSD?: string
  logoURI?: string
}

export type TokenRequest = { chainId?: number; tokenAddress?: string }

export type TokenResponse = Token

export type TokensResponse = Record<string, Token[]>
