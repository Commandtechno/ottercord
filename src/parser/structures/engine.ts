import { formatTable, parseParam, parseType } from "../util";
import { marked } from "marked";

import { Structure } from "../../common";
import { Context } from ".";

export class StructuresEngine {
  structures: Structure[] = [];

  context: Context = "none";
  currentStructure: Structure;

  constructor() {}

  finish() {
    if (this.currentStructure) this.structures.push(this.currentStructure);
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
      if (block.text !== "Response Structure" && block.text.toLowerCase().endsWith("structure")) {
        if (this.currentStructure) this.structures.push(this.currentStructure);
        this.currentStructure = {
          name: block.text.trim(),
          params: []
        };

        this.context = "structure";
      }
    }
  }

  processStructure(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.currentStructure.params = table.map(parseParam);

      this.context = "none";
    }
  }
}