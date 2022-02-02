import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

import { DOCS_DIR } from "./constants";
import { Engine as EndpointEngine } from "./endpoint";
import { Engine as StructureEngine } from "./object";

export async function parse(...pathSegments: string[]) {
  const path = resolve(DOCS_DIR, ...pathSegments);
  const file = await readFile(path, "utf8");
  const page = marked.lexer(file);

  const endpointEngine = new EndpointEngine();
  const structureEngine = new StructureEngine();

  for (const block of page) {
    endpointEngine.process(block);
    structureEngine.process(block);
  }

  const endpoints = endpointEngine.finish();
  const structures = structureEngine.finish();

  return { endpoints, structures };
}