import { Endpoint } from "../../../common/build";
import { Context, parseEndpoint } from ".";

import { formatTable, isArray, isPartial, parseAnchor, parseParam, parseType } from "../util";
import { marked } from "marked";

export class EndpointsEngine {
  endpoints: Endpoint[] = [];

  context: Context = "none";
  currentEndpoint: Endpoint;

  constructor() {}

  finish() {
    if (this.currentEndpoint) this.endpoints.push(this.currentEndpoint);
    return this.endpoints;
  }

  process(block: marked.Token) {
    switch (this.context) {
      case "none":
        return this.processNone(block);

      case "endpoint":
        return this.processEndpoint(block);

      case "query":
        return this.processQuery(block);

      case "json-request":
      case "form-request":
      case "json-form-request":
        return this.processRequest(block);

      case "response":
        return this.processResponse(block);
    }
  }

  processNone(block: marked.Token) {
    if (block.type === "heading" && block.depth < 3) {
      this.currentEndpoint = parseEndpoint(block.text);
      if (this.currentEndpoint) this.context = "endpoint";
    }
  }

  processEndpoint(block: marked.Token) {
    switch (block.type) {
      case "paragraph":
        if (!this.currentEndpoint.response) {
          const returnIndex = block.tokens.findIndex(token =>
            // @ts-ignore
            token.text?.toLowerCase().includes("return")
          );

          if (returnIndex > -1) {
            const link = block.tokens
              .slice(returnIndex + 1)
              .find(token => token.type === "link") as marked.Tokens.Link;

            if (link) {
              this.currentEndpoint.response = {
                reference: true,
                partial: isPartial(block.text),

                required: true,
                nullable: false,

                array: isArray(block.text),
                value: parseAnchor(link.href)
              };

              break;
            }
          }

          this.context = "response";
        }

        this.currentEndpoint.description ??= block.text;
        break;

      case "heading":
        switch (block.text) {
          case "Query String Params":
            this.context = "query";
            break;

          case "Response Structure":
            this.context = "response";
            break;

          case "JSON Params":
            this.context = "json-request";
            break;

          case "Form Params":
            this.context = "form-request";
            break;

          case "JSON/Form Params":
            this.context = "json-form-request";
            break;

          default:
            if (block.depth < 3) {
              const nextEndpoint = parseEndpoint(block.text);
              if (nextEndpoint) {
                this.endpoints.push(this.currentEndpoint);
                this.currentEndpoint = nextEndpoint;
              }
            }
            break;
        }
        break;
    }
  }

  processQuery(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.currentEndpoint.query = table.map(parseParam);

      this.context = "endpoint";
    }
  }

  processRequest(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.currentEndpoint.request = {
        json: this.context === "json-request" || this.context === "json-form-request",
        form: this.context === "form-request" || this.context === "json-form-request",
        params: table.map(parseParam)
      };

      this.context = "endpoint";
    }
  }

  processResponse(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.currentEndpoint.response = table.map(parseParam);
      this.context = "endpoint";
    }
  }
}