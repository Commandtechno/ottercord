import { lastSplit } from ".";
import { Row, Type } from "../../../common";

export function parseType(row: Row): Type {
  let array = false;
  let optional = false;
  let nullable = false;

  if (row.field.text.endsWith("?")) {
    optional = true;
  }

  if (row.type.text.startsWith("?")) {
    nullable = true;
  }

  ["array of", "list of"].forEach(match => {
    if (row.field.text.toLowerCase().includes(match)) {
      array = true;
      row.field.text = row.field.text.replace(match, "");
    }

    if (row.description.text.toLowerCase().includes(match)) {
      array = true;
      row.description.text = row.description.text.replace(match, "");
    }
  });

  if (row.type.text.toLowerCase().includes("object"))
    for (const token of row.type.tokens)
      if (token.type === "link")
        return {
          optional,
          nullable,
          array,

          reference: true,
          value: parseAnchor(token.href)
        };

  return {
    optional,
    nullable,
    array,

    reference: false,
    value: row.type.text
  };
}

export function parseAnchor(link: string) {
  const [, anchor] = lastSplit(link.slice(1), "/");
  return anchor;
}