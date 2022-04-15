export function splitAt(str: string, index: number) {
  if (index < 0) return [str];
  return [str.slice(0, index), str.slice(index + 1)];
}

export function splitAll(str: string, seperators: string[]) {
  const last = seperators.pop();
  for (const seperator of seperators) str = str.replaceAll(seperator, last);
  return str.split(last);
}

export function splitFirst(str: string, separator: string) {
  const index = str.indexOf(separator);
  return splitAt(str, index);
}

export function splitLast(str: string, separator: string) {
  const index = str.lastIndexOf(separator);
  return splitAt(str, index);
}