import { Row, Property, ValueType } from "../../common";
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
  let type = cutText(flattenBlock(row.type));
  let description = row.description && trimText(flattenBlock(row.description));

  let optional = false;
  let nullable = false;

  // optional
  if (
    row.required &&
    row.required?.text !== "Yes" &&
    row.required?.text !== "true"
  )
    optional = true;

  if (key.startsWith("?")) {
    optional = true;
    key = key.slice(1);
  }

  if (key.endsWith("?")) {
    optional = true;
    key = key.slice(0, -1);
  }

  // nullable
  if (type.startsWith("?")) {
    nullable = true;
    type = type.slice(1);
  }

  if (type.endsWith("?")) {
    nullable = true;
    type = type.slice(0, -1);
  }

  // union type
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

  let array = false;
  let partial = false;
  let deprecated = false;

  // array
  if (isArray(type)) {
    array = true;
    type = stripArray(type);
  }

  if (description && isArray(description)) {
    array = true;
    description = stripArray(description);
  }

  // partial
  if (isPartial(type)) {
    partial = true;
    type = stripPartial(type);
  }

  if (description && isPartial(description)) {
    partial = true;
    description = stripPartial(description);
  }

  // deprecated
  if (isDeprecated(key)) {
    deprecated = true;
    key = stripDeprecated(key);
  }

  if (isDeprecated(type)) {
    deprecated = true;
    type = stripDeprecated(type);
  }

  if (description && isDeprecated(description)) {
    deprecated = true;
    description = stripDeprecated(description);
  }

  // type field links
  for (const token of row.type.tokens)
    if (token.type === "link")
      return {
        key,
        description,

        optional,
        nullable,

        type: {
          array,
          partial,
          deprecated,

          type: "reference",
          link: parseLink(token.href)
        }
      };

  // description field links
  if (row.description)
    for (const token of row.description.tokens)
      if (token.type === "link")
        return {
          key,
          description,

          optional,
          nullable,

          type: {
            array,
            partial,
            deprecated,

            type: "reference",
            link: parseLink(token.href)
          }
        };

  const valueType = parseValueType(type);
  if (valueType)
    return {
      key,
      description,

      optional,
      nullable,

      type: valueType
    };

  // could not resolve type
  console.warn(
    `Invalid type: ${row.type.text} (${stripPlural(
      trimText(stripBrackets(type.toLowerCase()))
    )})`
  );
  return {
    key,
    description,

    optional,
    nullable,

    type: {
      array,
      partial,
      deprecated,

      type: "value",
      value: "any"
    }
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
  switch (stripPlural(trimText(stripBrackets(type.toLowerCase())))) {
    case "null":
      value = "null";
      break;

    case "string":
      value = "string";
      break;

    case "float":
      value = "float";
      break;

    case "int":
    case "integer":
    case "number":
    case "unsigned short":
    case "unsigned integer":
      value = "integer";
      break;

    case "bigint":
      value = "bigint";
      break;

    case "bool":
    case "boolean":
      value = "boolean";
      break;

    case "dict":
    case "object":
    case "mixed":
      value = "object";
      break;

    // special types
    case "date":
    case "iso8601 timestamp":
      value = "date";
      break;

    case "binary data":
    case "binary":
      value = "binary";
      break;

    case "file content":
      value = "file";
      break;

    case "snowflake":
      value = "snowflake";
      break;

    case "":
      value = "any";
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