export const getArr = (length: number): undefined[] => Array.from({ length })

export const getArrNumber = (length: number): number[] =>
  Array.from({ length }).map((_, i) => i)

export function cutText(text: string, length = 30) {
  if (text?.length > length) return text.slice(0, length - 4) + ' ...'
  else return text
}

export const validObj = (obj: Record<string, unknown>) => {
  return Object.keys(obj).length > 0
}

export const getRand = (min = 30, max = 100) =>
  Math.floor(Math.random() * (max - min) + min)

export const mergeRefs = (...refs) => {
  const filteredRefs = refs.filter(Boolean)
  if (!filteredRefs.length) return null
  if (filteredRefs.length === 1) return filteredRefs[0]

  return (inst) => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(inst)
      } else if (ref) {
        ref.current = inst
      }
    }
  }
}

export const setDate = (date: Date) =>
  date.toLocaleDateString().split('.').reverse().join('-')

export const cn = (
  obgClass: Record<string, unknown>,
  ...className: string[]
) => {
  const result = [...className]
  for (const res of Object.entries(obgClass)) {
    if (res[1]) result.push(res[0])
  }
  return result.join(' ')
}
