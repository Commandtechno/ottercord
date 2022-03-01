import { marked } from "marked";

import {
  flattenBlock,
  formatTable,
  lastSplit,
  stripBrackets,
  stripPlural,
  trimText
} from "../util";

import { Tree, Constant, ConstantProperty } from "../../common";
import { Status } from "../types";

export class ConstantEngine implements Constant {
  tree: Tree = [];

  name: string;
  description?: string;

  properties: ConstantProperty[];

  get status(): Status {
    return this.properties.length ? Status.Completed : Status.None;
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
    if (block.type === "paragraph") {
      this.description = trimText(flattenBlock(block));
    }

    if (block.type === "table") {
      let [, primaryKey] = lastSplit(this.name, " ");
      if (!primaryKey) return; // name is one word like Limits
      primaryKey = stripPlural(trimText(primaryKey.toLowerCase()));

      const table = formatTable(block);
      this.properties = table.map(row => {
        let key: string;
        let description: string;
        let rawValue: string;

        /*
        key
        */

        // key can be name or field row
        // primary key and next key as a fallback
        if (!key && row.name) {
          key = trimText(stripBrackets(flattenBlock(row.name)));
          delete row.name;
        }

        if (!key && row.field) {
          key = trimText(stripBrackets(flattenBlock(row.field)));
          delete row.field;
        }

        if (!key && row[primaryKey]) {
          key = trimText(stripBrackets(flattenBlock(row[primaryKey])));
          delete row[primaryKey];
        }

        if (!key) {
          const [firstKey] = Object.keys(row);
          if (firstKey) {
            key = trimText(stripBrackets(flattenBlock(row[firstKey])));
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
          rawValue = key;
        }

        let value: string | number;

        // resolve bitshifts for flags
        if (rawValue.includes("<<")) {
          const [left, right] = rawValue.split("<<");
          value = parseInt(left) << parseInt(right);
        }

        // if value is a number, use the number
        else if (!isNaN(parseInt(rawValue))) value = parseInt(rawValue);
        else value = rawValue;

        return {
          key,
          description,

          value
        };
      });
    }
  }
}