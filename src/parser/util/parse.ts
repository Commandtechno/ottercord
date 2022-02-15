import { stripPartial, stripArray, lastSplit, cleanText, stripDeprecated } from ".";
import { Type, Param, Row } from "../../common";

export const validTypes = new Set([
  // special
  "snowflake",
  "file contents",

  // basic
  "null",
  "string",
  "boolean",
  "symbol",
  "function",

  // numbers
  "int",
  "integer",
  "float",
  "number",
  "bigint",

  // objects
  "dict",
  "mixed",
  "object",

  // dates
  "date",
  "ISO8601 timestamp"
]);

export function isPartial(text: string) {
  return text.toLowerCase().includes("partial");
}

export function isArray(text: string) {
  return text.toLowerCase().includes("array") || text.toLowerCase().includes("list");
}

export function isDeprecated(text: string) {
  return text.toLowerCase().includes("(deprecated)") || text.toLowerCase().includes("*deprecated*");
}

export function parseAnchor(link: string) {
  const [, anchor] = lastSplit(link.slice(1), "/");
  return anchor;
}

// type hierarchy: type field links, description field first token link, type field raw, description field links

export function parseType(row: Row): Type {
  let partial = false;
  let optional = false;
  let nullable = false;
  let array = false;

  if (row.required && row.required?.text !== "Yes" && row.required?.text !== "true") {
    optional = true;
  }

  // hmm
  if (row.field.text.startsWith("?")) {
    optional = true;
    row.field.text = row.field.text.slice(1);
  }

  if (row.field.text.endsWith("?")) {
    optional = true;
    row.field.text = row.field.text.slice(0, -1);
  }

  if (row.type.text.startsWith("?")) {
    nullable = true;
    row.type.text = row.type.text.slice(1);
  }

  if (row.type.text.endsWith("?")) {
    nullable = true;
    row.type.text = row.type.text.slice(0, -1);
  }

  if (isPartial(row.type.text)) {
    partial = true;
    row.type.text = stripPartial(row.type.text);
  }

  if (isArray(row.type.text)) {
    array = true;
    row.type.text = stripArray(row.type.text);
  }

  // type field

  for (const token of row.type.tokens)
    if (token.type === "link")
      return {
        partial,
        optional,
        nullable,
        array,

        reference: true,
        value: parseAnchor(token.href)
      };

  // description field

  if (row.description && isArray(row.description.text)) {
    array = true;
  }

  if (row.description) {
    const [firstToken] = row.description.tokens;
    if (firstToken.type === "link")
      return {
        partial,
        optional,
        nullable,
        array,

        reference: true,
        value: parseAnchor(firstToken.href)
      };
  }

  const values = row.type.text.split("or").map(cleanText);
  if (!values.every(type => validTypes.has(type))) {
    if (row.description)
      for (const token of row.description.tokens)
        if (token.type === "link")
          return {
            partial,
            optional,
            nullable,
            array,

            reference: true,
            value: parseAnchor(token.href)
          };

    console.log(` ! Invalid type: ${row.type.text}`);
    return {
      partial,
      optional,
      nullable,
      array,

      reference: false,
      value: "any"
    };
  }

  return {
    partial,
    optional,
    nullable,
    array,

    reference: false,
    value: values
  };
}

export function parseParam(row: Row): Param {
  let deprecated = false;
  if (isDeprecated(row.type.text)) {
    deprecated = true;
    row.type.text = stripDeprecated(row.type.text);
  }

  if (isDeprecated(row.field.text)) {
    deprecated = true;
    row.field.text = stripDeprecated(row.field.text);
  }

  if (row.description && isDeprecated(row.description.text)) {
    deprecated = true;
    row.description.text = stripDeprecated(row.description.text);
  }

  return {
    ...parseType(row),

    deprecated,

    name: cleanText(row.field.text),
    description: row.description?.text && cleanText(row.description.text)
  };
}