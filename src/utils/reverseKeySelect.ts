// Overload signatures
type TExtender = Record<string | number, string | number>
export function reverseKeySelect<T extends TExtender>(
  obj: T,
  returnFull: true
): Record<T[keyof T], keyof T>

export function reverseKeySelect<T extends TExtender>(
  obj: T,
  value: string | number
): keyof T

// Implementation
export function reverseKeySelect<T extends TExtender>(
  obj: T,
  valueOrReturnFull: string | number | true
): Record<T[keyof T], keyof T> | keyof T | undefined {
  const flippedObj = Object.fromEntries(
    Object.entries(obj).map(([key, val]) => [val, key])
  ) as Record<string | number, keyof T>

  if (valueOrReturnFull === true) {
    return flippedObj
  }

  const key = flippedObj[valueOrReturnFull]
  return key
}
