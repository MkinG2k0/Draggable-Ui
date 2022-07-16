export const cut = <T>(array: T[], length: number) => {
  if (!array) return []
  if (!length) length = array.length
  return array.slice(0, length)
}

export const last = <T>(array: T[]): T | undefined => {
  if (!array) return undefined
  return array[array.length]
}
