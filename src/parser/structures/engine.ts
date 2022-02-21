import { formatTable, parseParam, parseType } from "../util";
import { marked } from "marked";

import { Structure, StructureProperty } from "../../common";

export class StructureEngine implements Structure {
  name: string;
  // description?: string;

  properties: StructureProperty[];

  constructor(block: marked.Token) {
    if (block.type === "heading" && block.depth > 5) {
      this.name = block.text;
      this.properties = [];
    }

    throw new Error("not structure");
  }

  process(block: marked.Token) {
    switch (block.type) {
      // todo make less scuffed
      case "heading":
        throw "exit";

      case "table":
        // structure must contain type and field or name header
        if (
          !block.header.some(header => header.text.toLowerCase() === "type") ||
          !block.header.some(
            header => header.text.toLowerCase() === "field" || header.text.toLowerCase() === "name"
          )
        ) {
          throw "exit";
        }

        const table = formatTable(block);
        this.properties = table.map(parseParam);
        break;
    }
  }
}