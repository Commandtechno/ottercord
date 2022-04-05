export function formalize(word: string) {
  if (word.length < 2) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function camelCase(str: string) {
  const words = str.split(/[^a-zA-Z0-9]+/);
  return [
    words.shift().toLowerCase(),
    ...words.map(word => formalize(word))
  ].join("");
}

export function pascalCase(str: string) {
  const words = str.split(/[^a-zA-Z0-9]+/);
  return words.map(word => formalize(word)).join("");
}