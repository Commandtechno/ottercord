import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

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

  for (const block of page) {
    let link: string;
    if (block.type === "heading") {
      const anchor = block.text
        .split("%", 1)[0]
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");

      if (block.depth < 5) {
        parent = anchor + "-";
        link = anchor;
      } else {
        link = parent + anchor;
      }
    }

    // temp
    endpoints.process(block, tree, clearLinks, () =>
      examples.process(block, tree, clearLinks, () =>
        structures.process(block, tree, clearLinks, () =>
          constants.process(block, tree, clearLinks)
        )
      )
    );

    if (link) tree.push(link);
  }

  return { endpoints, examples, structures, constants };
}