import { writeFile } from "fs/promises";
import { parse } from ".";

(async () => {
  const result = await parse("resources", "Webhook.md");
  await writeFile("test.json", JSON.stringify(result, null, 2));
})();