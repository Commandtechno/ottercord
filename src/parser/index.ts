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

  // let parent = "";
  // const links: { [key: string]: string } = {};

  const endpoints: EndpointEngine[] = [];
  const structures: StructureEngine[] = [];
  const constants: ConstantEngine[] = [];

  let endpointEngine: EndpointEngine;
  let structureEngine: StructureEngine;
  let constantEngine: ConstantEngine;

  for (const block of page) {
    // if (block.type === "heading") {
    //   let link: string;
    //   const anchor = block.text.split("%", 1)[0].trim().toLowerCase().replace(/\s+/g, "-");

    //   if (block.depth < 5) {
    //     parent = anchor + "-";
    //     link = anchor;
    //   } else link = parent + anchor;

    //   if (link) links[link] = block.text.replace("Object", "Structure");
    // }

    // temporary switch algorithm

    try {
      const newEndpointEngine = new EndpointEngine(block);
      if (endpointEngine?.ready) {
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

  if (endpointEngine) endpoints.push(endpointEngine);
  if (structureEngine) structures.push(structureEngine);
  if (constantEngine) constants.push(constantEngine);

  return { endpoints, structures, constants };
}