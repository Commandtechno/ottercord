import { cleanText, formatTable } from "../util";
import { marked } from "marked";

import { Constant } from "../../../common/build";
import { Context } from ".";

export class ConstantsEngine {
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
        block.text.toLowerCase().endsWith("modes") ||
        block.text.toLowerCase().endsWith("events") ||
        block.text.toLowerCase().endsWith("status") ||
        block.text.toLowerCase().endsWith("features") ||
        block.text.toLowerCase().endsWith("behaviors") ||
        block.text.toLowerCase().endsWith("metadata") ||
        block.text.toLowerCase().endsWith("level") ||
        block.text.toLowerCase().endsWith("tier") ||
        block.text.toLowerCase().endsWith("key") ||
        block.text.toLowerCase().endsWith("info")
      ) {
        if (this.currentConstant) this.constants.push(this.currentConstant);
        this.currentConstant = {
          name: block.text,
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
        const rawName = (
          row.key ??
          row.name ??
          row.field ??
          row.type ??
          row.flag ??
          row.mode ??
          row.event ??
          row.feature ??
          row.level ??
          row.tier
        ).text;

        const rawValue = (row.value ?? row.id)?.text ?? rawName;
        const description = row.description?.text;

        const name = rawName;
        let value: string | number;
        if (rawValue.includes("<<")) {
          const [rawA, rawB] = rawValue.split("<<");
          const a = parseInt(rawA);
          const b = parseInt(rawB);
          value = a << b;
        } else {
          value = parseInt(rawValue);
          if (isNaN(value)) value = cleanText(rawValue);
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