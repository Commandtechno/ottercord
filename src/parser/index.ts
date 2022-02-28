import { DOCS_DIR, Tree } from "../common";

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

  let endpoint: Endpoint;
  let example: Example;
  let structure: Structure;
  let constant: Constant;

  let endpointTree: Tree = [];
  let exampleTree: Tree = [];
  let structureTree: Tree = [];
  let constantTree: Tree = [];

  function addEndpoint() {
    if (endpoint?.ready) {
      endpoint.tree = endpointTree;
      endpoints.push(endpoint);

      // note tree is unique per type so there wont be 2 endpoints with the same link in the tree but there might be a structure with the same link
      // this is because there are a bunch of links and resolving them separately is a lot more accruate
      endpointTree = [];
      exampleTree = [];
      structureTree = [];
      constantTree = [];
      endpoint = undefined;
    }
  }

  function addExample() {
    if (example?.ready) {
      example.tree = exampleTree;
      examples.push(example);

      endpointTree = [];
      exampleTree = [];
      structureTree = [];
      constantTree = [];
      example = undefined;
    }
  }

  function addStructure() {
    if (structure?.ready) {
      structure.tree = structureTree;
      structures.push(structure);

      endpointTree = [];
      exampleTree = [];
      structureTree = [];
      constantTree = [];
      structure = undefined;
    }
  }

  function addConstant() {
    if (constant?.ready) {
      constant.tree = constantTree;
      constants.push(constant);

      endpointTree = [];
      exampleTree = [];
      structureTree = [];
      constantTree = [];
      constant = undefined;
    }
  }

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

    function addLink() {
      if (link) {
        endpointTree.push(link);
        exampleTree.push(link);
        structureTree.push(link);
        constantTree.push(link);
      }
    }

    // same rules goes for every engine im just lazy and dont want to copy them all
    // creating a new endpoint will throw a string if it is invalid
    try {
      // basically if it can create a new endpoint, it is a new endpoint
      const newEndpoint = new Endpoint(block);
      // it will not get here if its not a valid endpoint
      // if the last one is done, add it
      addEndpoint();
      // set the new endpoint
      endpoint = newEndpoint;
    } catch (err) {
      // if a string was not a thrown (an actual error)
      if (typeof err !== "string") console.error(err);
      // if one currently exists then process the next block
      if (endpoint) {
        endpoint.process(block);
        // if its finished which means the next loop will be a new endpoint then skip the other ones
        if (endpoint.ready) {
          // add the link to the trees before skipping the next ones
          addLink();
          continue;
        }
      }
    }

    try {
      const newExample = new Example(block);

      addExample();
      example = newExample;
    } catch (err) {
      if (typeof err !== "string") console.error(err);
      if (example) {
        example.process(block);
        if (example.ready) {
          addLink();
          continue;
        }
      }
    }

    try {
      const newStructure = new Structure(block);

      addStructure();
      structure = newStructure;
    } catch (err) {
      if (typeof err !== "string") console.error(err);
      if (structure) {
        structure.process(block);
        if (structure.ready) {
          addLink();
          continue;
        }
      }
    }

    try {
      const newConstant = new Constant(block);

      addConstant();
      constant = newConstant;
    } catch (err) {
      if (typeof err !== "string") console.error(err);
      if (constant) {
        constant.process(block);
        if (constant.ready) {
          addLink();
          continue;
        }
      }
    }

    addLink();
  }

  addEndpoint();
  addExample();
  addStructure();
  addConstant();

  return { endpoints, examples, structures, constants };
}