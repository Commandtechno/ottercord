// remove s from the end of a string
export function stripPlural(text: string) {
  return text.replace(/s$/, "");
}

// remove normal and square brackets
export function stripBrackets(text: string) {
  return text.replace(/\(.*?\)/g, "").replace(/\[.*?\]/g, "");
}

export function stripPartial(text: string) {
  return text.replace("partial", "");
}

// strips array, an array, an array of, an array of 6, an arrow of nine
export function stripArray(text: string) {
  return text.replace(
    /((an|a)\s)?(array|list)(\sof(\s(\d+|zero|one|two|three|four|five|six|seven|eight|nine))?)?/i,
    ""
  );
}

export function stripDeprecated(text: string) {
  return text.replace(/[\(\*]+deprecated[\)\*]+/i, "").trim();
}