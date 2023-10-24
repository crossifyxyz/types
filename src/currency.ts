export enum CurrencyType {
  FIAT = 'FIAT',
  TOKEN = 'TOKEN',
}

export interface CurrencyBase {
  currencyType: CurrencyType
  amount: string // Raw Amount (Ex. 1.5)
}

export interface CurrencyFiat extends CurrencyBase {
  currencyType: CurrencyType.FIAT
  fiat: string // Ex. USD / TRY
}

export interface CurrencyToken extends CurrencyBase {
  currencyType: CurrencyType.TOKEN
  fiat?: undefined
}

export type Currency = CurrencyFiat | CurrencyToken
