export interface ExchangeRate {
  base: string
  date: string
  rates: Record<string, number>
  success: boolean
  timestamp: number
}
