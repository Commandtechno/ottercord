export function isPartial(text: string) {
  return text.toLowerCase().includes("partial");
}

export function isArray(text: string) {
  return text.toLowerCase().includes("array of") || text.toLowerCase().includes("list of");
}

export function isDeprecated(text: string) {
  return text.toLowerCase().includes("(deprecated)") || text.toLowerCase().includes("*deprecated*");
}