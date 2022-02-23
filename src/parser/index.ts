import { DOCS_DIR } from "../common";

import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

import Endpoint from "./endpoint";
import Example from "./example";
import Structure from "./structure";
import Constant from "./constant";

export async function parse(...pathSegments: string[]) {
  const path = resolve(DOCS_DIR, ...pathSegments);
  const file = await readFile(path, "utf8");
  const page = marked.lexer(file);

  const endpoints: Endpoint[] = [];
  const examples: Example[] = [];
  const structures: Structure[] = [];
  const constants: Constant[] = [];

  let endpointTree: string[] = [];
  let exampleTree: string[] = [];
  let structureTree: string[] = [];
  let constantTree: string[] = [];

  let endpoint: Endpoint;
  let example: Example;
  let structure: Structure;
  let constant: Constant;

  let parent = "";
  for (const block of page) {
    let link: string;
    if (block.type === "heading") {
      const anchor = block.text.split("%", 1)[0].trim().toLowerCase().replace(/\s+/g, "-");
      if (block.depth < 5) {
        parent = anchor + "-";
        link = anchor;
      } else link = parent + anchor;
    }

    // temporary switch algorithm
    try {
      const newEndpoint = new Endpoint(block);
      if (endpoint?.ready) {
        endpoint.tree = endpointTree;
        endpointTree = [];
        exampleTree = [];
        structureTree = [];
        constantTree = [];

        endpoints.push(endpoint);
        endpoint = undefined;
      }

      endpoint = newEndpoint;
    } catch (e) {
      if (endpoint) {
        endpoint.process(block);
        if (endpoint.ready) {
          if (link) {
            endpointTree.push(link);
            exampleTree.push(link);
            structureTree.push(link);
            constantTree.push(link);
          }

          continue;
        }
      }

      if (typeof e !== "string") console.log(e);
    }

    try {
      const newExample = new Example(block);
      if (example?.ready) {
        example.tree = exampleTree;
        endpointTree = [];
        exampleTree = [];
        structureTree = [];
        constantTree = [];

        examples.push(example);
        example = undefined;
      }

      example = newExample;
    } catch (e) {
      if (example) {
        example.process(block);
        if (example.ready) {
          if (link) {
            endpointTree.push(link);
            exampleTree.push(link);
            structureTree.push(link);
            constantTree.push(link);
          }

          continue;
        }
      }

      if (typeof e !== "string") console.log(e);
    }

    try {
      const newStructure = new Structure(block);
      if (structure?.ready) {
        structure.tree = structureTree;
        endpointTree = [];
        exampleTree = [];
        structureTree = [];
        constantTree = [];

        structures.push(structure);
        structure = undefined;
      }

      structure = newStructure;
    } catch (e) {
      if (structure) {
        structure.process(block);
        if (structure.ready) {
          if (link) {
            endpointTree.push(link);
            exampleTree.push(link);
            structureTree.push(link);
            constantTree.push(link);
          }

          continue;
        }
      }

      if (typeof e !== "string") console.log(e);
    }

    try {
      const newConstant = new Constant(block);
      if (constant?.ready) {
        constant.tree = constantTree;
        endpointTree = [];
        exampleTree = [];
        structureTree = [];
        constantTree = [];

        constants.push(constant);
        constant = undefined;
      }

      constant = newConstant;
    } catch (e) {
      if (constant) {
        constant.process(block);
        if (constant.ready) {
          if (link) {
            endpointTree.push(link);
            exampleTree.push(link);
            structureTree.push(link);
            constantTree.push(link);
          }

          continue;
        }
      }

      if (typeof e !== "string") console.log(e);
    }

    if (link) {
      endpointTree.push(link);
      exampleTree.push(link);
      structureTree.push(link);
      constantTree.push(link);
    }
  }

  if (endpoint?.ready) {
    endpoints.push(endpoint);
  }

  if (example?.ready) {
    examples.push(example);
  }

  if (structure?.ready) {
    structures.push(structure);
  }

  if (constant?.ready) {
    constants.push(constant);
  }

  return { endpoints, examples, structures, constants };
}