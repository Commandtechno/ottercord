import { readFile } from "fs/promises";
import { marked } from "marked";
import {
  // info
  blue,
  // error
  red,
  // warn
  yellow
} from "chalk";

import { ContextHandler } from "./handlers/Context";
import {
  EndpointFactory,
  ExampleFactory,
  StructureFactory,
  ConstantFactory
} from "./factories";

console.info = (...args) => console.log(blue(...args));
console.error = (...args) => console.log(red(...args));
console.warn = (...args) => console.log(yellow(...args));

export async function parse(path: string) {
  const content = await readFile(path, "utf8");
  const blocks = marked.lexer(content);

  const ctx = new ContextHandler();
  ctx.setTree(path);
  ctx.addFactory(EndpointFactory);
  ctx.addFactory(ExampleFactory);
  ctx.addFactory(StructureFactory);
  ctx.addFactory(ConstantFactory);

  for (const block of blocks) ctx.process(block);
  ctx.flush();

  return ctx.elements;
}