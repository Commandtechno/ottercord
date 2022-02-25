import { flattenBlock, formatTable, lastSplit, stripBrackets, stripPlural, trimText } from "./util";
import { marked } from "marked";

import { Constant, ConstantProperty } from "../common";

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
    if (block.type === "paragraph" && this.ready) {
      this.description = trimText(flattenBlock(block));
    }

    if (block.type === "table") {
      // test
      let [, valueKey] = lastSplit(this.name, " ");
      if (!valueKey) return; // Limits
      valueKey = stripPlural(trimText(valueKey.toLowerCase()));

      const table = formatTable(block);
      this.properties = table.map(row => {
        // const [longestKey] = Object.keys(row).sort(
        //   (a, b) => row[a].text.length - row[b].text.length
        // );

        // console.log(longestKey);

        let name: string;
        let description: string;
        let rawValue: string;

        // temp
        if (!name && valueKey && row[valueKey]) {
          // if (!isNaN(parseInt(row[valueKey].text)))
          //   rawValue = trimText(flattenBlock(row[valueKey]));
          // else
          // name = trimText(flattenBlock(row[valueKey]));
          rawValue = trimText(flattenBlock(row[valueKey]));
          delete row[valueKey];
        }

        // if (!name && row.name) {
        //   name = trimText(flattenBlock(row.name));
        //   delete row.name;
        // }

        if (!rawValue && row.value) {
          rawValue = trimText(flattenBlock(row.value));
          delete row.value;
        }

        // if (!description && row.description) {
        //   description = trimText(flattenBlock(row.description));
        //   delete row.description;
        // }

        // name is an alternate field
        if (!name) {
          const [firstKey] = Object.keys(row);
          if (firstKey) name = trimText(flattenBlock(row[firstKey]));
          else name = description;
          // else name = rawValue;
          delete row[firstKey];
        }

        if (!rawValue) {
          const [firstKey] = Object.keys(row);
          if (firstKey) rawValue = trimText(flattenBlock(row[firstKey]));
          else rawValue = name;
          delete row[firstKey];
        }

        if (!description) {
          const [firstKey] = Object.keys(row);
          if (firstKey) {
            description = trimText(flattenBlock(row[firstKey]));
            delete row[firstKey];
          }
        }

        let value: string | number;

        // resolve bitshifts for flags
        if (trimText(stripBrackets(rawValue)).includes("<<")) {
          const [left, right] = rawValue.split("<<");
          value = parseInt(left) << parseInt(right);
        }

        // if value is a number, use the number
        else if (!isNaN(parseInt(rawValue))) value = parseInt(rawValue);
        else value = rawValue;

        return {
          name: stripBrackets(name),
          description,

          value
        };
      });
    }
  }
}