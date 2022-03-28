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

  let parent = "";
  let tree: Tree = [];

  function clearLinks() {
    tree = [];
  }

  function clearHandlers() {
    endpoints.clear();
    examples.clear();
    structures.clear();
    constants.clear();
  }

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

    // if (link) tree.push(link);

    // temp

    endpoints.process(block, link, tree, clearLinks, clearHandlers, () =>
      examples.process(block, link, tree, clearLinks, clearHandlers, () =>
        structures.process(block, link, tree, clearLinks, clearHandlers, () =>
          constants.process(block, link, tree, clearLinks, clearHandlers)
        )
      )
    );

    // if (link) tree.push(link);
  }

  clearHandlers();

  return { endpoints, examples, structures, constants };
}