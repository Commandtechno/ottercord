import { DOCS_DIR, OUTPUT_DIR } from "../common";

import { rm, mkdir, readdir, writeFile } from "fs/promises";
import { basename, resolve } from "path";
import { existsSync } from "fs";
import { parse } from ".";

(async () => {
  const JSON_OUTPUT_DIR = resolve(OUTPUT_DIR, "json");
  if (existsSync(JSON_OUTPUT_DIR))
    await rm(JSON_OUTPUT_DIR, { recursive: true });
  await mkdir(JSON_OUTPUT_DIR, { recursive: true });

  const endpoints = [];
  const examples = [];
  const structures = [];
  const constants = [];

  const folders = ["resources", "topics"];
  for (const folder of folders) {
    const files = await readdir(resolve(DOCS_DIR, folder));
    for (const file of files) {
      // if (file !== "Guild_Scheduled_Event.md") continue;
      const name = basename(file, ".md");
      console.time(name);

      const {
        endpoints: newEndpoints,
        examples: newExamples,
        structures: newStructures,
        constants: newConstants
      } = await parse(folder, file);

      endpoints.push(...newEndpoints);
      examples.push(...newExamples);
      structures.push(...newStructures);
      constants.push(...newConstants);

      console.timeEnd(name);
    }
  }

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