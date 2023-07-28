import type { PagedList, Token } from './'

// OPTIONS
export enum PaymentType {
  POS = 'POS',
  PRODUCT = 'PRODUCT',
  DONATION = 'DONATION',
}

export enum PaymentStatus {
  AWAITING = 'AWAITING',
  OPEN = 'OPEN',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
  DELETED = 'DELETED',
}

export enum PaymentCurrency {
  FIAT = 'FIAT',
  TOKEN = 'TOKEN',
}

// DATA TYPES
export interface Payment {
  uid: string
  creatorAddress: string
  type: PaymentType
  title?: string
  imageURL?: string
  status: PaymentStatus
  // Price Data
  currency: {
    currencyType: PaymentCurrency
    fiat?: string // Ex. USD / TRY
    amount: number // Raw Amount (Ex. 1.5)
  }
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

export type PagedPaymentResponse = PagedList<Payment>
