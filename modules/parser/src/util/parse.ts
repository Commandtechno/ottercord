import { flattenBlock, formatText, lastSplit } from ".";
import { marked } from "marked";

export interface Type {
  reference: boolean;
  array: boolean;
  value: string | string[];
}

export function parseType(block: marked.Tokens.TableCell): Type {
  if (!block) {
    return {
      reference: false,
      array: false,
      value: "any"
    };
  }

  let array = false;
  if (block.text.toLowerCase().includes("array") || block.text.toLowerCase().includes("list"))
    array = true;

  if (block.text.toLowerCase().includes("object"))
    for (const token of block.tokens)
      if (token.type === "link") {
        return {
          reference: true,
          array,
          value: parseTypeLink(token.href)
        };
      }

  return {
    reference: false,
    array,
    value: flattenBlock(block).split("or").map(formatText)
  };
}

export function parseTypeLink(rawLink: string) {
  const [, anchor] = lastSplit(rawLink.slice(1), "/");
  return anchor;
}