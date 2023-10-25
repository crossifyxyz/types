import {
  Token,
  TransactionType,
  SterilRoute,
  Currency,
  ChainId,
  TransactionScenario,
} from '.'

export type EthersTransactionRequest = {
  data: string
  to: string
  value: string
  from: string
  chainId: number
  gasPrice: string
  gasLimit: string
}

/**
 * @value { type: 'Buffer', data: number[] } serilized new Transaction via '@solana/web3.js'
 * @example use the returned value: Transaction.from(quote.transactionRequest.data)
 */
export type SolTransactionRequest = { type: 'Buffer'; data: number[] }

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
    fromAmount: string
    toAmount?: string
    executionDuration: number
    fromAmountUSD: number
    toAmountUSD?: number
    gasCost: {
      amountUSD: number
    }
  }
}

export type QuoteLifiRoute = QuoteBase & {
  transactionType: TransactionType.LIFI_ROUTE
  transactionRequest: SterilRoute
}

export type QuoteLifiQuote = QuoteBase & {
  transactionType: TransactionType.LIFI_QUOTE
  transactionRequest: EthersTransactionRequest
  estimate: QuoteBase['estimate'] & { approvalAddress: string }
}

export type QuoteEVM = QuoteBase & {
  transactionType: TransactionType.EVM_NATIVE | TransactionType.ERC20
  transactionRequest: EthersTransactionRequest
}

export type QuoteSOL = QuoteBase & {
  transactionType: TransactionType.SOL_NATIVE | TransactionType.SPL
  transactionRequest: SolTransactionRequest
}

export type Quote = QuoteLifiRoute | QuoteLifiQuote | QuoteEVM | QuoteSOL

//===============REQUEST/RESPONSE=====================

export interface QuoteRequest {
  transactionScenario: TransactionScenario
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
