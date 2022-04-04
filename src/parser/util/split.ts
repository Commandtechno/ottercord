export function splitAt(str: string, index: number): [string, string] {
  return [str.slice(0, index), str.slice(index + 1)];
}

export function splitAll(str: string, seperators: string[]) {
  const last = seperators.pop();
  for (const seperator of seperators) str = str.replaceAll(seperator, last);
  return str.split(last);
}

export function firstSplit(str: string, separator: string) {
  const index = str.indexOf(separator);
  if (index < 0) return [str];
  return splitAt(str, index);
}

export function lastSplit(str: string, separator: string) {
  const index = str.lastIndexOf(separator);
  if (index < 0) return [str];
  return splitAt(str, index);
}