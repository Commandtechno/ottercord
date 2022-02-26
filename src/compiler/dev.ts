import { rm, mkdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { resolve } from "path";

import { Constant, Endpoint, Example, Structure } from "../common";

import { JSON_OUTPUT_DIR, JS_OUTPUT_DIR } from "./constants";
import { JS } from "./js";

(async () => {
  if (existsSync(JS_OUTPUT_DIR)) await rm(JS_OUTPUT_DIR, { recursive: true });
  await mkdir(JS_OUTPUT_DIR, { recursive: true });

  const constantsPath = resolve(JSON_OUTPUT_DIR, "constants.json");
  const constants: Constant[] = JSON.parse(await readFile(constantsPath, "utf8"));

  const endpointsPath = resolve(JSON_OUTPUT_DIR, "endpoints.json");
  const endpoints: Endpoint[] = JSON.parse(await readFile(endpointsPath, "utf8"));

  const examplesPath = resolve(JSON_OUTPUT_DIR, "examples.json");
  const examples: Example[] = JSON.parse(await readFile(examplesPath, "utf8"));

  const structuresPath = resolve(JSON_OUTPUT_DIR, "structures.json");
  const structures: Structure[] = JSON.parse(await readFile(structuresPath, "utf8"));

  const js = new JS({ constants, endpoints, examples, structures });
  for (const constant of constants) js.renderConstant(constant);
  // for (const endpoint of endpoints) js.processEndpoint(endpoint);
  for (const structure of structures) js.renderStructure(structure);

  const code = js.render();
  await writeFile(resolve(JS_OUTPUT_DIR, "index.ts"), code);

  // const tsc = resolve(require.resolve("typescript"), "..", "tsc.js");
  // spawn("node", [tsc, resolve(JS_OUTPUT_DIR, "index.ts"), "--declaration"], {
  //   stdio: "inherit"
  // });
  // lol this is scuffed
  // execSync("npm i @types/node", { cwd: JS_OUTPUT_DIR });
  // execSync("node " + tsc + " " + resolve(JS_OUTPUT_DIR, "index.ts") + " --declaration");
})();