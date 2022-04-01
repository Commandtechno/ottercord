import { marked } from "marked";

import {
  Tree,
  StructureType,
  Type,
  Endpoint,
  EndpointParam,
  EndpointRequest
} from "../../common";

import { Context } from "../context";

import {
  trimText,
  flattenBlock,
  formatTable,
  generateType,
  isArray,
  isPartial,
  parseProperty,
  stripBrackets,
  parseLink
} from "../util";

export class EndpointEngine implements Endpoint {
  tree: Tree = [];

  name: string;
  description?: string;

  method: string;
  path: EndpointParam[];
  query?: StructureType;

  request?: EndpointRequest;
  response?: Type;

  #ctx: Context;

  #current: "none" | "query" | "request" | "response" | "response-example" =
    "none";

  #state = {
    partial: false,
    json: false,
    form: false
  };

  get blocked() {
    return this.#current !== "none";
  }

  get ready() {
    return this.#current === "none";
  }

  constructor(block: marked.Token) {
    if (block.type === "heading") {
      let [name, route] = block.text.split("%");
      if (!name || !route) throw "invalid";

      const [method, path] = route.trim().split(" ");
      if (!method || !path) throw "invalid";

      this.name = name.trim();

      this.method = method.trim();
      this.path = [];

      const params = path.slice(1).split(/(?<!{[^{}\/]+)\/(?![^{}\/]+})/g);
      for (const param of params) {
        if (param.startsWith("{") && param.endsWith("}")) {
          const [name, link] = param.slice(1, -1).split("#");
          this.path.push({ type: "variable", name, link });
          continue;
        }

        this.path.push({ type: "literal", value: param });
      }
    } else {
      throw "invalid";
    }
  }

  process(block: marked.Token) {
    switch (this.#current) {
      case "none":
        return this.processNone(block);

      case "query":
        return this.processQuery(block);

      case "request":
        return this.processRequest(block);

      case "response":
        return this.processResponse(block);

      case "response-example":
        return this.processResponseExample(block);
    }
  }

  processNone(block: marked.Token) {
    switch (block.type) {
      case "blockquote":
        if (block.text.includes("optional")) this.#state.partial = true;
        if (block.text.includes("nullable")) this.#state.partial = true;
        break;

      case "paragraph":
        this.description ??= trimText(flattenBlock(block));

        if (block.text.includes("optional")) this.#state.partial = true;
        if (block.text.includes("nullable")) this.#state.partial = true;

        if (!this.request) {
          let after = false;
          let before = true;
          for (const token of block.tokens) {
            if (!("text" in token)) continue;
            let { text } = token;

            if (!after) {
              const bodyIsIndex = text.toLowerCase().indexOf("body is");
              if (bodyIsIndex !== -1) {
                after = true;
                before = true;
                text = text.slice(bodyIsIndex + "body is".length + 1);
              }
            }

            if (before) {
              const dotIndex = text.toLowerCase().indexOf(".");
              if (dotIndex !== -1) {
                after = false;
                before = false;
                text = text.slice(0, dotIndex + ".".length - 1);
              }
            }

            if (after && before) {
              if (token.type === "link") {
                this.request = {
                  json: true,
                  form: false,
                  type: {
                    array: isArray(block.text),
                    partial: isPartial(block.text),

                    type: "reference",
                    link: parseLink(token.href)
                  }
                };

                break;
              }
            }
          }
        }

        if (!this.response) {
          let after = false;
          let before = true;

          for (const token of block.tokens) {
            if (!("text" in token)) continue;
            let { text } = token;

            if (!after) {
              const returnsIndex = text.toLowerCase().indexOf("returns");
              if (returnsIndex !== -1) {
                after = true;
                before = true;
                text = text.slice(returnsIndex + "returns".length + 1);
              }
            }

            if (before) {
              const objectIndex = text.toLowerCase().indexOf("object");
              if (objectIndex !== -1) {
                before = false;
                text = text.slice(objectIndex + "object".length + 1);
              }
            }

            if (before) {
              const dotIndex = text.toLowerCase().indexOf(".");
              if (dotIndex !== -1) {
                after = false;
                before = false;
                text = text.slice(0, dotIndex + ".".length - 1);
              }
            }

            if (after && before) {
              if (token.type === "link") {
                this.response = {
                  array: isArray(block.text),
                  partial: isPartial(block.text),

                  type: "reference",
                  link: parseLink(token.href)
                };

                break;
              }
            }
          }
        }

        break;

      case "heading":
        switch (trimText(stripBrackets(block.text))) {
          case "Query String Params":
            this.#current = "query";
            break;

          case "JSON Params":
            this.#current = "request";
            this.#state.json = true;
            this.#state.form = false;
            break;

          case "Form Params":
            this.#current = "request";
            this.#state.json = false;
            this.#state.form = true;
            break;

          case "JSON/Form Params":
            this.#current = "request";
            this.#state.json = true;
            this.#state.form = true;
            break;

          case "Response Body":
          case "Response Structure":
          case "JSON Response":
            this.#current = "response";
            break;

          case "Example Response":
            this.#current = "response-example";
            break;
        }
        break;
    }
  }

  processQuery(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.query = {
        array: false,
        partial: false,

        type: "structure",
        props: table.map(parseProperty)
      };

      this.#current = "none";
    }
  }

  processRequest(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      const type: Type = {
        array: false,
        partial: this.#state.partial,

        type: "structure",
        props: table.map(parseProperty)
      };

      if (this.request) {
        if (Array.isArray(this.request.type)) this.request.type.push(type);
        else this.request.type = [this.request.type, type];
      } else
        this.request = {
          json: this.#state.json,
          form: this.#state.form,

          type
        };

      this.#current = "none";
    }
  }

  processResponse(block: marked.Token) {
    if (block.type === "table") {
      if (!this.response) {
        const table = formatTable(block);
        this.response = {
          array: false,
          partial: false,

          type: "structure",
          props: table.map(parseProperty)
        };
      }

      this.#current = "none";
    }
  }

  processResponseExample(block: marked.Token) {
    if (block.type === "code") {
      if (!this.response) {
        const json = JSON.parse(block.text);
        this.response = generateType(json);
      }

      this.#current = "none";
    }
  }
}