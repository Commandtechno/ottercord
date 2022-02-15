import { Constant, Endpoint, Param, Structure, Type } from "../../common";
import { camel, pascal } from "../util";

function convertType(type: string) {
  switch (type) {
    // special
    case "binary":
      return "Buffer";

    case "snowflake":
      return "string | bigint";

    case "file contents":
      return JSON.stringify("balls");

    // basic
    case "any":
    case "null":
    case "string":
      return type;

    // booleans
    case "bool":
    case "boolean":
      return "boolean";

    // numbers
    case "int":
    case "integer":
    case "float":
    case "number":
      return "number";

    case "bigint":
      return "bigint";

    // objects
    case "dict":
    case "mixed":
    case "object":
      return "object";

    case "date":
    case "ISO8601 timestamp":
      return "Date";

    default:
      throw new Error("Unknown type: " + type);
  }
}

function resolveType(links: { [key: string]: string }, type: Type) {
  if (type.reference) {
    let link = links[type.value as string];
    if (!link) {
      console.log("unresolved reference", type.value);
      return "any /* unresolved refrence: " + type.value + " */";
    }

    link = pascal(link);
    if (type.partial) link = "Partial<" + link + ">";
    if (type.array) link = "Array<" + link + ">";
    return link;
  }

  let tsType = Array.isArray(type.value)
    ? type.value.map(convertType).join(" | ")
    : convertType(type.value as string);

  if (type.nullable) tsType += " | null";
  if (type.array) tsType = "Array<" + tsType + ">";
  if (type.partial) tsType = "Partial<" + tsType + ">";

  return tsType;
}

function resolveStructure(links: { [key: string]: string }, params: Param[]) {
  let output = "{";
  for (const param of params) {
    output += "\n\t" + JSON.stringify(param.name);
    if (param.optional) output += "?";
    output += ": " + resolveType(links, param) + ";";
  }
  output += "\n}";
  return output;
}

// todo remove
let nameCache = [];

// make sure function name is unique because there are 2 fucking functions named list active threads and it breaks shit lmao
function getName(name: string) {
  let uniqueName = name;
  if (nameCache.includes(name)) uniqueName += nameCache.filter(n => n === name).length;
  nameCache.push(name);
  return uniqueName;
}

export function js(
  links: { [key: string]: string },
  constants: Constant[],
  endpoints: Endpoint[],
  structures: Structure[]
) {
  let output = "";
  for (const constant of constants) {
    output += "enum " + getName(pascal(constant.name)) + " {\n";
    for (const value of constant.values)
      output += "\t" + pascal(value.name) + " = " + JSON.stringify(value.value) + ",\n";

    output += "};\n\n";
  }

  for (const structure of structures) {
    output += "export interface " + getName(pascal(structure.name)) + " ";
    output += resolveStructure(links, structure.params);
    output += ";\n\n";
  }

  for (const endpoint of endpoints) {
    // create function
    output += "export function ";
    output += getName(camel(endpoint.name));

    // params
    output += "(";

    let path = JSON.stringify(endpoint.path);
    for (const param of endpoint.params) {
      path = path.replace("{" + param.name + "}", '" + ' + camel(param.name) + ' + "');
      output += camel(param.name) + ": string, ";
    }

    if (endpoint.query) {
      output += "query: ";
      output += resolveStructure(links, endpoint.query);
      output += ", ";
    }

    if (endpoint.request) {
      output += "body: ";

      output += resolveStructure(links, endpoint.request.params);
      output += ", ";
    }

    output += ")";
    if (endpoint.response) {
      output += ": Promise<";
      if (Array.isArray(endpoint.response)) output += resolveStructure(links, endpoint.response);
      else output += resolveType(links, endpoint.response);

      output += ">";
    }

    output += " {\n";
    output += "\treturn $({\n";
    output += "\t\tmethod: " + JSON.stringify(endpoint.method) + ",\n";
    output += "\t\tpath: " + path + ",\n";

    if (endpoint.query) {
      output += "\t\t// @ts-ignore types only like strings for some reason lol\n";
      output += "\t\tquery: new URLSearchParams(query),\n";
    }

    if (endpoint.request) {
      output += "\t\tbody: JSON.stringify(body),\n";
      // output += "\t\tbody: {\n";
      // for (const param of endpoint.request.params) {
      //   output += "\t\t\t" + param.name + ": body." + param.name + ",\n";
      // }

      // output += "\t\t},\n";
    }

    output += "\t\theaders: {\n";
    // output += '\t\t\t"Authorization": "Bot " + process.env.BOT_TOKEN,\n';

    if (endpoint.request) {
      output += "\t\t\t" + '"Content-Type": "application/json",\n';
    }

    output += "\t\t},\n";

    output += "\t});\n";
    output += "};\n\n";
  }

  return output;
}