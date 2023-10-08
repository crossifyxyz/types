export * from './wagmi'
export * from './dynamic'
export * from './constants'
import type {
  ChainId,
  ChainKey,
  ChainType,
  CoinKey,
  DynamicEvmNetwork,
  ExtendedWagmiChain,
  Token,
} from '..'
import { SterilExtendedWagmiChain } from '../sterilize'

export interface ChainBase {
  key: ChainKey
  chainType: ChainType
  name: string
  coin: CoinKey
  id: ChainId
  mainnet: boolean
  logoURI?: string
  faucetUrls?: string[]
}

//==========EVM===========
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

export interface ExtendedEVMChain extends EVMChain {
  nativeToken: Token
}

//==========SOLANA===========
export interface SolanaChain extends ChainBase {
  chainType: ChainType.SOL
  rpcUrls: string[]
}

export interface ExtendedSolanaChain extends SolanaChain {
  nativeToken: Token
}

//==========RESULT===========
export type Chain = ExtendedEVMChain | ExtendedSolanaChain

export type ChainMeta = {
  name: string
  iconUrl: string
  blockExplorer: { name: string; url: string }
}

//=================REQUEST/RESPONSE=================
// RESPONSE
export interface SterilChainsResponse {
  crossify: Chain[]
  wagmi: SterilExtendedWagmiChain[]
  dynamic: DynamicEvmNetwork[]
}

export interface ChainsResponse {
  crossify: Chain[]
  wagmi: ExtendedWagmiChain[]
  dynamic: DynamicEvmNetwork[]
}
