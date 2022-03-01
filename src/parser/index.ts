import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

import { DOCS_DIR, Tree } from "../common";
import { Action } from "./types";

import {
  EndpointEngine,
  ExampleEngine,
  StructureEngine,
  ConstantEngine
} from "./engines";
import { Handler } from "./handler";

export async function parse(...pathSegments: string[]) {
  const path = resolve(DOCS_DIR, ...pathSegments);
  const file = await readFile(path, "utf8");
  const page = marked.lexer(file);

  const endpoints = new Handler(EndpointEngine);
  const examples = new Handler(ExampleEngine);
  const structures = new Handler(StructureEngine);
  const constants = new Handler(ConstantEngine);

  let parent = "";
  let tree: Tree = [];

  for (const block of page) {
    if (block.type === "heading") {
      const anchor = block.text
        .split("%", 1)[0]
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

      if (block.depth < 5) {
        parent = anchor + "-";
        tree = [anchor];
      } else {
        tree.push(parent + anchor);
      }
    }

    // temp
    endpoints.process(block, tree, () => {
      examples.process(block, tree, () => {
        structures.process(block, tree, () => {
          constants.process(block, tree);
        });
      });
    });
  }

  return { endpoints, examples, structures, constants };
}