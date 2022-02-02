import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

import { DOCS_DIR } from "./constants";

export default class Page {
  index: number;
  parsed: marked.TokensList;

  constructor(options: { index?: number; parsed?: marked.TokensList } = {}) {
    if (options.index) this.index = options.index;
    if (options.parsed) this.parsed = options.parsed;
  }

  async load(...pathSegments: string[]) {
    const path = resolve(DOCS_DIR, ...pathSegments);

    const file = await readFile(path, "utf8");
    const parsed = marked.lexer(file);
    this.index = 0;
    this.parsed = parsed;
  }

  ___current() {
    return this.parsed[this.index - 1];
  }

  *next() {
    while (this.index < this.parsed.length) {
      const next = this.parsed[this.index];
      this.index++;
      yield next;
    }
  }
}