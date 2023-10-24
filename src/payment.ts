import type { Currency, PagedList, Token } from '.'

// OPTIONS
export enum PaymentType {
  SINGLE = 'SINGLE',
  MULTIPLE = 'MULTIPLE',
}

export enum PaymentStatus {
  AWAITING = 'AWAITING',
  OPEN = 'OPEN',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
  DELETED = 'DELETED',
}

// DATA TYPES
export interface Payment {
  uid: string
  creatorAddress: string
  type: PaymentType
  advanced: boolean
  title?: string
  imageURL?: string
  status: PaymentStatus
  // Price Data
  currency: Currency
  // Tx Data
  chainId: number
  tokenAddress: string
  receiverAddress?: string
  // Require Payment Props
  fields?: {
    name?: boolean
    email?: boolean
    shippingAddress?: boolean
    billingAddress?: boolean
    country?: boolean
    quantity?: {
      isEnabled: boolean
      min?: number
      max?: number
    }
  }
  // Analytics
  visitCount?: number
  // Date
  date: number
}

//=================REQUEST/RESPONSE=================

// REQUESTS
export type PaymentPostRequest = Omit<
  Payment,
  'status' | 'uid' | 'date' | 'creatorAddress' | 'visitCount'
>

export interface PaymentUpdateRequest extends Partial<PaymentPostRequest> {
  status?: PaymentStatus
}

// RESPONSES

export interface PaymentResponse extends Payment {
  token: Token
}

export type PagedPaymentResponse = PagedList<PaymentResponse>
