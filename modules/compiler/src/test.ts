import { readdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { js } from ".";

(async () => {
  const dir = resolve(__dirname, "..", "..", "parser", "output");
  const folders = await readdir(dir);

  let output = "";
  for (const folder of folders) {
    console.log(resolve(dir, folder, "endpoints.json"));
    const constants = JSON.parse(await readFile(resolve(dir, folder, "constants.json"), "utf8"));
    console.log(resolve(dir, folder, "endpoints.json"));
    const endpoints = JSON.parse(await readFile(resolve(dir, folder, "endpoints.json"), "utf8"));
    console.log(resolve(dir, folder, "structures.json"));
    const structures = JSON.parse(await readFile(resolve(dir, folder, "structures.json"), "utf8"));
    output += "//" + folder + "\n";
    output += await js(constants, endpoints, structures);
    output += "\n\n";
    // const output = await js(constants, endpoints, structures);
    // await writeFile(resolve(dir, folder, "index.ts"), output);
  }

  writeFile("output.ts", output);
})();