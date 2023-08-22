import { Token, TransactionType, SterilRoute, Currency } from '.'

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
    toAmountUSD?: number
    gasCost: {
      amountUSD: number
    }
  }
}

export type QuoteLifi = QuoteBase & {
  transactionType: TransactionType.LIFI
  route: SterilRoute
  transactionRequest?: undefined
}

export type QuoteEVM = QuoteBase & {
  transactionType:
    | TransactionType.APPROVE
    | TransactionType.ERC20
    | TransactionType.NATIVE // You might need to adjust this based on your TransactionType definition
  transactionRequest: EthersTransactionRequest
  route?: undefined
}

export type Quote = QuoteLifi | QuoteEVM

//===============REQUEST/RESPONSE=====================

// REQUEST
export interface BaseQuoteRequest {
  fromChain: number
  toChain: number
  fromToken: string
  toToken: string
  fromAddress: string
  toAddress?: string
}

export interface CurrencyQuoteRequest extends BaseQuoteRequest {
  currency: Currency
}
export interface ParsedAmountQuoteRequest extends BaseQuoteRequest {
  fromAmount: string
}

export type QuoteRequest = CurrencyQuoteRequest | ParsedAmountQuoteRequest

// RESPONSE
export type QuoteResponse = Quote
