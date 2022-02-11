import { Constant, Endpoint, Param, Structure, Type } from "../../../common";
import { camel, pascal } from "../util";

function convertType(type: string) {
  switch (type) {
    case "file contents":
      return '"balls"';

    case "ISO8601 timestamp":
      return "Date";

    case "int":
    case "integer":
      return "number";

    case "dict":
      return "object";

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

function resolveType(links: { [key: string]: string }, type: Type) {
  if (type.reference) {
    const link = links[type.value as string];
    if (!link) {
      console.log("unresolved reference", type.value);
      return "any";
    }

    if (type.array) {
      return "Array<" + pascal(link) + ">";
    }

    return pascal(link);
  }

  const tsType = Array.isArray(type.value)
    ? type.value.map(convertType).join(" | ")
    : convertType(type.value as string);

  return tsType;
}

function resolveStructure(links: { [key: string]: string }, params: Param[]) {
  let output = "{";
  for (const param of params) {
    output += "\n\t" + camel(param.name) + ": " + resolveType(links, param) + ";";
  }
  output += "\n}";
  return output;
}

export function js(
  links: { [key: string]: string },
  constants: Constant[],
  endpoints: Endpoint[],
  structures: Structure[]
) {
  let output = "";
  for (const constant of constants) {
    output += "export type " + pascal(constant.name) + " = {";
    for (const value of constant.values) {
      output +=
        "\n\t" + JSON.stringify(pascal(value.name)) + ": " + JSON.stringify(value.value) + ",";
    }
    output += "\n};\n\n";
  }

  for (const structure of structures) {
    output += "export type " + pascal(structure.name) + " = ";
    output += resolveStructure(links, structure.params);
    output += ";\n\n";
  }

  for (const endpoint of endpoints) {
    output +=
      "export function " +
      camel(endpoint.name) +
      "_" +
      Date.now().toString(36) +
      "(" +
      endpoint.params.map(param => camel(param.name)).join(", ") +
      ", " +
      (endpoint.request ? "body: " + resolveStructure(links, endpoint.request.params) + ", " : "") +
      "): Promise<" +
      (endpoint.response
        ? resolveType(
            links,
            Array.isArray(endpoint.response) ? endpoint.response[0] : endpoint.response
          )
        : "any") +
      "> {\n";

    let path = endpoint.path;
    for (const param of endpoint.params) {
      path = path.replace(`{${param.name}}`, `" + ${camel(param.name)} + "`);
    }
    output += '\treturn fetch("' + path + '", {\n';
    output += "\t\tmethod: " + JSON.stringify(endpoint.method) + ",\n";
    if (endpoint.request) {
      output += "\t\tbody: JSON.stringify({\n";
      for (const param of endpoint.request.params)
        output += "\t\t\t" + camel(param.name) + ": body." + camel(param.name) + ",\n";
      output += "\t\t}),\n";
      output += "\t\theaders: {\n";
      output += '\t\t\t"Content-Type": "application/json",\n';
      output += "\t\t},\n";
    }

    output += "\t}).then(res => res.json());\n";
    output += "}\n\n";
  }

  return output;
}