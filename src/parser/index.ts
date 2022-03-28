import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

import {
  // info
  blue,
  // error
  red,
  // warn
  yellow
} from "chalk";

console.info = (...args) => console.log(blue(...args));
console.error = (...args) => console.log(red(...args));
console.warn = (...args) => console.log(yellow(...args));

import {
  EndpointEngine,
  ExampleEngine,
  StructureEngine,
  ConstantEngine
} from "./engines";

import { DOCS_DIR, Tree } from "../common";
import { Handler } from "./handler";

export async function parse(...pathSegments: string[]) {
  const path = resolve(DOCS_DIR, ...pathSegments);
  const file = await readFile(path, "utf8");
  const page = marked.lexer(file);

  const endpoints = new Handler(EndpointEngine);
  const examples = new Handler(ExampleEngine);
  const structures = new Handler(StructureEngine);
  const constants = new Handler(ConstantEngine);

  function clear() {
    endpoints.clear();
    examples.clear();
    structures.clear();
    constants.clear();
  }

  let parent = "";
  let tree: Tree = [];

  for (const block of page) {
    let link: string;
    if (block.type === "heading") {
      const anchor = block.text
        .split("%", 1)[0]
        .trim()
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/^-+|-+$/g, "");

      if (block.depth < 5) {
        parent = anchor + "-";
        link = anchor;
      } else {
        if (anchor.endsWith("-")) console.log(anchor);
        link = parent + anchor;
      }
    }

    endpoints.process(block);
    examples.process(block);
    structures.process(block);
    constants.process(block);

    endpoints.clean(clear);
    examples.clean(clear);
    structures.clean(clear);
    constants.clean(clear);

    endpoints.next(block);
    examples.next(block);
    structures.next(block);
    constants.next(block);
  }

  return { endpoints, examples, structures, constants };
}