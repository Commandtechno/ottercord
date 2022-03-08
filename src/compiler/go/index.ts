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
      case "null":
        this.write("nil");
        break;

      case "string":
        this.write("string");
        break;

      case "float":
        this.write("float64");
        break;

      case "integer":
        this.write("int");
        break;

      case "bigint":
        this.write("int");
        break;

      case "boolean":
        this.write("bool");
        break;

      case "object":
        this.write("map[string]interface{}");
        break;

      case "date":
        this.write("time.Time");
        break;

      case "binary":
        this.write("[]byte");
        break;

      case "file":
        this.write(JSON.stringify("balls"));
        break;

      case "snowflake":
        this.write("string");
        break;

      case "any":
        this.write("interface{}");
        break;

      default:
        throw new Error("Unknown type: " + valueType.value);
    }
  }

  renderStructureType(structureType: StructureType) {
    this.write("struct {");
    this.indent++;

    for (const prop of structureType.props) {
      this.line(`${pascal(prop.name)} `);
      this.renderType(prop.type);
      this.write(" `json:" + JSON.stringify(prop.name) + "`");
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

    for (const prop of constant.props) {
      const name = this.getName(pascal(constant.name) + pascal(prop.name));
      const value = JSON.stringify(prop.value);
      this.line(`${name} = ${value}`);
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
      this.renderType(endpoint.request.type);
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

    for (const prop of structure.props) {
      this.line(`${pascal(prop.name)} `);
      this.renderType(prop.type);
      this.write(" `json:" + JSON.stringify(prop.name) + "`");
    }

    this.indent--;
    this.line("}");
    this.line();
  }
}