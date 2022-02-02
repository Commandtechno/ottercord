import { Engine } from "./endpoints";

import Page from "./page";

export async function parse(...pathSegments: string[]) {
  const page = new Page();
  await page.load(...pathSegments);

  const engine = new Engine();

  for (const block of page.next()) {
    engine.process(block);
  }

  return engine.endpoints;
}