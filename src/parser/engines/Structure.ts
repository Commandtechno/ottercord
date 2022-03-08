import { marked } from "marked";

import { formatTable, parseProperty } from "../util";
import { Property, Structure, Tree } from "../../common";
import { Status } from "../types";

export class StructureEngine implements Structure {
  tree: Tree = [];

  name: string;
  description?: string;

  type: "structure";
  props: Property[];

  get status(): Status {
    return this.props.length ? Status.Completed : Status.None;
  }

  constructor(block: marked.Token) {
    if (block.type === "heading" && block.depth > 3) {
      this.name = block.text;
      this.props = [];
    } else {
      throw "not structure";
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