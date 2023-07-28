import type { ExtendedChain } from '@lifi/types'

export type Chain = ExtendedChain

export type ChainMeta = {
  name: string
  iconUrl: string
  blockExplorer: { name: string; url: string }
}

export type Chains = Chain[]

export type ChainsResponse = Chains
