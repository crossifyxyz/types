export interface FiatRate {
  base: string
  date: string
  rates: { [key: string]: number }
  success: boolean
  timestamp: number
}

export type FiatRateResponse = FiatRate
