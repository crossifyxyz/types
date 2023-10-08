import { Token, TransactionType, SterilRoute, Currency, ChainId } from '.'

export type EthersTransactionRequest = {
  data: string
  to: string
  value: string
  from: string
  chainId: number
  gasPrice: string
  gasLimit: string
}

export type SolTransactionRequest = any

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
  transactionType: TransactionType.EVM_NATIVE | TransactionType.ERC20
  transactionRequest: EthersTransactionRequest
  route?: undefined
}

export type QuoteSOL = QuoteBase & {
  transactionType: TransactionType.SOL_NATIVE | TransactionType.SPL
  transactionRequest: SolTransactionRequest
  route?: undefined
}

export type Quote = QuoteLifi | QuoteEVM | QuoteSOL

//===============REQUEST/RESPONSE=====================

export interface QuoteRequest {
  fromChain: ChainId
  toChain: ChainId
  fromToken: string
  toToken: string
  fromAddress: string
  toAddress?: string
  currency: Currency
}

// RESPONSE
export type QuoteResponse = Quote
