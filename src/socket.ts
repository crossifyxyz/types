import { Payment, Receipt, Transaction } from './'

export enum SocketEmitType {
  // TX
  TxUpdate = 'TX_UPDATE',
  // RECEIPT
  ReceiptUpdate = 'RECEIPT_UPDATE',
  // PAYMENT
  PaymentOwnerUpdate = 'PAYMENT_OWNER_UPDATE',
  PaymentPageUpdate = 'PAYMENT_PAGE_UPDATE',
}

// Response

export type PaymentOwnerUpdateResponse = Partial<Payment>
export type PaymentPageUpdateResponse = Partial<Payment>

export type ReceiptUpdateResponse = Partial<Receipt>

export type TxUpdateResponse = Partial<Transaction>
