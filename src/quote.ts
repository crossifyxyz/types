import { Token, TransactionType, SterilRoute } from '.'

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

export type QuoteResponse = Quote
