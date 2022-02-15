import { rm, mkdir, readdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { resolve } from "path";
import { execSync } from "child_process";

import { OUTPUT_DIR } from "../common";
import { js } from ".";

(async () => {
  const JSON_OUTPUT_DIR = resolve(OUTPUT_DIR, "json");
  const JS_OUTPUT_DIR = resolve(OUTPUT_DIR, "js");

  if (existsSync(JS_OUTPUT_DIR)) await rm(JS_OUTPUT_DIR, { recursive: true });
  await mkdir(JS_OUTPUT_DIR, { recursive: true });

  let output = (await readFile(resolve(__dirname, "runtime.ts"), "utf-8")) + "\n\n";
  let constants = [];
  let endpoints = [];
  let structures = [];

  const folders = await readdir(JSON_OUTPUT_DIR);
  for (const folder of folders) {
    constants = [
      ...constants,
      ...JSON.parse(await readFile(resolve(JSON_OUTPUT_DIR, folder, "constants.json"), "utf8"))
    ];

    endpoints = [
      ...endpoints,
      JSON.parse(await readFile(resolve(JSON_OUTPUT_DIR, folder, "endpoints.json"), "utf8"))
    ];

    structures = [
      ...structures,
      JSON.parse(await readFile(resolve(JSON_OUTPUT_DIR, folder, "structures.json"), "utf8"))
    ];
  }

  output += await js(links, constants, endpoints, structures);

  await writeFile(resolve(JS_OUTPUT_DIR, "index.ts"), output);

  const tsc = resolve(require.resolve("typescript"), "..", "tsc.js");
  // spawn("node", [tsc, resolve(JS_OUTPUT_DIR, "index.ts"), "--declaration"], {
  //   stdio: "inherit"
  // });
  // lol this is scuffed
  // execSync("npm i @types/node", { cwd: JS_OUTPUT_DIR });
  // execSync("node " + tsc + " " + resolve(JS_OUTPUT_DIR, "index.ts") + " --declaration");
})();