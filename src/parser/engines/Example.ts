import { marked } from "marked";

import { Tree, Example } from "../../common";

export class ExampleEngine implements Example {
  tree: Tree = [];

  name: string;
  description?: string;

  language: string;
  content: string;

  get block() {
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