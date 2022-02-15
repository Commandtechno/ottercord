import { flattenBlock, formatTable, stripBrackets } from "../util";
import { marked } from "marked";

import { isStructure } from "../structures";
import { Constant } from "../../common";
import { Context } from ".";

export class ConstantsEngine {
  constants: Constant[] = [];

  context: Context = "none";
  currentConstant: Constant;

  constructor() {}

  finish() {
    if (this.currentConstant?.values.length) this.constants.push(this.currentConstant);
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
        stripBrackets(block.text) !== "JSON Params" ||
        stripBrackets(block.text) !== "Form Params" ||
        stripBrackets(block.text) !== "JSON/Form Params"
      ) {
        if (this.currentConstant?.values.length) this.constants.push(this.currentConstant);
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
      // if it has a type header then it is a structure
      if (isStructure(block)) {
        this.currentConstant = null;
        this.context = "none";
        return;
      }

      const table = formatTable(block);
      this.currentConstant.values = table.map(row => {
        let name: string;
        let description: string;
        let rawValue: string;

        if (!name && row.field) {
          name = flattenBlock(row.field);
          delete row.field;
        }

        if (!name && row.name) {
          name = flattenBlock(row.name);
          delete row.name;
        }

        if (!description && row.description) {
          description = flattenBlock(row.description);
          delete row.description;
        }

        if (!rawValue && row.value) {
          rawValue = flattenBlock(row.value);
          delete row.value;
        }

        // name is an alternate field
        if (!name) {
          // console.log(Object.keys(row));
          const [firstKey] = Object.keys(row);
          name = flattenBlock(row[firstKey]);
          // console.log("name", firstKey, name);
          delete row[firstKey];
        }

        if (!rawValue) {
          // console.log(Object.keys(row));
          const [firstKey] = Object.keys(row);
          if (firstKey) {
            rawValue = row[firstKey].text;
            // console.log("value", firstKey, rawValue);
            delete row[firstKey];
          } else {
            rawValue = name;
          }
        }

        // // if name is a number, switch name and value
        // if (!isNaN(parseInt(name))) {
        //   // todo make flipped values    unique
        //   // but also you cant have numeric names
        //   // typescript is weird
        //   let oldName = name;
        //   name = rawValue;
        //   rawValue = oldName;
        // }

        let value: string | number;
        // resolve bitshifts for flags
        if (rawValue.includes("<<")) {
          const [left, right] = rawValue.split("<<");
          value = parseInt(left) << parseInt(right);
        } else {
          // if value is a number, use the number
          if (!isNaN(parseInt(rawValue))) value = parseInt(rawValue);
          else value = rawValue;
        }

        return {
          name,
          description,

          value
        };
      });

      this.context = "none";
    }
  }
}