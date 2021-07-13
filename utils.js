export const defaultEquals = (a, b) => a === b

export const compare = {
  LESS_THAN: -1,
  EQUALS: 0,
  BIGGER_THAN: 1,
}
export const defaultCompare = (a, b) => {
  if (a === b) {
    return compare.EQUALS
  } else {
    return a < b ? compare.LESS_THAN : compare.BIGGER_THAN
  }
}
export function toDefaultString(item) {
  if (item === null || item === undefined) {
    return String(item).toUpperCase()
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`
  }

  return item.toString()
}
