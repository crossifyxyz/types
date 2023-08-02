import { Connection as LifiConnection } from '@lifi/types'

export type Connection = LifiConnection

//=================REQUEST/RESPONSE=================
// REQUESTS
export type ConnectionsRequest = {
  fromChain?: number
  fromToken?: string
  toChain?: number
  toToken?: string
}

// RESPONSES
export type ConnectionsResponse = Connection[]
