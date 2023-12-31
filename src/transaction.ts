import type { PagedList, SterilRoute } from '.'

export enum TransactionType {
  LIFI_ROUTE = 'LIFI_ROUTE',
  LIFI_QUOTE = 'LIFI_QUOTE',
  EVM_NATIVE = 'EVM_NATIVE',
  SOL_NATIVE = 'SOL_NATIVE',
  ERC20 = 'ERC20',
  SPL = 'SPL',
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
  retry?: boolean | string
}
// RESPONSES
export type TransactionResponse = Transaction

export type PagedTransactionResponse = PagedList<TransactionResponse>
