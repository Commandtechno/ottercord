import { rm, mkdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { resolve } from "path";

import { Constant, Element, Endpoint, Example, Structure } from "../common";

import { JSON_OUTPUT_DIR } from "./constants";
import { Context } from "./context";
import { JS } from "./js";

(async () => {
  // if (existsSync(JS_OUTPUT_DIR)) await rm(JS_OUTPUT_DIR, { recursive: true });
  // await mkdir(JS_OUTPUT_DIR, { recursive: true });

  // if (existsSync(GO_OUTPUT_DIR)) await rm(GO_OUTPUT_DIR, { recursive: true });
  // await mkdir(GO_OUTPUT_DIR, { recursive: true });

  const elements: Element[] = JSON.parse(
    await readFile(resolve(JSON_OUTPUT_DIR, "elements.json"), "utf8")
  );

  const ctx = new Context(elements);

  await JS(ctx);
})();