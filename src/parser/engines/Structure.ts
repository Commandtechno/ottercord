import { marked } from "marked";

import { formatTable, parseProperty } from "../util";
import { Property, Structure, Tree } from "../../common";

export class StructureEngine implements Structure {
  tree: Tree = [];

  name: string;
  description?: string;

  type: "structure";
  props: Property[];

  get block() {
    return false;
  }

  get ready() {
    return this.props.length > 0;
  }

  constructor(block: marked.Token) {
    if (block.type === "heading") {
      this.name = block.text;
      this.props = [];
    } else {
      throw "invalid";
    }
  }

  process(block: marked.Token) {
    if (block.type === "table") {
      // structure must contain type and field or name header
      if (
        !block.header.some(header => header.text.toLowerCase() === "type") ||
        !block.header.some(
          header =>
            header.text.toLowerCase() === "field" ||
            header.text.toLowerCase() === "name"
        )
      )
        return;

      const table = formatTable(block);
      this.props = table.map(parseProperty);
    }
  }
}