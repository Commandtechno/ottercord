export const forceLower = new Set();
export const forceUpper = new Set(["ID"]);

export function formalize(word: string) {
  if (forceLower.has(word.toLowerCase())) return word.toLowerCase();
  if (forceUpper.has(word.toUpperCase())) return word.toUpperCase();
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function getWords(parts: string[]) {
  const words: string[] = [];
  for (const part of parts) words.push(...part.split(/[^a-zA-Z0-9]+/));
  return words;
}

export function camelCase(...parts: string[]) {
  const words = getWords(parts);
  const rendered = [words.shift().toLowerCase(), ...words.map(word => formalize(word))].join("");
  return rendered.length > 1 ? rendered : parts.join("");
}

export function pascalCase(...parts: string[]) {
  const words = getWords(parts);
  const rendered = words.map(word => formalize(word)).join("");
  return rendered.length > 1 ? rendered : parts.join("");
}