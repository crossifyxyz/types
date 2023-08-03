import { Contract, RainbowKitChain, WagmiChain } from '../chain'

type SterilContract = Omit<Contract, 'address'> & {
  address: string
}

type SterilContracts = {
  ensRegistry?: SterilContract
  ensUniversalResolver?: SterilContract
  multicall3?: SterilContract
}

interface SterilWagmiChain extends Omit<WagmiChain, 'contracts'> {
  contracts?: SterilContracts
}

export interface SterilExtendedWagmiChain
  extends SterilWagmiChain,
    RainbowKitChain {}
