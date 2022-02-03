import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

import { Engine as ConstantsEngine } from "./constants";
import { Engine as EndpointsEngine } from "./endpoint";
import { Engine as StructuresEngine } from "./structures";

import { DOCS_DIR } from "./util/constants";

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