import { formatText, formatTable, parseType } from "../util";
import { marked } from "marked";

import { Structure } from "../../../common/build";
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
          name: formatText(block.text),
          params: []
        };

        this.context = "structure";
      }
    }
  }

  async processStructure(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      this.currentStructure.params = await Promise.all(
        table.map(async row => {
          let optional = false;
          if (row.field.text.endsWith("?")) {
            optional = true;
          }

          let nullable = false;
          if (row.type.text.startsWith("?")) {
            nullable = true;
          }

          return {
            type: parseType(row),
            name: row.field.text,
            description: row.description.text,
            optional,
            nullable
          };
        })
      );

      this.context = "none";
    }
  }
}