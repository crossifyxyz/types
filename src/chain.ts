import type { ChainKey, CoinKey, Token } from '.'

export enum ChainType {
  EVM = 'EVM',
  Solana = 'SOLANA',
}

export interface ChainBase {
  key: ChainKey
  chainType: ChainType
  name: string
  coin: CoinKey
  id: number
  mainnet: boolean
  logoURI?: string
  faucetUrls?: string[]
}

export interface SolanaChain extends ChainBase {
  chainType: ChainType.Solana
}

export interface EVMChain extends ChainBase {
  chainType: ChainType.EVM
  tokenlistUrl?: string
  metamask: AddEthereumChainParameter
  multicallAddress?: string
}
export interface AddEthereumChainParameter {
  chainId: string
  blockExplorerUrls: string[]
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string[]
}

export type PreExtendChain = EVMChain | SolanaChain

export type ExtendedChain = PreExtendChain & {
  nativeToken: Token
}

export interface ExtendedEVMChain extends EVMChain {
  nativeToken: Token
}

export interface ExtendedSolanaChain extends SolanaChain {
  nativeToken: Token
}

export type Chain = ExtendedChain

export type ChainMeta = {
  name: string
  iconUrl: string
  blockExplorer: { name: string; url: string }
}

export type Chains = Chain[]

export type ChainsResponse = Chains
