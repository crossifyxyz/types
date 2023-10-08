import {
  Chain,
  ChainType,
  EVMUser,
  ExtendedEVMChain,
  ExtendedSolanaChain,
  User,
} from '..'

export const isEVMUser = (user: User): user is EVMUser =>
  user.chainType === ChainType.EVM

export const isEVMChain = (chain: Chain): chain is ExtendedEVMChain =>
  chain.chainType === ChainType.EVM

export const isSOLChain = (chain: Chain): chain is ExtendedSolanaChain =>
  chain.chainType === ChainType.SOL
