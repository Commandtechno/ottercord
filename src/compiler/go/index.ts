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

export class GO extends Base {
  constructor(init) {
    super(init);
    this.write(readFileSync(resolve(__dirname, "runtime.go"), "utf-8"));
    this.line();
  }

  renderValueType(valueType: ValueType) {
    switch (valueType.value) {
      // special
      case "binary":
        this.write("[]byte");
        break;

      case "snowflake":
        this.write("string");
        break;

      case "file contents":
        this.write(JSON.stringify("balls"));
        break;

      // basic
      case "any":
        this.write("interface{}");
        break;

      case "null":
        this.write("interface{}");
        break;

      case "string":
        this.write(valueType.value);
        break;

      // booleans
      case "bool":
      case "boolean":
        this.write("bool");
        break;

      // numbers
      case "int":
      case "integer":
        this.write("int");
        break;

      case "float":
      case "number":
        this.write("float64");
        break;

      case "bigint":
        this.write("int");
        break;

      // objects
      case "dict":
      case "mixed":
      case "object":
        this.write("map[string]interface{}");
        break;

      case "date":
      case "ISO8601 timestamp":
        this.write("time.Time");
        break;

      default:
        throw new Error("Unknown type: " + valueType.value);
    }
  }

  renderStructureType(structureType: StructureType) {
    this.write("struct {");
    this.indent++;

    for (const prop of structureType.properties) {
      this.line(`${pascal(prop.key)} `);
      this.renderType(prop.type);
      this.write(" `json:" + JSON.stringify(prop.key) + "`");
      // if (prop.nullable) this.write(" | null");
    }

    this.indent--;
    this.line("}");
  }

  renderReferenceType(referenceType: ReferenceType) {
    const ref = this.structures.find(s => s.tree.includes(referenceType.link));

    if (!ref) {
      console.log("Could not find reference: " + referenceType.link);
      this.write("interface{}");
    } else {
      this.write("*" + pascal(ref.name));
    }
  }

  renderType(type: Type | Type[]) {
    if (Array.isArray(type)) {
      this.write("interface{}");
    } else {
      if (type.array) this.write("[]");

      if (type.type === "value") this.renderValueType(type);
      else if (type.type === "structure") this.renderStructureType(type);
      else if (type.type === "reference") this.renderReferenceType(type);
    }
  }

  renderDoc(doc: { [key: string]: string }) {
    this.write(`// `);
    this.indent++;

    for (const key in doc) this.write(` * ${key}: ${doc[key]}`);

    this.indent--;
    this.line();
  }

  renderConstant(constant: Constant) {
    this.line(`const (`);
    this.indent++;

    for (const prop of constant.properties) {
      const key = this.getName(pascal(constant.name) + pascal(prop.key));
      const value = JSON.stringify(prop.value);
      this.line(`${key} = ${value}`);
    }

    this.indent--;
    this.line(")");
    this.line();
  }

  renderEndpoint(endpoint: Endpoint) {
    let requestType: string;
    if (endpoint.request) {
      requestType = this.getName(pascal(endpoint.name) + "Body");
      this.line(`type ${requestType} `);
      this.renderType(endpoint.request);
      this.line();
    }

    this.line(`func ${this.getName(pascal(endpoint.name))}(`);
    let path = '"' + endpoint.path + '"';

    // parameters
    this.indent++;
    for (const param of endpoint.params) {
      this.line(`${camel(param.name)} string,`);
      path = path.replace(
        `{${param.name}}`,
        `" + url.PathEscape(${camel(param.name)}) + "`
      );
    }

    if (endpoint.request) this.line(`body ${requestType},`);

    this.indent--;

    // return type
    this.line(") ");
    if (endpoint.response) {
      this.indent++;
      this.renderType(endpoint.response);
      this.indent--;
    } else this.write("interface{}");

    // function body
    this.write(" {");
    this.indent++;
    if (endpoint.request) this.line(`rawBody, _ := json.Marshal(body)`);
    this.line(`res := fetch(Request{`);
    this.indent++;
    this.line("Method: " + JSON.stringify(endpoint.method) + ",");
    this.line("Path: " + path + ",");
    if (endpoint.request) this.line("Body: rawBody,");
    this.line('Headers: map[string]string{ "Authorization": "Bot BALLS" },');
    this.indent--;
    this.line("})");

    if (endpoint.response) {
      this.line(`var balls `);
      this.renderType(endpoint.response);
      this.line("json.NewDecoder(res.Body).Decode(&balls)");
      this.line("return balls");
    } else {
      this.line("return res");
    }

    this.indent--;
    this.line("}");
    this.line();
  }

  renderStructure(structure: Structure) {
    this.line(`type ${this.getName(pascal(structure.name))} struct {`);
    this.indent++;

    for (const prop of structure.properties) {
      this.line(`${pascal(prop.key)} `);
      this.renderType(prop.type);
      this.write(" `json:" + JSON.stringify(prop.key) + "`");
    }

    this.indent--;
    this.line("}");
    this.line();
  }
}