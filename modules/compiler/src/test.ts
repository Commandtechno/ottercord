import { readdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { js } from ".";

(async () => {
  const dir = resolve(__dirname, "..", "..", "parser", "output");
  const folders = await readdir(dir);
  for (const folder of folders) {
    const constants = JSON.parse(await readFile(resolve(dir, folder, "constants.json"), "utf8"));
    const endpoints = JSON.parse(await readFile(resolve(dir, folder, "endpoints.json"), "utf8"));
    const structures = JSON.parse(await readFile(resolve(dir, folder, "structures.json"), "utf8"));
    const output = await js(constants, endpoints, structures);
    await writeFile(resolve(dir, folder, "index.ts"), output);
  }
})();