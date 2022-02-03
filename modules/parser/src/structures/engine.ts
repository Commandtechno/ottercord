import { formatText, formatTable, parseType } from "../util";
import { Context, Structure } from ".";
import { marked } from "marked";

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
          const rawType = row.type.text;
          const rawName = row.field.text;
          const type = parseType(row.type);
          const name = formatText(rawName);
          const description = row.description.text;
          const required: boolean =
            row.required?.text === "Yes" || rawType?.includes("?") || rawName.includes("?");

          return {
            type,
            name,
            description,
            required
          };
        })
      );

      this.context = "none";
    }
  }
}