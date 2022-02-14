import { readdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { js } from ".";

(async () => {
  const dir = resolve(__dirname, "..", "..", "parser", "output");
  const folders = await readdir(dir);

  let output = "";
  let links = {};
  for (const folder of folders) {
    links = { ...links, ...JSON.parse(await readFile(resolve(dir, folder, "links.json"), "utf8")) };
  }

  for (const folder of folders) {
    console.time(folder);
    const constants = JSON.parse(await readFile(resolve(dir, folder, "constants.json"), "utf8"));
    const endpoints = JSON.parse(await readFile(resolve(dir, folder, "endpoints.json"), "utf8"));
    const structures = JSON.parse(await readFile(resolve(dir, folder, "structures.json"), "utf8"));

    output += "/*\n";
    output += "\t" + folder + "\n";
    output += "*/\n\n";

    output += await js(links, constants, endpoints, structures);
    console.timeEnd(folder);
    // const output = await js(constants, endpoints, structures);
    // await writeFile(resolve(dir, folder, "index.ts"), output);
  }

  writeFile("output.ts", output);
})();