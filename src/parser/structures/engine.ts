import { formatTable, parseParam, parseType } from "../util";
import { marked } from "marked";

import { Structure } from "../../common";
import { Context } from ".";

// structure must contain type and field or name
export function isStructure(block: marked.Tokens.Table) {
  return (
    block.header.some(header => header.text.toLowerCase() === "type") &&
    block.header.some(
      header => header.text.toLowerCase() === "field" || header.text.toLowerCase() === "name"
    )
  );
}

export class StructuresEngine {
  structures: Structure[] = [];

  context: Context = "none";
  currentStructure: Structure;

  constructor() {}

  finish() {
    if (this.currentStructure?.params.length) this.structures.push(this.currentStructure);
    return this.structures;
  }

  process(block: marked.Token) {
    switch (this.context) {
      case "none":
        return this.processNone(block);

      case "structure":
        return this.processStructure(block);
    }
  }

  processNone(block: marked.Token) {
    if (block.type === "heading" && block.depth > 5) {
      // endpoint parser collects response structures
      if (!block.text.toLowerCase().includes("response")) {
        if (this.currentStructure?.params.length) this.structures.push(this.currentStructure);
        this.currentStructure = {
          name: block.text.trim().replace("Object", "Structure"),
          params: []
        };

        this.context = "structure";
      }
    }
  }

  processStructure(block: marked.Token) {
    switch (block.type) {
      // todo make less scuffed
      case "heading":
        this.currentStructure = null;
        this.context = "none";
        break;

      case "table":
        if (!isStructure(block)) {
          this.currentStructure = null;
          this.context = "none";
          return;
        }

        const table = formatTable(block);
        this.currentStructure.params = table.map(parseParam);
        this.context = "none";
        break;
    }
  }
}