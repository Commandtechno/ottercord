import { Row, Property, ValueType, BaseType } from "../../common";
import {
  cutText,
  trimText,
  flattenBlock,
  isArray,
  isPartial,
  isDeprecated,
  lastSplit,
  stripArray,
  stripBrackets,
  stripDeprecated,
  stripPartial,
  stripPlural
} from ".";

export function parseLink(link: string) {
  const [, anchor] = lastSplit(link.slice(1), "/");
  return anchor;
}

export function parseProperty(row: Row): Property {
  let key = trimText(stripBrackets(flattenBlock(row.field ?? row.name)));
  let type = stripBrackets(cutText(row.type.text));
  let description = row.description && trimText(flattenBlock(row.description));

  let optional = false;
  let nullable = false;

  // optional
  if (
    row.required &&
    row.required?.text !== "Yes" &&
    row.required?.text !== "true"
  ) {
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

  let array = false;
  let partial = false;
  let deprecated = false;

  // array
  if (isArray(row.type.text)) {
    array = true;
    row.type.text = stripArray(row.type.text);
  }

  if (description && isArray(description)) {
    array = true;
    description = stripArray(description);
  }

  // partial
  if (isPartial(row.type.text)) {
    partial = true;
    row.type.text = stripPartial(row.type.text);
  }

  if (description && isPartial(description)) {
    partial = true;
    row.description.text = stripPartial(description);
  }

  // deprecated
  if (isDeprecated(key)) {
    deprecated = true;
    key = stripDeprecated(key);
  }

  if (isDeprecated(row.type.text)) {
    deprecated = true;
    row.type.text = stripDeprecated(row.type.text);
  }

  if (description && isDeprecated(description)) {
    deprecated = true;
    description = stripDeprecated(description);
  }

  if (type.includes("or") || type.includes(",")) {
    const types = type.split(/(or|,)/);
    const valueTypes: ValueType[] = [];

    for (const type of types) {
      const valueType = parseValueType(type);
      if (!valueType) continue;
      if (
        valueTypes.some(
          _ =>
            _.array === valueType.array &&
            _.partial === valueType.partial &&
            _.deprecated === valueType.deprecated &&
            _.type === valueType.type &&
            _.value === valueType.value
        )
      )
        continue;

      valueTypes.push(valueType);
    }

    if (valueTypes.length)
      return {
        key,
        description,

        optional,
        nullable,

        type: valueTypes
      };
  }

  // type field links
  for (const token of row.type.tokens)
    if (token.type === "link")
      return {
        key,
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

  // description field links
  if (row.description)
    for (const token of row.description.tokens)
      if (token.type === "link")
        return {
          key,
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
    key,
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

export function parseValueType(type: string): ValueType {
  let array = false;
  let partial = false;
  let deprecated = false;

  // array
  if (isArray(type)) {
    array = true;
    type = stripArray(type);
  }

  // partial
  if (isPartial(type)) {
    partial = true;
    type = stripPartial(type);
  }

  // deprecated
  if (isDeprecated(type)) {
    deprecated = true;
    type = stripDeprecated(type);
  }

  let value: ValueType["value"];
  switch (stripPlural(trimText(type))) {
    case "binary":
      value = "binary";
      break;

    case "snowflake":
      value = "snowflake";
      break;

    case "file contents":
      value = "file";
      break;

    case "null":
      value = "null";
      break;

    case "string":
      value = "string";
      break;

    case "bool":
    case "boolean":
      value = "boolean";
      break;

    case "int":
    case "integer":
    case "number":
      value = "integer";
      break;

    case "float":
      value = "float";
      break;

    case "bigint":
      value = "bigint";
      break;

    case "dict":
    case "object":
    case "mixed":
      value = "object";
      break;

    // case "date":
    case "ISO8601 timestamp":
      value = "timestamp";
      break;
  }

  if (value)
    return {
      array,
      partial,
      deprecated,

      type: "value",
      value
    };
}