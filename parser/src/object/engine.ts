import { marked } from "marked";
import { Context, _Object } from ".";
import { flattenBlock, formatTable } from "../util";

export class Engine {
  structures: Structure[] = [];

  context: Context = "none";
  currentStructure: Structure;

  constructor() {}

  finish() {
    if (this.currentStructure) this.structures.push(this.currentStructure);
    return this.structures;
  }

  process(block: marked.Token) {
    console.log(this.context);
    switch (this.context) {
      case "none":
        this.processNone(block);
        break;

      case "object":
        this.processObject(block);
        break;

      case "structure":
        this.processStructure(block);
        break;
    }
  }

  processNone(block: marked.Token) {
    if (block.type === "heading" && block.depth === 3) {
      if (block.text.toLowerCase().endsWith("object")) {
        this.context = "object";
      }
    }
  }

  processObject(block: marked.Token) {
    switch (block.type) {
      case "paragraph":
        if (!this.currentStructure.description)
          this.currentStructure.description = flattenBlock(block);
        break;

      case "heading":
        if (block.depth > 5) {
          if (block.text.toLowerCase().endsWith("structure")) {
            this.currentStructure = {
              name: block.text.slice(0, -"structure".length).trim(),
              params: []
            };

            this.context = "structure";
          }
        }
        break;
    }
  }

  processStructure(block: marked.Token) {
    if (block.type === "table") {
      const table = formatTable(block);
      console.log(this.currentStructure, table);
    }
  }
}