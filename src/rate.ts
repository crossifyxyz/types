export interface FiatRate {
  base: string
  date: string
  rates: Record<string, number>
  success: boolean
  timestamp: number
}

export type FiatRateResponse = FiatRate
