import { marked } from "marked";

import {
  Tree,
  StructureType,
  Type,
  Endpoint,
  EndpointParam,
  EndpointRequest
} from "../../common";

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
  path: string;
  params: EndpointParam[];
  query?: StructureType;

  request?: EndpointRequest;
  response?: Type;

  #context: "none" | "query" | "request" | "response" | "response-example" =
    "none";
  #state = {
    partial: false,
    json: false,
    form: false
  };

  get block() {
    return this.#context !== "none";
  }

  get ready() {
    return this.#context === "none";
  }

  constructor(block: marked.Token) {
    if (block.type === "heading") {
      const [name, route] = block.text.split("%");
      if (!name || !route) throw "invalid";

      this.name = name.trim();

      const [method, path] = route.trim().split(" ");
      if (!method || !path) throw "invalid";

      this.method = method.trim();
      this.path = path.trim();

      const params: EndpointParam[] = [];
      this.path = path.replace(/(?<=\{).+?(?=\})/g, param => {
        const [name, link] = param.split("#");
        params.push({ name, link });
        return name;
      });

      this.params = params;
    } else {
      throw "invalid";
    }
  }

  process(block: marked.Token) {
    switch (this.#context) {
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

        if (!this.response) {
          let after = false;
          let before = true;
          for (const token of block.tokens) {
            // @ts-ignore
            if (!token.text) {
              continue;
            }

            if (!after) {
              // @ts-ignore
              const returnsIndex = token.text.toLowerCase().indexOf("returns");
              if (returnsIndex !== -1) {
                after = true;
                before = true;
                // before = false;
                // @ts-ignore
                token.text = token.text.slice(returnsIndex + 8);
              }
            }

            if (before) {
              // @ts-ignore
              const objectIndex = token.text.toLowerCase().indexOf("object");
              if (objectIndex !== -1) {
                before = false;
                // @ts-ignore
                token.text = token.text.slice(objectIndex + 6);
              }
            }

            if (before) {
              // @ts-ignore
              const dotIndex = token.text.toLowerCase().indexOf(".");
              if (dotIndex !== -1) {
                after = false;
                before = false;
                // @ts-ignore
                token.text = token.text.slice(0, dotIndex);
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
            this.#context = "query";
            break;

          case "JSON Params":
            this.#context = "request";
            this.#state.json = true;
            this.#state.form = false;
            break;

          case "Form Params":
            this.#context = "request";
            this.#state.json = false;
            this.#state.form = true;
            break;

          case "JSON/Form Params":
            this.#context = "request";
            this.#state.json = true;
            this.#state.form = true;
            break;

          case "Response Structure":
          case "JSON Response":
            this.#context = "response";
            break;

          case "Example Response":
            this.#context = "response-example";
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

      this.#context = "none";
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

      this.#context = "none";
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

      this.#context = "none";
    }
  }

  processResponseExample(block: marked.Token) {
    if (block.type === "code") {
      if (!this.response) {
        const json = JSON.parse(block.text);
        this.response = generateType(json);
      }

      this.#context = "none";
    }
  }
}