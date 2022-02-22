import { DOCS_DIR } from "../common";

import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

import { EndpointEngine } from "./endpoints";
import { StructureEngine } from "./structures";
import { ConstantEngine } from "./constants";

export async function parse(...pathSegments: string[]) {
  const path = resolve(DOCS_DIR, ...pathSegments);
  const file = await readFile(path, "utf8");
  const page = marked.lexer(file);

  const endpoints: EndpointEngine[] = [];
  const structures: StructureEngine[] = [];
  const constants: ConstantEngine[] = [];

  let endpointEngine: EndpointEngine;
  let structureEngine: StructureEngine;
  let constantEngine: ConstantEngine;

  let parent = "";
  let tree = [];
  for (const block of page) {
    if (block.type === "heading") {
      let link: string;
      const anchor = block.text.split("%", 1)[0].trim().toLowerCase().replace(/\s+/g, "-");
      if (block.depth < 5) {
        parent = anchor + "-";
        link = anchor;
      } else link = parent + anchor;

      if (link) {
        tree.push(link);
      }
    }

    // temporary switch algorithm

    try {
      const newEndpointEngine = new EndpointEngine(block);
      if (endpointEngine?.ready) {
        endpointEngine.tree = tree;
        tree = [];

        endpoints.push(endpointEngine);

        // constantEngine = undefined;
        endpointEngine = undefined;
        // structureEngine = undefined;
      }

      endpointEngine = newEndpointEngine;
    } catch (e) {
      if (endpointEngine) {
        endpointEngine.process(block);
        if (endpointEngine.ready) continue;
      }

      if (typeof e !== "string") console.log(e);
    }

    try {
      const newStructureEngine = new StructureEngine(block);
      if (structureEngine?.ready) {
        structureEngine.tree = tree;
        tree = [];

        structures.push(structureEngine);

        // constantEngine = undefined;
        // endpointEngine = undefined;
        structureEngine = undefined;
      }

      structureEngine = newStructureEngine;
    } catch (e) {
      if (structureEngine) {
        structureEngine.process(block);
        if (structureEngine.ready) continue;
      }

      if (typeof e !== "string") console.log(e);
    }

    try {
      const newConstantEngine = new ConstantEngine(block);
      if (constantEngine?.ready) {
        constantEngine.tree = tree;
        tree = [];

        constants.push(constantEngine);

        constantEngine = undefined;
        // endpointEngine = undefined;
        // structureEngine = undefined;
      }

      constantEngine = newConstantEngine;
    } catch (e) {
      if (constantEngine) {
        constantEngine.process(block);
        if (constantEngine.ready) continue;
      }

      if (typeof e !== "string") console.log(e);
    }
  }

  if (endpointEngine?.ready) endpoints.push(endpointEngine);
  if (structureEngine?.ready) structures.push(structureEngine);
  if (constantEngine?.ready) constants.push(constantEngine);

  return { endpoints, structures, constants };
}