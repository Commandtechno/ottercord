import { Constant, Endpoint, Structure } from "../types";
import { Type } from "../types/common";
import { camel, pascal } from "../util";

function convertType(type: string) {
  switch (type) {
    case "ISO8601 timestamp":
      return "Date";

    case "int":
    case "integer":
      return "number";

    case "snowflake":
      return "string";

    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "symbol":
    case "undefined":
    case "object":
    case "function":
      return type;

    default:
      throw new Error("Unknown type: " + type);
  }
}

function resolveType(type: Type) {
  if (type.reference) {
    if (type.array) {
      return "Array<" + camel(type.value as string) + ">";
    }

    return camel(type.value as string);
  }

  const tsType = Array.isArray(type.value)
    ? type.value.map(convertType).join(" | ")
    : convertType(type.value as string);
}

let output = "";
export function js(constants: Constant[], endpoints: Endpoint[], structures: Structure[]) {
  for (const constant of constants) {
    output += "export type " + pascal(constant.name) + " = {";
    for (const value of constant.values) {
      output +=
        "\n\t" + JSON.stringify(pascal(value.name)) + ": " + JSON.stringify(value.value) + ",";
    }
    output += "\n};\n\n";
  }

  for (const structure of structures) {
    output += "export type " + pascal(structure.name) + " = {";
    for (const field of structure.params) {
      output += "\n\t" + camel(field.name) + ": " + resolveType(field.type) + ";";
    }
    output += "\n}\n\n";
  }

  return output;
}