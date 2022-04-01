import { rm, mkdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { resolve } from "path";

import { Constant, Endpoint, Example, Structure } from "../common";

import { JSON_OUTPUT_DIR } from "./constants";
import { Context } from "./context";
import { JS } from "./js";

(async () => {
  // if (existsSync(JS_OUTPUT_DIR)) await rm(JS_OUTPUT_DIR, { recursive: true });
  // await mkdir(JS_OUTPUT_DIR, { recursive: true });

  // if (existsSync(GO_OUTPUT_DIR)) await rm(GO_OUTPUT_DIR, { recursive: true });
  // await mkdir(GO_OUTPUT_DIR, { recursive: true });

  const constantsPath = resolve(JSON_OUTPUT_DIR, "constants.json");
  const constants: Constant[] = JSON.parse(
    await readFile(constantsPath, "utf8")
  );

  const endpointsPath = resolve(JSON_OUTPUT_DIR, "endpoints.json");
  const endpoints: Endpoint[] = JSON.parse(
    await readFile(endpointsPath, "utf8")
  );

  const examplesPath = resolve(JSON_OUTPUT_DIR, "examples.json");
  const examples: Example[] = JSON.parse(await readFile(examplesPath, "utf8"));

  const structuresPath = resolve(JSON_OUTPUT_DIR, "structures.json");
  const structures: Structure[] = JSON.parse(
    await readFile(structuresPath, "utf8")
  );

  const ctx = new Context({
    constants,
    endpoints,
    examples,
    structures
  });

  await JS(ctx);
})();