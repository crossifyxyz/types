export const isZeroAddress = (address?: string): boolean => {
  if (!address) return true
  if (address === '0x0000000000000000000000000000000000000000') return true
  if (address === '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE') return true
  return false
}
