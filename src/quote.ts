import { Route } from '@lifi/types'
import { Token } from '.'
import { TransactionType } from './transaction'

export type QuoteRequest = {
  fromChain: number
  toChain: number
  fromToken: string
  toToken: string
  fromAmount: string
  fromAddress: string
  toAddress?: string
}

export type EthersTransactionRequest = {
  data: string
  to: string
  value: string
  from: string
  chainId: number
  gasPrice: string
  gasLimit: string
}

export type QuoteBase = {
  toolDetails: {
    key: string
    name: string
    logoURI: string
  }
  action: {
    fromChainId: number
    fromAmount: string
    fromToken: Token
    toChainId: number
    toToken: Token
    slippage: number
    toAddress?: string
    fromAddress: string
  }
  estimate: {
    executionDuration: number
    fromAmountUSD: number
    gasCost: {
      amountUSD: number
    }
  }
  transactionType: TransactionType
}

export type QuoteLifi = QuoteBase & {
  transactionType: TransactionType.LIFI
  route: Route
}

export type QuoteEVM = QuoteBase & {
  transactionType: Exclude<TransactionType, TransactionType.LIFI>
  transactionRequest: EthersTransactionRequest
}

export type Quote = QuoteLifi | QuoteEVM
