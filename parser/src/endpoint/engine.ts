import { Context, Endpoint, parseEndpoint } from ".";

import { flattenBlock, formatTable, resolveType } from "../util";
import { marked } from "marked";

export class Engine {
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
        this.processNone(block);
        break;

      case "endpoint":
        this.processEndpoint(block);
        break;

      case "query":
        this.processQuery(block);
        break;

      case "json-body":
      case "form-body":
      case "json-form-body":
        this.processBody(block);
        break;
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
        if (!this.currentEndpoint.description)
          this.currentEndpoint.description = flattenBlock(block);
        break;

      case "heading":
        switch (block.text) {
          case "Query String Params":
            this.context = "query";
            break;

          case "JSON Params":
            this.context = "json-body";
            break;

          case "Form Params":
            this.context = "form-body";
            break;

          case "JSON/Form Params":
            this.context = "json-form-body";
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
      this.currentEndpoint.query = table.map(row => ({
        type: row.type.text,
        name: row.field.text,
        description: row.description.text,
        required: row.required.text === "true"
      }));

      this.context = "endpoint";
    }
  }

  processBody(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.currentEndpoint.body = {
        json: this.context === "json-body" || this.context === "json-form-body",
        form: this.context === "form-body" || this.context === "json-form-body",
        params: table.map(row => ({
          type: resolveType(row.type),
          name: row.field.text,
          description: row.description.text,
          required: row.required?.text === "true"
        }))
      };

      this.context = "endpoint";
    }
  }
}