import {
  ChainId,
  ChainType,
  reverseKeySelect,
  ChainAddressPattern,
  DynamicChain,
} from '..'

export const getChainTypeById = (chainId?: ChainId) => {
  if (!chainId) return undefined
  const key = reverseKeySelect(ChainId, chainId)

  if (key === ChainType.SOL) return ChainType.SOL
  return ChainType.EVM
}

export const getChainTypeByAddress = (address?: string) => {
  if (!address) return undefined

  for (const chainType in ChainAddressPattern) {
    const pattern = new RegExp(ChainAddressPattern[chainType as ChainType])
    if (pattern.test(address)) return chainType as ChainType
  }

  return undefined
}

export const getChainIdByDynamicChainRes = (
  chain: string | number | undefined
): ChainId | undefined => {
  if (!chain) return undefined
  if (typeof chain === 'number') return chain as ChainId
  else if (chain === DynamicChain.SOL) return ChainId.SOL

  return undefined
}
