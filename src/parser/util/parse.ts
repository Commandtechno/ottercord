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
  let name = trimText(stripBrackets(flattenBlock(row.field ?? row.name)));
  let type = cutText(flattenBlock(row.type));
  let description = row.description && trimText(flattenBlock(row.description));

  let optional = false;
  let nullable = false;
  let deprecated = false;

  // optional
  if (
    row.required &&
    row.required?.text !== "Yes" &&
    row.required?.text !== "true"
  )
    optional = true;

  if (name.startsWith("?")) {
    optional = true;
    name = name.slice(1);
  }

  if (name.endsWith("?")) {
    optional = true;
    name = name.slice(0, -1);
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

  // deprecated
  if (isDeprecated(name)) {
    deprecated = true;
    name = stripDeprecated(name);
  }

  if (isDeprecated(type)) {
    deprecated = true;
    type = stripDeprecated(type);
  }

  if (description && isDeprecated(description)) {
    deprecated = true;
    // description = stripDeprecated(description);
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
            _.type === valueType.type &&
            _.value === valueType.value
        )
      )
        continue;

      valueTypes.push(valueType);
    }

    if (valueTypes.length)
      return {
        name,
        description,
        deprecated,

        optional,
        nullable,

        type: valueTypes
      };
  }

  let array = false;
  let partial = false;

  // array
  if (isArray(type)) {
    array = true;
    type = stripArray(type);
  }

  if (description && isArray(description)) {
    array = true;
    // description = stripArray(description);
  }

  // partial
  if (isPartial(type)) {
    partial = true;
    type = stripPartial(type);
  }

  if (description && isPartial(description)) {
    partial = true;
    // description = stripPartial(description);
  }

  const valueType = parseValueType(type);

  // type field links
  for (const token of row.type.tokens)
    if (token.type === "link")
      return {
        name,
        description,

        optional,
        nullable,
        deprecated,

        type: {
          array,
          partial,

          type: "reference",
          link: parseLink(token.href),

          fallback: valueType
        }
      };

  // description field links
  if (row.description)
    for (const token of row.description.tokens)
      if (token.type === "link")
        return {
          name,
          description,

          optional,
          nullable,
          deprecated,

          type: {
            array,
            partial,

            type: "reference",
            link: parseLink(token.href),

            fallback: valueType
          }
        };

  if (valueType)
    return {
      name,
      description,

      optional,
      nullable,
      deprecated,

      type: valueType
    };

  // could not resolve type
  console.warn(
    `Invalid type: ${row.type.text} (${stripPlural(
      trimText(stripBrackets(type.toLowerCase()))
    )})`
  );

  return {
    name,
    description,

    optional,
    nullable,
    deprecated,

    type: {
      array,
      partial,

      type: "value",
      value: "any"
    }
  };
}

export function parseValueType(type: string): ValueType {
  let array = false;
  let partial = false;

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

      type: "value",
      value
    };
}