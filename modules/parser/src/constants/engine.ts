import { formatText, formatTable, parseType } from "../util";
import { Constant, Context } from ".";
import { marked } from "marked";

export class Engine {
  constants: Constant[] = [];

  context: Context = "none";
  currentConstant: Constant;

  constructor() {}

  finish() {
    if (this.currentConstant) this.constants.push(this.currentConstant);
    return this.constants;
  }

  process(block: marked.Token) {
    switch (this.context) {
      case "none":
        return this.processNone(block);

      case "constant":
        return this.processConstant(block);
    }
  }

  processNone(block: marked.Token) {
    if (block.type === "heading" && block.depth > 5) {
      if (
        block.text.toLowerCase().endsWith("types") ||
        block.text.toLowerCase().endsWith("flags") ||
        block.text.toLowerCase().endsWith("modes")
      ) {
        if (this.currentConstant) this.constants.push(this.currentConstant);
        this.currentConstant = {
          name: formatText(block.text),
          values: []
        };

        this.context = "constant";
      }
    }
  }

  processConstant(block: marked.Token) {
    if (block.type === "paragraph") {
      this.currentConstant.description = block.text;
    }

    if (block.type === "table") {
      const table = formatTable(block);
      this.currentConstant.values = table.map(row => {
        const rawName = (row.name ?? row.type ?? row.flag ?? row.mode).text;
        const rawValue = (row.value ?? row.id)?.text ?? rawName;
        const description = row.description?.text;

        const name = formatText(rawName);
        let value: string | number;
        if (rawValue.includes("<<")) {
          const [rawA, rawB] = rawValue.split("<<");
          const a = parseInt(rawA);
          const b = parseInt(rawB);
          value = a << b;
        } else {
          value = parseInt(rawValue);
          if (isNaN(value)) value = formatText(rawValue);
        }

        return {
          name,
          value,
          description
        };
      });

      this.context = "none";
    }
  }
}