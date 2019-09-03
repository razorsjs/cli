export function isCommand(o: any) {
  return typeof o === 'object' && o.name
}
