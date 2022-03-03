import { readFileSync } from "fs";
import { resolve } from "path";

import {
  Constant,
  Endpoint,
  Structure,
  ValueType,
  StructureType,
  ReferenceType,
  Type
} from "../../common";

import { camel, pascal } from "../util";
import { Base } from "../base";

export class JS extends Base {
  constructor(init) {
    super(init);
    this.write(readFileSync(resolve(__dirname, "runtime.ts"), "utf-8"));
    this.line();
  }

  renderValueType(valueType: ValueType) {
    switch (valueType.value) {
      case "null":
        this.write("null");
        break;

      case "string":
        this.write("string");
        break;

      case "float":
      case "integer":
        this.write("number");
        break;

      case "bigint":
        this.write("bigint");
        break;

      case "boolean":
        this.write("boolean");
        break;

      case "object":
        this.write("object");
        break;

      case "date":
        this.write("Date");
        break;

      case "binary":
        this.write("Buffer");
        break;

      case "file":
        this.write(JSON.stringify("balls"));
        break;

      case "snowflake":
        this.write("string | bigint");
        break;

      case "any":
        this.write("any");
        break;

      default:
        throw new Error("Unknown type: " + valueType.value);
    }
  }

  renderStructureType(structureType: StructureType) {
    this.write("{");
    this.indent++;

    for (const prop of structureType.properties) {
      this.line(`${prop.key}`);
      if (prop.optional) this.write("?");
      this.write(": ");
      this.renderType(prop.type);
      if (prop.nullable) this.write(" | null");
      this.write(",");
    }

    this.indent--;
    this.line("}");
  }

  renderReferenceType(referenceType: ReferenceType) {
    const constant = this.constants.find(c =>
      c.tree.includes(referenceType.link)
    );

    if (constant)
      return this.write(
        "typeof " +
          pascal(constant.name) +
          "[keyof typeof " +
          pascal(constant.name) +
          "]"
      );

    const structure = this.structures.find(s =>
      s.tree.includes(referenceType.link)
    );

    if (structure) return this.write(pascal(structure.name));

    console.log("Could not find reference: " + referenceType.link);
    this.write("any");
  }

  renderType(type: Type | Type[]) {
    if (Array.isArray(type)) {
      this.renderType(type.shift());
      for (const t of type) {
        this.write(" | ");
        this.renderType(t);
      }
    } else {
      if (type.array) this.write("Array<");
      if (type.partial) this.write("Partial<");

      if (type.type === "value") this.renderValueType(type);
      else if (type.type === "structure") this.renderStructureType(type);
      else if (type.type === "reference") this.renderReferenceType(type);

      if (type.array) this.write(">");
      if (type.partial) this.write(">");
    }
  }

  renderDoc(doc: { [key: string]: string }) {
    this.line(`/**`);
    this.indent++;

    for (const key in doc) this.write(` * ${key}: ${doc[key]}`);

    this.indent--;
    this.line(` */`);
  }

  renderConstant(constant: Constant) {
    this.line(`export const ${this.getName(pascal(constant.name))} = {`);
    this.indent++;

    for (const prop of constant.properties) {
      const key = /^\d+$/.test(prop.key)
        ? "$" + prop.key
        : /^\d/.test(prop.key)
        ? JSON.stringify(pascal(prop.key))
        : pascal(prop.key);

      const value = JSON.stringify(prop.value);
      this.line(`${key}: ${value},`);
    }

    this.indent--;
    this.line("} as const");
    this.line();
  }

  renderEndpoint(endpoint: Endpoint) {
    this.line(`export function ${this.getName(camel(endpoint.name))}(`);

    let path = "`" + endpoint.path + "`";

    // parameters
    this.indent++;
    for (const param of endpoint.params) {
      this.line(`${camel(param.name)}: string,`);
      path = path.replace(
        `{${param.name}}`,
        `\${encodeURIComponent(${camel(param.name)})}`
      );
    }

    if (endpoint.request) {
      this.line(`body: JSON<`);
      this.renderType(endpoint.request);
      this.write(">, ");
    }
    this.indent--;

    // return type
    this.line("): Promise<");
    if (endpoint.response) {
      this.indent++;
      this.renderType(endpoint.response);
      this.indent--;
    } else this.write("any");
    this.write(">");

    // function body
    this.write(" {");
    this.indent++;
    this.line(`return fetch({`);
    this.indent++;
    this.line("method: " + JSON.stringify(endpoint.method) + ",");
    this.line("path: " + path + ",");
    if (endpoint.request) this.line("body: JSON.stringify(body),");
    this.line(
      'headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }'
    );
    this.indent--;
    this.line("})");
    this.indent--;
    this.line("}");
    this.line();
  }

  renderStructure(structure: Structure) {
    this.line(`export interface ${this.getName(pascal(structure.name))} {`);
    this.indent++;

    for (const prop of structure.properties) {
      this.line();
      this.tab();

      this.write(JSON.stringify(prop.key));
      if (prop.optional) this.write("?");
      this.write(": ");
      this.renderType(prop.type);
      if (prop.nullable) this.write(" | null");
      this.write(",");
    }

    this.indent--;
    this.line("}");
    this.line();
  }
}