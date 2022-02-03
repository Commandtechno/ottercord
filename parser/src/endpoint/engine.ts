import { Context, Endpoint, parseEndpoint } from ".";

import { flattenBlock, formatTable, formatText, parseType } from "../util";
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

  async process(block: marked.Token) {
    switch (this.context) {
      case "none":
        return this.processNone(block);

      case "endpoint":
        return this.processEndpoint(block);

      case "query":
        return this.processQuery(block);

      case "response":
        return this.processResponse(block);

      case "json-body":
      case "form-body":
      case "json-form-body":
        return this.processBody(block);
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
          if (
            block.text.toLowerCase().includes("return") ||
            block.text.toLowerCase().includes("respond") ||
            block.text.toLowerCase().includes("response")
          ) {
            const response = parseType(block);
            if (response) this.currentEndpoint.response = response;
          }
        }

        if (!this.currentEndpoint.description)
          this.currentEndpoint.description = flattenBlock(block);
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
        type: formatText(row.type.text),
        name: formatText(row.field.text),
        description: formatText(row.description.text),
        required: row.required?.text === "true"
      }));

      this.context = "endpoint";
    }
  }

  processResponse(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.currentEndpoint.response = {
        reference: false,
        array: false,
        value: table.map(row => ({
          type: formatText(row.type.text),
          name: formatText(row.field.text),
          description: formatText(row.description?.text),
          required: row.required?.text === "true"
        }))
      };

      this.context = "endpoint";
    }
  }

  async processBody(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.currentEndpoint.body = {
        json: this.context === "json-body" || this.context === "json-form-body",
        form: this.context === "form-body" || this.context === "json-form-body",
        params: await Promise.all(
          table.map(row => ({
            type: parseType(row.type),
            name: formatText(row.field.text),
            description: formatText(row.description.text),
            required: row.required?.text === "true"
          }))
        )
      };

      this.context = "endpoint";
    }
  }
}