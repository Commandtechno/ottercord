import { rm, mkdir, readdir, writeFile } from "fs/promises";
import { basename, extname, resolve } from "path";
import { existsSync } from "fs";
import { parse } from ".";

import { DOCS_DIR, OUTPUT_DIR } from "../common";

(async () => {
  const JSON_OUTPUT_DIR = resolve(OUTPUT_DIR, "json");
  if (existsSync(JSON_OUTPUT_DIR))
    await rm(JSON_OUTPUT_DIR, { recursive: true });
  await mkdir(JSON_OUTPUT_DIR, { recursive: true });

  const endpoints = [];
  const examples = [];
  const structures = [];
  const constants = [];

  async function walk(folderPath: string) {
    const files = await readdir(folderPath, { withFileTypes: true });
    for (const file of files) {
      const filePath = resolve(folderPath, file.name);
      if (file.isDirectory()) await walk(filePath);
      else if (extname(file.name) === ".md") {
        console.time(file.name);

        const {
          endpoints: newEndpoints,
          examples: newExamples,
          structures: newStructures,
          constants: newConstants
        } = await parse(filePath);

        console.timeEnd(file.name);

        endpoints.push(...newEndpoints);
        examples.push(...newExamples);
        structures.push(...newStructures);
        constants.push(...newConstants);
      }
    }
  }

  await walk(DOCS_DIR);

  await writeFile(
    resolve(JSON_OUTPUT_DIR, "endpoints.json"),
    JSON.stringify(endpoints, null, 2)
  );

  await writeFile(
    resolve(JSON_OUTPUT_DIR, "examples.json"),
    JSON.stringify(examples, null, 2)
  );

  await writeFile(
    resolve(JSON_OUTPUT_DIR, "structures.json"),
    JSON.stringify(structures, null, 2)
  );

  await writeFile(
    resolve(JSON_OUTPUT_DIR, "constants.json"),
    JSON.stringify(constants, null, 2)
  );
})();