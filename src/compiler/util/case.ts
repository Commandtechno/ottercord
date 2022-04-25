export function formalize(word: string) {
  if (word.length === 1) return word;
  // if (word !== word.toLowerCase() && word !== word.toUpperCase()) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function getWords(parts: string[]) {
  const words: string[] = [];
  for (const part of parts) words.push(...part.split(/[^a-zA-Z0-9]+/));
  return words;
}

export function camelCase(...parts: string[]) {
  const words = getWords(parts);
  return [words.shift().toLowerCase(), ...words.map(word => formalize(word))].join("");
}

export function pascalCase(...parts: string[]) {
  const words = getWords(parts);
  return words.map(word => formalize(word)).join("");
}