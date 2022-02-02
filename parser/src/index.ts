import { Engine } from "./endpoints";

import Page from "./page";

export async function parse(file: string) {
  const page = new Page();
  await page.load(file);

  const engine = new Engine();

  for (const block of page.next()) {
    engine.process(block);
  }

  return engine.endpoints;
}