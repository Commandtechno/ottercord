import { marked } from "marked";

import { Tree, Constant, ConstantProperty } from "../../common";

import {
  flattenBlock,
  formatTable,
  lastSplit,
  stripBrackets,
  stripPlural,
  trimText
} from "../util";

export class ConstantEngine implements Constant {
  tree: Tree = [];

  name: string;
  description?: string;

  props: ConstantProperty[];

  get blocked() {
    return false;
  }

  get ready() {
    return this.props.length > 0;
  }

  constructor(block: marked.Token) {
    if (block.type === "heading") {
      this.name = block.text;
      this.props = [];
    } else {
      throw "invalid";
    }
  }

  // todo make better lol
  process(block: marked.Token) {
    if (block.type === "paragraph") {
      this.description = trimText(flattenBlock(block));
    }

    if (block.type === "table" && !this.props.length) {
      let [, primaryKey] = lastSplit(this.name, " ");
      if (!primaryKey) return; // name is one word like Limits
      primaryKey = stripPlural(trimText(primaryKey.toLowerCase()));

      const table = formatTable(block);
      this.props = table.map(row => {
        let name: string;
        let description: string;
        let rawValue: string;

        /*
        name
        */

        // name can be name or field row
        // primary key and next key as a fallback
        if (!name && row.name) {
          name = trimText(stripBrackets(flattenBlock(row.name)));
          delete row.name;
        }

        if (!name && row.field) {
          name = trimText(stripBrackets(flattenBlock(row.field)));
          delete row.field;
        }

        if (!name && row[primaryKey]) {
          name = trimText(stripBrackets(flattenBlock(row[primaryKey])));
          delete row[primaryKey];
        }

        if (!name) {
          const [firstKey] = Object.keys(row);
          if (firstKey) {
            name = trimText(stripBrackets(flattenBlock(row[firstKey])));
            delete row[firstKey];
          }
        }

        /*
        description
        */

        // description will never come first
        // name can also be the first key next that can be description
        // otherwise description may come before value
        // goes from explanation to description because sometimes its explanation
        // doesnt have any fallbacks because its optional lol
        if (!description && row.explanation) {
          description = trimText(flattenBlock(row.explanation));
          delete row.explanation;
        }

        if (!description && row.description) {
          description = trimText(flattenBlock(row.description));
          delete row.description;
        }

        /*
        value
        */

        // value can be the value row or the primary key
        // next key or name as a fallback
        if (!rawValue && row.value) {
          rawValue = trimText(stripBrackets(flattenBlock(row.value)));
          delete row.value;
        }

        // primary key is like "User Flags" > flag row
        if (!rawValue && row[primaryKey]) {
          rawValue = trimText(stripBrackets(flattenBlock(row[primaryKey])));
          delete row[primaryKey];
        }

        // value is an alternate field
        if (!rawValue) {
          const [firstKey] = Object.keys(row);
          if (firstKey) {
            rawValue = trimText(stripBrackets(flattenBlock(row[firstKey])));
            delete row[firstKey];
          }
        }

        // some constants like features have the same value as name
        if (!rawValue) {
          rawValue = name;
        }

        let value: string | number;

        // resolve bitshifts for flags
        if (rawValue.includes("<<")) {
          const [left, right] = rawValue.split("<<");
          value = Number(left) << Number(right);
        }

        // if value is a number, use the number
        else if (!isNaN(Number(rawValue))) value = Number(rawValue);
        else value = rawValue;

        return {
          name,
          description,

          value
        };
      });
    }
  }
}