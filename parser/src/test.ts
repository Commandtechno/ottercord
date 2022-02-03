import { existsSync } from "fs";
import { mkdir, readdir, rm, writeFile } from "fs/promises";
import { basename, resolve } from "path";
import { parse } from ".";
import { DOCS_DIR } from "./util";

(async () => {
  const OUTPUT_DIR = resolve(__dirname, "..", "output");
  if (existsSync(OUTPUT_DIR)) await rm(OUTPUT_DIR, { recursive: true });
  await mkdir(OUTPUT_DIR);

  const files = await readdir(resolve(DOCS_DIR, "resources"));
  for (const file of files) {
    const name = basename(file, ".md");
    const dir = resolve(OUTPUT_DIR, name);
    await mkdir(dir);

    console.time(name);
    const { constants, endpoints, structures } = await parse("resources", file);
    console.timeEnd(name);

    await writeFile(resolve(dir, "constants.json"), JSON.stringify(constants, null, 2));
    await writeFile(resolve(dir, "endpoints.json"), JSON.stringify(endpoints, null, 2));
    await writeFile(resolve(dir, "structures.json"), JSON.stringify(structures, null, 2));
  }
})();