import { marked } from "marked";

import { Endpoint, EndpointParam, EndpointRequest, StructureType, Type } from "../../common";
import {
  trimText,
  flattenBlock,
  formatTable,
  isArray,
  isPartial,
  isDeprecated,
  parseProperty,
  stripBrackets,
  parseLink
} from "../util";

export class EndpointEngine implements Endpoint {
  name: string;
  description?: string;

  method: string;
  path: string;
  params: EndpointParam[];
  query?: StructureType;

  request?: EndpointRequest;
  response?: Type;

  #context: "none" | "query" | "request" | "response" = "none";
  #state: { optional: boolean; json: boolean; form: boolean } = {
    optional: false,
    json: false,
    form: false
  };

  get ready() {
    return true;
  }

  constructor(block: marked.Token) {
    if (block.type === "heading" && block.depth < 3) {
      const [name, route] = block.text.split("%");
      if (!name || !route) throw "not endpotni";

      this.name = name.trim();

      const [method, path] = route.trim().split(" ");
      if (!method || !path) throw "not endpotni";

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
      throw "not endpotni ethier";
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
    }
  }

  processNone(block: marked.Token) {
    switch (block.type) {
      case "blockquote":
        if (block.text.includes("optional")) this.#state.optional = true;
        break;

      case "paragraph":
        this.description ??= trimText(flattenBlock(block));

        if (block.text.includes("optional")) this.#state.optional = true;
        if (!this.response) {
          let afterReturn = false;
          let beforeDot = true;
          for (const token of block.tokens) {
            // @ts-ignore
            if (!token.text) {
              continue;
            }

            if (!afterReturn) {
              // @ts-ignore
              const returnsIndex = token.text.toLowerCase().indexOf("returns");
              if (returnsIndex !== -1) {
                afterReturn = true;
                beforeDot = true;
                // beforeDot = false;
                // @ts-ignore
                token.text = token.text.slice(returnsIndex + 8);
              }
            }

            if (beforeDot) {
              // @ts-ignore
              const dotIndex = token.text.toLowerCase().indexOf(".");
              if (dotIndex !== -1) {
                afterReturn = false;
                beforeDot = false;
                // @ts-ignore
                token.text = token.text.slice(0, dotIndex);
              }
            }

            if (afterReturn && beforeDot) {
              if (token.type === "link") {
                this.response = {
                  array: isArray(block.text),
                  partial: isPartial(block.text),
                  deprecated: isDeprecated(block.text),

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

          case "Response Structure":
          case "JSON Response":
            this.#context = "response";
            break;

          case "JSON Params":
            this.#context = "request";
            this.#state.json = true;
            break;

          case "Form Params":
            this.#context = "request";
            this.#state.form = true;
            break;

          case "JSON/Form Params":
            this.#context = "request";
            this.#state.json = true;
            this.#state.form = true;
            break;

          // default:
          //   try {
          //     new EndpointEngine(block);
          //     return true;
          //   } catch {
          //     break;
          //   }
        }
        break;
    }
  }

  processQuery(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.query = {
        type: "structure",
        properties: table.map(parseProperty)
      };

      this.#context = "none";
    }
  }

  processRequest(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.request = {
        json: this.#state.json,
        form: this.#state.form,

        type: "structure",
        properties: table.map(parseProperty)
      };

      this.#context = "none";
    }
  }

  processResponse(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.response = {
        type: "structure",
        properties: table.map(parseProperty)
      };

      this.#context = "none";
    }
  }
}