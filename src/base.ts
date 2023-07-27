export interface Token {
  address: string
  symbol: string
  decimals: number
  chainId: number
  name: string
  priceUSD?: string
  logoURI?: string
}
