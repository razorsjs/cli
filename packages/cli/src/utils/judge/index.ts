export function isUndef (v: any): boolean {
  return v === undefined || v === null
}

export function isDef (v: any): boolean {
  return v !== undefined && v !== null
}

export function isFunction (v: any): boolean {
  return typeof v === 'function'
}

