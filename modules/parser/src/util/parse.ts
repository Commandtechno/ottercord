import { flattenBlock, lastSplit } from ".";
import { marked } from "marked";

export interface Type {
  reference: boolean;
  value: any;
  array: boolean;
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
  if (block.text.toLowerCase().includes("array")) array = true;
  if (block.text.toLowerCase().includes("object"))
    for (const token of block.tokens)
      if (token.type === "link") {
        return {
          reference: true,
          value: parseTypeLink(token.href),
          array
        };
      }

  return {
    reference: false,
    value: flattenBlock(block),
    array
  };
}

export function parseTypeLink(rawLink: string) {
  const [, anchor] = lastSplit(rawLink.slice(1), "/");
  return anchor;
}