export function isPartial(text: string) {
  return text.toLowerCase().includes("partial");
}

export function isArray(text: string) {
  return (
    text.toLowerCase().includes("array") || text.toLowerCase().includes("list")
  );
}

export function isDeprecated(text: string) {
  return (
    text.toLowerCase().includes("(deprecated)") ||
    text.toLowerCase().includes("*deprecated*")
  );
}