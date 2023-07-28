import { Connection as LifiConnection } from '@lifi/types'

export type ConnectionsRequest = {
  fromChain?: number
  fromToken?: string
  toChain?: number
  toToken?: string
}

export type Connection = LifiConnection

export type ConnectionsResponse = Connection[]
