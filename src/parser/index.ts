import { readFile } from "fs/promises";
import { relative, resolve, dirname, basename, extname } from "path";
import { marked } from "marked";
import {
  // info
  blue,
  // error
  red,
  // warn
  yellow
} from "chalk";

import { REPO_DIR, DOCS_DIR } from "../common";

import { Handler } from "./handler";
import {
  EndpointEngine,
  ExampleEngine,
  StructureEngine,
  ConstantEngine
} from "./engines";

console.info = (...args) => console.log(blue(...args));
console.error = (...args) => console.log(red(...args));
console.warn = (...args) => console.log(yellow(...args));

export async function parse(filePath: string) {
  const href = [
    dirname(relative(REPO_DIR, filePath)),
    basename(filePath, extname(filePath))
  ]
    .join("_")
    .toUpperCase();

  const file = await readFile(filePath, "utf8");
  const page = marked.lexer(file);

  const handlers = [
    new Handler(EndpointEngine),
    new Handler(ExampleEngine),
    new Handler(StructureEngine),
    new Handler(ConstantEngine)
  ];

  let parent: string = "";
  let tree: string[] = [];

  for (const block of page) {
    try {
      for (const handler of handlers) handler.process(block, tree, handlers);
    } catch (err) {
      if (err !== "blocked") console.error(err);
      else for (const handler of handlers) handler.handleBlocked();
    }

    if (block.type === "heading") {
      const anchor =
        href +
        block.text
          .split("%", 1)[0]
          .trim()
          .toLowerCase()
          .replace(/[^\w]+/g, "-")
          .replace(/^-/, "")
          .replace(/-$/, "");

      if (block.depth < 5) {
        parent = anchor + "-";
        tree.push(anchor);
      } else tree.push(parent + anchor);
    }
  }

  for (const handler of handlers) handler.flush(tree, handlers);

  const [endpoints, examples, structures, constants] = handlers;
  return { endpoints, examples, structures, constants };
}