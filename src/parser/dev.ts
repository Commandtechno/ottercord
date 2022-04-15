import { DOCS_DIR, OUTPUT_DIR } from "../common";

import { rm, mkdir, readdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";
import { existsSync } from "fs";
import { parse } from ".";

(async () => {
  const JSON_OUTPUT_DIR = resolve(OUTPUT_DIR, "json");
  if (existsSync(JSON_OUTPUT_DIR))
    await rm(JSON_OUTPUT_DIR, { recursive: true });
  await mkdir(JSON_OUTPUT_DIR, { recursive: true });

  const elements = [];
  async function walk(folderPath: string) {
    const files = await readdir(folderPath, { withFileTypes: true });
    for (const file of files) {
      const filePath = resolve(folderPath, file.name);
      if (file.isDirectory()) await walk(filePath);
      else if (extname(file.name) === ".md") {
        console.time(file.name);
        const newElements = await parse(filePath);
        elements.push(...newElements);
        console.timeEnd(file.name);
      }
    }
  }

  await walk(DOCS_DIR);
  await writeFile(
    resolve(JSON_OUTPUT_DIR, "elements.json"),
    JSON.stringify(elements, null, 2)
  );
})();