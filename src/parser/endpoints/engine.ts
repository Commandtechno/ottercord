import { Endpoint, EndpointParam, EndpointRequest, PropertyType, Type } from "../../common";

import { stripBrackets, formatTable, isArray, isPartial, parseParam, isDeprecated } from "../util";
import { marked } from "marked";

export class EndpointEngine implements Endpoint {
  name: string;
  description?: string;

  method: string;
  path: string;
  params: EndpointParam[];
  query?: PropertyType[];

  request?: EndpointRequest;
  response?: Type;

  private context: "none" | "query" | "request" | "response" = "none";
  private state: { optional: boolean; json: boolean; form: boolean } = {
    optional: false,
    json: false,
    form: false
  };

  constructor(block: marked.Token) {
    if (block.type === "heading" && block.depth < 3) {
      const [name, route] = block.text.split("%");
      if (!name || !route) throw new Error("not endpotni");

      this.name = name;

      const [method, path] = route.trim().split(" ");
      if (!method || !path) throw new Error("not endpotni");

      this.method = method;
      this.path = path;

      const params: EndpointParam[] = [];
      this.path = path.replace(/(?<=\{).+?(?=\})/g, param => {
        const [name, link] = param.slice(1, -1).split("#");
        params.push({ name, link });

        return `{${name}}`;
      });

      this.params = params;
    }

    throw new Error("not endpotni ethier");
  }

  process(block: marked.Token) {
    switch (this.context) {
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
        if (block.text.includes("optional")) this.state.optional = true;
        break;

      case "paragraph":
        if (block.text.includes("optional")) this.state.optional = true;
        if (!this.response) {
          let after = false;
          for (const token of block.tokens) {
            // @ts-ignore
            if (!token.text) {
              continue;
            }

            if (!after) {
              // @ts-ignore
              const returnsIndex = token.text.toLowerCase().indexOf("returns");
              if (returnsIndex !== -1) {
                // @ts-ignore
                token.text = token.text.slice(returnsIndex + 8);
                after = true;
              } else {
                break;
              }
            }

            // @ts-ignore
            const dotIndex = token.text.toLowerCase().indexOf(".");
            if (dotIndex !== -1) {
              break;
            }

            if (token.type === "link") {
              this.response = {
                array: isArray(block.text),
                partial: isPartial(block.text),
                deprecated: isDeprecated(block.text),

                type: "reference",
                link: token.href
              };

              break;
            }
          }
        }

        this.description ??= block.text;
        break;

      case "heading":
        switch (stripBrackets(block.text)) {
          case "Query String Params":
            this.context = "query";
            break;

          case "Response Structure":
          case "JSON Response":
            this.context = "response";
            break;

          case "JSON Params":
            this.context = "request";
            this.state.json = true;
            break;

          case "Form Params":
            this.context = "request";
            this.state.form = true;
            break;

          case "JSON/Form Params":
            this.context = "request";
            this.state.json = true;
            this.state.form = true;
            break;

          // default:
          //   try {
          //     new EndpointEngine(block);
          //     return "end";
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
      this.query = table.map(parseParam);
      this.context = "none";
    }
  }

  processRequest(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.request = {
        json: this.state.json,
        form: this.state.form,
        params: table.map(parseParam)
      };

      this.context = "none";
    }
  }

  processResponse(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.response = table.map(parseParam);
      this.context = "none";
    }
  }
}