import { Context, Endpoint, parseEndpoint } from ".";
import { flattenBlock, formatTable } from "../util";
import { marked } from "marked";

export class Engine {
  endpoints: Endpoint[] = [];

  currentEndpoint: Endpoint;
  context: Context = "none";

  constructor() {}

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
        this.processJsonBody(block);
        break;

      case "form-body":
        this.processFormBody(block);
        break;

      case "json-form-body":
        this.processJsonFormBody(block);
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
    switch (block.type) {
      case "table":
        const table = formatTable(block);
        this.currentEndpoint.query = table.map(row => ({
          type: row.type,
          name: row.field,
          description: row.description,
          required: row.required === "true"
        }));

        this.context = "endpoint";
        break;
    }
  }

  processJsonBody(block: marked.Token) {
    switch (block.type) {
      case "table":
        const table = formatTable(block);
        this.currentEndpoint.body = {
          json: true,
          form: false,
          params: table.map(row => ({
            type: row.type,
            name: row.field,
            description: row.description,
            required: row.required === "true"
          }))
        };

        this.context = "endpoint";
        break;
    }
  }

  processFormBody(block: marked.Token) {
    switch (block.type) {
      case "table":
        const table = formatTable(block);
        this.currentEndpoint.body = {
          json: false,
          form: true,
          params: table.map(row => ({
            type: row.type,
            name: row.field,
            description: row.description,
            required: row.required === "true"
          }))
        };

        this.context = "endpoint";
        break;
    }
  }

  processJsonFormBody(block: marked.Token) {
    switch (block.type) {
      case "table":
        const table = formatTable(block);
        this.currentEndpoint.body = {
          json: true,
          form: true,
          params: table.map(row => ({
            type: row.type,
            name: row.field,
            description: row.description,
            required: row.required === "true"
          }))
        };

        this.context = "endpoint";
        break;
    }
  }
}