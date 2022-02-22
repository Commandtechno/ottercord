import { DOCS_DIR, OUTPUT_DIR } from "../common";

import { rm, mkdir, readdir, writeFile } from "fs/promises";
import { basename, resolve } from "path";
import { existsSync } from "fs";
import { parse } from ".";

(async () => {
  const JSON_OUTPUT_DIR = resolve(OUTPUT_DIR, "json");
  if (existsSync(JSON_OUTPUT_DIR)) await rm(JSON_OUTPUT_DIR, { recursive: true });
  await mkdir(JSON_OUTPUT_DIR, { recursive: true });

  const folders = ["resources", "topics"];
  for (const folder of folders) {
    const files = await readdir(resolve(DOCS_DIR, folder));
    for (const file of files) {
      const name = basename(file, ".md");
      const output = resolve(JSON_OUTPUT_DIR, name);
      await mkdir(output);

      console.time(name);
      const { constants, endpoints, structures } = await parse(folder, file);
      console.timeEnd(name);

      // await writeFile(resolve(output, "links.json"), JSON.stringify(links, null, 2));
      await writeFile(resolve(output, "constants.json"), JSON.stringify(constants, null, 2));
      await writeFile(resolve(output, "endpoints.json"), JSON.stringify(endpoints, null, 2));
      await writeFile(resolve(output, "structures.json"), JSON.stringify(structures, null, 2));
    }
  }
})();