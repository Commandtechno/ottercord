export function splitAt(str: string, index: number) {
  return [str.slice(0, index), str.slice(index + 1)];
}

export function firstSplit(str: string, separator: string) {
  const index = str.indexOf(separator);
  if (index < 0) return [];

  return splitAt(str, index);
}

export function lastSplit(str: string, separator: string) {
  const index = str.indexOf(separator);
  if (index < 0) return [];

  return splitAt(str, index);
}