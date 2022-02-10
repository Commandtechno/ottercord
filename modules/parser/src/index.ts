import { DOCS_DIR } from "../../common";

import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

import { ConstantsEngine } from "./constants";
import { EndpointsEngine } from "./endpoints";
import { StructuresEngine } from "./structures";

export async function parse(...pathSegments: string[]) {
  const path = resolve(DOCS_DIR, ...pathSegments);
  const file = await readFile(path, "utf8");
  const page = marked.lexer(file);

  const constantsEngine = new ConstantsEngine();
  const endpointsEngine = new EndpointsEngine();
  const structuresEngine = new StructuresEngine();

  let tree = [];
  for (const block of page) {
    if (block.type === "heading") {
      tree[block.depth] ??= [];
      tree[block.depth].push(block.text.split("%", 1)[0].toLowerCase().replace(/\s+/g, "-").trim());
    }

    constantsEngine.process(block);
    endpointsEngine.process(block);
    structuresEngine.process(block);
  }

  const constants = constantsEngine.finish();
  const endpoints = endpointsEngine.finish();
  const structures = structuresEngine.finish();

  console.log(tree);
  return { constants, endpoints, structures };
}