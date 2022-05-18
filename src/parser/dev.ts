import { DOCS_DIR, OUTPUT_DIR } from "../common";

import { rm, mkdir, readdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";
import { existsSync } from "fs";
import { parse } from ".";

(async () => {
  const JSON_OUTPUT_DIR = resolve(OUTPUT_DIR, "json");
  if (existsSync(JSON_OUTPUT_DIR)) await rm(JSON_OUTPUT_DIR, { recursive: true });
  await mkdir(JSON_OUTPUT_DIR, { recursive: true });

  const elements = [];
  const folders = ["interactions", "resources", "topics"];

  for (const folderName of folders) {
    const folder = resolve(DOCS_DIR, folderName);
    const files = await readdir(folder);
    for (const fileName of files) {
      const file = resolve(folder, fileName);
      if (extname(file) === ".md") {
        console.time(fileName);
        const newElements = await parse(file);
        console.timeEnd(fileName);
        elements.push(...newElements);
      }
    }
  }
  await writeFile(resolve(JSON_OUTPUT_DIR, "elements.json"), JSON.stringify(elements, null, 2));
})();