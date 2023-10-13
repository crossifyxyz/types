import { AddressZero } from '../base'

export const isZeroAddress = (address?: string): boolean => {
  if (!address) return true
  if ((Object.values(AddressZero) as string[]).includes(address)) return true
  return false
}
