import { readdir, writeFile } from "fs/promises";
import { resolve } from "path";
import { parse } from "./parser";

(async () => {
  const files = await readdir(resolve(__dirname, "..", "discord-api-docs", "docs", "resources"));
  const allEndpoints = [];
  for (const file of files) {
    console.log("parsing", file);
    const endpoints = await parse(file);

    allEndpoints.push(...endpoints);
    await writeFile(
      resolve(__dirname, "..", "endpoints", `${file}.json`),
      JSON.stringify(endpoints, null, 2)
    );
  }

  await writeFile(
    resolve(__dirname, "..", `endpoints.json`),
    JSON.stringify(allEndpoints, null, 2)
  );
})();