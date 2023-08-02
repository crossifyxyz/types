import type { PagedList, SterilRoute } from './'

export enum TransactionType {
  LIFI = 'LIFI',
  APPROVE = 'APPROVE',
  NATIVE = 'NATIVE',
  ERC20 = 'ERC20',
}

export enum TransactionScenario {
  APPROVE = 'APPROVE',
  SWAP = 'SWAP',
  PAY = 'PAY',
}

export enum TransactionStatus {
  FAILED = 'FAILED',
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
}

export interface Transaction {
  uid: string
  receiptId?: string
  date: number
  txHash: string
  chainId: number
  description?: string
  toDescription?: string
  status: TransactionStatus
  type: TransactionType
  scenario: TransactionScenario
  address: string
  toAddress?: string
  idle: boolean
  route?: SterilRoute
}

//=================REQUEST/RESPONSE=================
// REQUESTS
export type TransactionPostRequest = Omit<
  Transaction,
  'uid' | 'idle' | 'date' | 'status'
>

export interface CheckTransactionRequest {
  txHash: string
  chainId: number
  type: TransactionType
  receiptId?: string
  status?: TransactionStatus
}
// RESPONSES
export type TransactionResponse = Transaction

export type PagedTransactionResponse = PagedList<TransactionResponse>
