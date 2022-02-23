import { flattenBlock, formatTable, trimText } from "../util";
import { marked } from "marked";

import { Constant, ConstantProperty } from "../../common";

export default class implements Constant {
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

  // todo make better lol
  process(block: marked.Token) {
    if (block.type === "paragraph") this.description = block.text;
    if (block.type === "table") {
      const table = formatTable(block);
      this.properties = table.map(row => {
        let name: string;
        let description: string;
        let rawValue: string;

        if (!name && row.field) {
          name = trimText(flattenBlock(row.field));
          delete row.field;
        }

        if (!name && row.name) {
          name = trimText(flattenBlock(row.name));
          delete row.name;
        }

        if (!name && row.description) {
          name = trimText(flattenBlock(row.description));
          delete row.description;
        }

        if (!rawValue && row.value) {
          rawValue = trimText(flattenBlock(row.value));
          delete row.value;
        }

        // remove
        if (!rawValue && row.code) {
          rawValue = trimText(flattenBlock(row.code));
          delete row.code;
        }

        if (!description && row.description) {
          description = trimText(flattenBlock(row.description));
          delete row.description;
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
        // if value is a number, use the number
        if (!isNaN(parseInt(rawValue))) value = parseInt(rawValue);
        // resolve bitshifts for flags
        else if (rawValue.includes("<<")) {
          const [left, right] = rawValue.split("<<");
          value = parseInt(left) << parseInt(right);
        } else value = rawValue;

        return {
          name,
          description,

          value
        };
      });
    }
  }
}