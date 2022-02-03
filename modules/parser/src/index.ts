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

  for (const block of page)
    await Promise.all([
      constantsEngine.process(block),
      endpointsEngine.process(block),
      structuresEngine.process(block)
    ]);

  const constants = constantsEngine.finish();
  const endpoints = endpointsEngine.finish();
  const structures = structuresEngine.finish();

  return { constants, endpoints, structures };
}