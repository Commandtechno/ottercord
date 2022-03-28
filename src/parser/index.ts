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

import { DOCS_DIR } from "../common";
import { Handler } from "./handler";

export async function parse(...pathSegments: string[]) {
  const path = resolve(DOCS_DIR, ...pathSegments);
  const file = await readFile(path, "utf8");
  const page = marked.lexer(file);

  const endpoints = new Handler(EndpointEngine);
  const examples = new Handler(ExampleEngine);
  const structures = new Handler(StructureEngine);
  const constants = new Handler(ConstantEngine);

  for (const block of page) {
    // if (block.type === "heading") console.log(block.text);

    try {
      endpoints.process(block);
      examples.process(block);
      structures.process(block);
      constants.process(block);
    } catch {}
  }

  endpoints.flush();
  examples.flush();
  structures.flush();
  constants.flush();

  return { endpoints, examples, structures, constants };
}