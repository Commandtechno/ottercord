import { flattenBlock, formatTable, stripBrackets } from "../util";
import { marked } from "marked";

import { Constant, ConstantProperty } from "../../common";

export class ConstantEngine implements Constant {
  name: string;
  description?: string;

  properties: ConstantProperty[];

  get ready() {
    return this.properties.length > 0;
  }

  constructor(block: marked.Token) {
    if (block.type === "heading" && block.depth > 5) {
      this.name = block.text;
      this.properties = [];
    } else {
      throw "not constant";
    }
  }

  process(block: marked.Token) {
    if (block.type === "paragraph") this.description = block.text;
    if (block.type === "table") {
      const table = formatTable(block);
      this.properties = table.map(row => {
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
    }
  }
}