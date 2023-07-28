import { Chain, Token } from '.'

export enum CompType {
  ASK = 'Ask',
  APPROVE = 'Approve',
  PAY = 'Pay',
  SWAP = 'Swap',
  CREATE = 'Create',
  EDIT = 'Edit',
}

export enum Side {
  FROM = 'from',
  TO = 'to',
}

export enum ReceiveType {
  PAYMENT = 'Payment',
  PRODUCT = 'Product',
  DONATION = 'Donation',
}

export enum ShareType {
  RECEIPT = 'Receipt',
  PAYMENT = 'Payment',
}

export type InitialChain = Chain | { id: number; name: string }

export type InitialToken = Token | undefined
