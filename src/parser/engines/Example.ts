import { marked } from "marked";

import { Tree, Example } from "../../common";
import { Status } from "../types";

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
    if (block.type === "heading" && block.depth > 5) {
      this.name = block.text;
    } else {
      throw "not eggsample";
    }
  }

  process(block: marked.Token) {
    switch (block.type) {
      case "code":
        // try {
        //   this.content = JSON.parse(block.text);
        // } catch {
        //   // console.log(this.name, block.lang);
        // }
        this.language = block.lang;
        this.content = block.text;
    }
  }
}