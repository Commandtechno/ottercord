import { formatTable, parseProperty } from "./util";
import { marked } from "marked";

import { Property, Structure } from "../common";

export default class implements Structure {
  name: string;
  description?: string;

  type: "structure";
  properties: Property[];

  get ready() {
    return this.properties.length > 0;
  }

  constructor(block: marked.Token) {
    if (block.type === "heading" && block.depth > 5) {
      this.name = block.text;
      this.properties = [];
    } else {
      throw "not structure";
    }
  }

  process(block: marked.Token) {
    switch (block.type) {
      case "table":
        // structure must contain type and field or name header
        if (
          !block.header.some(header => header.text.toLowerCase() === "type") ||
          !block.header.some(
            header => header.text.toLowerCase() === "field" || header.text.toLowerCase() === "name"
          )
        )
          return;

        const table = formatTable(block);
        this.properties = table.map(parseProperty);
        break;
    }
  }
}