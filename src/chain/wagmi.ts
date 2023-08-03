type Address = `0x${string}`
type BlockExplorer = {
  name: string
  url: string
}
export type WagmiChain = {
  /** ID in number form */
  id: number
  /** Human-readable name */
  name: string
  /** Internal network name */
  network: string
  /** Currency used by chain */
  nativeCurrency: NativeCurrency
  /** Collection of RPC endpoints */
  rpcUrls: {
    [key: string]: RpcUrls
    default: RpcUrls
    public: RpcUrls
  }
  /** Collection of block explorers */
  blockExplorers?: {
    [key: string]: BlockExplorer
    default: BlockExplorer
  }
  /** Collection of contracts */
  contracts?: {
    ensRegistry?: Contract
    ensUniversalResolver?: Contract
    multicall3?: Contract
  }
  /** Flag for test networks */
  testnet?: boolean
}
export type Contract = {
  address: Address
  blockCreated?: number
}
type NativeCurrency = {
  name: string
  /** 2-6 characters long */
  symbol: string
  decimals: number
}
type RpcUrls = {
  http: readonly string[]
  webSocket?: readonly string[]
}

export interface RainbowKitChain {
  id: number
  iconUrl?: string | null
  iconBackground?: string
}

export interface ExtendedWagmiChain extends WagmiChain, RainbowKitChain {}
