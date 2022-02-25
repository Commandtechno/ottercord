import { Row, Property } from "../../common";
import {
  cutText,
  trimText,
  flattenBlock,
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

export function parseLink(link: string) {
  const [, anchor] = lastSplit(link.slice(1), "/");
  return anchor;
}

// type hierarchy: type field links, description field first token link, type field raw, description field links
export function parseProperty(row: Row): Property {
  let name = trimText(stripBrackets(flattenBlock(row.field ?? row.name)));
  let description = row.description && trimText(flattenBlock(row.description));

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

  // deprecated
  if (isDeprecated(name)) {
    deprecated = true;
    name = stripDeprecated(name);
  }

  if (isDeprecated(row.type.text)) {
    deprecated = true;
    row.type.text = stripDeprecated(row.type.text);
  }

  if (description && isDeprecated(row.description.text)) {
    deprecated = true;
    description = stripDeprecated(row.description.text);
  }

  // array
  if (isArray(row.type.text)) {
    array = true;
    row.type.text = stripArray(row.type.text);
  }

  if (description && isArray(row.description.text)) {
    array = true;
    description = stripArray(row.description.text);
  }

  // type field links
  for (const token of row.type.tokens)
    if (token.type === "link")
      return {
        name,
        description,

        type: {
          array,
          partial,
          deprecated,

          type: "reference",
          link: parseLink(token.href)
        },

        optional,
        nullable
      };

  // description field first token link
  if (row.description) {
    const [firstToken] = row.description.tokens;
    if (firstToken.type === "link")
      return {
        name,
        description,

        type: {
          array,
          partial,
          deprecated,

          type: "reference",
          link: parseLink(firstToken.href)
        },

        optional,
        nullable
      };
  }

  const value = stripPlural(trimText(stripBrackets(cutText(flattenBlock(row.type)))));
  if (value.includes("or") || value.includes(",")) {
    const values = value.split(/or|,/).map(value => stripPlural(trimText(value)));
    if (values.every(value => validTypes.has(value)))
      return {
        name,
        description,

        type: values.map(value => ({
          array,
          partial,
          deprecated,

          type: "value",
          value
        })),

        optional,
        nullable
      };
  }

  // type field raw
  if (validTypes.has(value))
    return {
      name,
      description,

      type: {
        array,
        partial,
        deprecated,

        type: "value",
        value
      },

      optional,
      nullable
    };

  // description field links
  if (row.description)
    for (const token of row.description.tokens)
      if (token.type === "link")
        return {
          name,
          description,

          type: {
            array,
            partial,
            deprecated,

            type: "reference",
            link: parseLink(token.href)
          },

          optional,
          nullable
        };

  // could not resolve type
  console.log(`Invalid type: ${row.type.text}`);
  return {
    name,
    description,

    type: {
      array,
      partial,
      deprecated,

      type: "value",
      value: "any"
    },

    optional,
    nullable
  };
}