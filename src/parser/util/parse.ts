import { Type, Row } from "../../common";
import {
  cutText,
  trimText,
  isArray,
  isDeprecated,
  isPartial,
  lastSplit,
  stripArray,
  stripBrackets,
  stripDeprecated,
  stripPartial,
  stripPlural
} from ".";

export const validTypes = new Set([
  // special
  "binary",
  "snowflake",
  "file contents",

  // basic
  "null",
  "string",

  // booleans
  "bool",
  "boolean",

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

export function parseAnchor(link: string) {
  const [, anchor] = lastSplit(link.slice(1), "/");
  return anchor;
}

// type hierarchy: type field links, description field first token link, type field raw, description field links
export function parseType(row: Row): Type {
  let array = false;
  let partial = false;
  let deprecated = false;

  let optional = false;
  let nullable = false;

  // optional
  if (row.required && row.required?.text !== "Yes" && row.required?.text !== "true") {
    optional = true;
  }

  if (row.field?.text.startsWith("?")) {
    optional = true;
    row.field.text = row.field.text.slice(1);
  }

  if (row.field?.text.endsWith("?")) {
    optional = true;
    row.field.text = row.field.text.slice(0, -1);
  }

  // nullable
  if (row.type.text.startsWith("?")) {
    nullable = true;
    row.type.text = row.type.text.slice(1);
  }

  if (row.type.text.endsWith("?")) {
    nullable = true;
    row.type.text = row.type.text.slice(0, -1);
  }

  // partial
  if (isPartial(row.type.text)) {
    partial = true;
    row.type.text = stripPartial(row.type.text);
  }

  if (row.description && isPartial(row.description.text)) {
    partial = true;
    row.description.text = stripPartial(row.description.text);
  }

  if (isDeprecated(row.field?.text ?? row.name?.text)) {
    deprecated = true;
    name = stripDeprecated(name);
  }

  if (isDeprecated(row.type.text)) {
    deprecated = true;
    row.type.text = stripDeprecated(row.type.text);
  }

  if (row.description && isDeprecated(row.description.text)) {
    deprecated = true;
    row.description.text = stripDeprecated(row.description.text);
  }

  // array
  if (isArray(row.type.text)) {
    array = true;
    row.type.text = stripArray(row.type.text);
  }

  if (row.description && isArray(row.description.text)) {
    array = true;
    row.description.text = stripArray(row.description.text);
  }

  // type field links
  for (const token of row.type.tokens)
    if (token.type === "link")
      return {
        array,
        partial,
        deprecated,

        type: "reference",
        link: parseAnchor(token.href)
      };

  // description field first token link
  if (row.description) {
    const [firstToken] = row.description.tokens;
    if (firstToken.type === "link")
      return {
        array,
        partial,
        deprecated,

        type: "reference",
        link: parseAnchor(firstToken.href)
      };
  }

  const values = stripBrackets(cutText(row.type.text))
    .split("or")
    .map(value => stripPlural(trimText(value)));

  // type field raw

  if (values.every(type => validTypes.has(type))) {
    const types = values.map(value => ({array, partial, deprecated, type: value}));

    if (values.length === 1)
      return {
        array,
        partial,
        deprecated,

        type: "value",
        value: values[0]
      };

    return {
      array,
      partial,
      deprecated,

      type: "union",
      types: 
    };
  } else {
    // description field links
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

    // could not resolve type
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
}