import { marked } from "marked";

import { Example } from "../../common";

export class ExampleFactory implements Example {
  tree: string[] = [];
  type: "example" = "example";

  name: string;
  description?: string;

  language: string;
  content: string;

  get blocked() {
    return false;
  }

  get ready() {
    return !!this.content;
  }

  constructor(block: marked.Token) {
    if (block.type === "heading") {
      this.name = block.text;
    } else {
      throw "invalid";
    }
  }

  process(block: marked.Token) {
    switch (block.type) {
      case "code":
        this.language = block.lang;
        this.content = block.text;
    }
  }
}