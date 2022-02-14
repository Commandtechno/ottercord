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
      return "string | bigint";

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
      return "any /* " + type.value + " */";
    }

    if (type.array) {
      return "Array<" + pascal(link) + ">";
    }

    return pascal(link);
  }

  let tsType = Array.isArray(type.value)
    ? type.value.map(convertType).join(" | ")
    : convertType(type.value as string);

  if (type.nullable) {
    tsType += " | null";
  }

  return tsType;
}

function resolveStructure(links: { [key: string]: string }, params: Param[]) {
  let output = "{";
  for (const param of params) {
    output += "\n\t" + param.name;
    if (!param.required) output += "?";
    output += ": " + resolveType(links, param) + ";";
  }
  output += "\n}";
  return output;
}

// todo remove
let currentEndpoints = [];

export function js(
  links: { [key: string]: string },
  constants: Constant[],
  endpoints: Endpoint[],
  structures: Structure[]
) {
  let output = "";
  for (const constant of constants) {
    output += "export enum " + pascal(constant.name) + " {\n";
    for (const value of constant.values) {
      output += "\t" + pascal(value.name) + " = " + JSON.stringify(value.value) + ",\n";
    }
    output += "};\n\n";
  }

  for (const structure of structures) {
    output += "export interface " + pascal(structure.name) + " ";
    output += resolveStructure(links, structure.params);
    output += ";\n\n";
  }

  for (const endpoint of endpoints) {
    // create function
    output += "export function ";
    output += camel(endpoint.name);

    // make sure function name is unique because there are 2 fucking functions named list active threads and it breaks shit lmao
    if (currentEndpoints.includes(camel(endpoint.name))) {
      let offset = currentEndpoints.filter(e => e === camel(endpoint.name)).length;
      output += offset;
    }

    currentEndpoints.push(camel(endpoint.name));

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
    output += "{\n";
    output += "\treturn {\n";
    output += "\t\tmethod: " + JSON.stringify(endpoint.method) + ",\n";
    output += "\t\tpath: " + path + ",\n";

    if (endpoint.query) {
      output += '\t\tquery: "';
      for (const param of endpoint.query) {
        output += "&" + encodeURIComponent(param.name) + '=" + query.' + param.name + ' + "';
      }
      output += '",\n';
    }

    if (endpoint.request) {
      output += "\t\tbody: JSON.stringify(body),\n";
      // output += "\t\tbody: {\n";
      // for (const param of endpoint.request.params) {
      //   output += "\t\t\t" + param.name + ": body." + param.name + ",\n";
      // }

      // output += "\t\t},\n";
    }

    output += "\t}\n";
    output += "}\n\n";
  }

  return output;
}