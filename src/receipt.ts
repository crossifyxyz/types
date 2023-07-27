import type {
  PagedList,
  Token,
  TransactionScenario,
  TransactionStatus,
  TransactionType,
} from './'
import { LifiRouteRecord } from './lifi'

export interface Receipt {
  // Identifiers
  uid: string
  paymentId: string
  txHash: string
  // Chain Data
  fromChainId: number
  toChainId: number
  fromAddress: string
  toAddress: string
  fromTokenAddress: string
  toTokenAddress: string
  status: TransactionStatus
  // Identifiers
  senderFiat?: string // Seller uses TRY ( expects to get TRY Total )
  receiverFiat?: string // Buyer uses EUR ( expects to get EUR Total )
  // Price Data
  fromTokenAmount: number
  toTokenAmount: number
  amountUSD: number
  amountSenderFiat?: number // Ex ( 19 )
  amountReceiverFiat?: number // Ex ( 1 )
  // Fee Data
  percentagePlatformFee: number // Precent Value ( Ex. 0.5 )
  gasFeeUSD: number // USD Gas Value  ( Ex. 1 )
  gasFeeSenderFiat?: number // USD Gas Value  ( Ex. 1 )
  // Payment Props
  fields?: {
    title?: string
    name?: string
    email?: string
    shippingAddress?: string
    billingAddress?: string
    country?: string
    quantity?: number
  }
  // Date
  date: number
}

export interface ReceiptPostRequest
  // eslint-disable-next-line prettier/prettier
  extends Omit<
    Receipt,
    | 'uid'
    | 'date'
    | 'status'
    | 'toAddress'
    | 'fromAddress'
    | 'receiverFiat'
    | 'toTokenAddress'
    | 'toChainId'
  > {
  txScenario: TransactionScenario
  txType: TransactionType
  route?: LifiRouteRecord
}

export type ReceiptUpdateRequest = Partial<ReceiptPostRequest>

export interface ReceiptResponse extends Receipt {
  toToken: Token
  fromToken: Token
}

export type PagedReceiptResponse = PagedList<ReceiptResponse>
