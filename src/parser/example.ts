import { formatTable, parseProperty } from "./util";
import { marked } from "marked";

import { Property, Example } from "../common";

export default class implements Example {
  name: string;
  description?: string;

  content: string;

  get ready() {
    return !!this.content;
  }

  constructor(block: marked.Token) {
    if (block.type === "heading" && block.depth > 5) {
      this.name = block.text;
    } else {
      throw "not eggsample";
    }
  }

  process(block: marked.Token) {
    switch (block.type) {
      case "code":
        try {
          this.content = JSON.parse(block.text);
        } catch {
          // console.log(this.name, block.lang);
        }
    }
  }
}