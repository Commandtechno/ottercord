import { marked } from "marked";

import { flattenBlock, formatTable, parseProperty, trimText } from "../util";
import { StructureProperty, Structure } from "../../common";

export class StructureFactory implements Structure {
  tree: string[] = [];
  type: "structure" = "structure";

  name: string;
  description?: string;

  props: StructureProperty[] = [];

  get blocked() {
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
    if (block.type === "paragraph") {
      this.description = trimText(flattenBlock(block));
    }

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