import { readFile } from "fs/promises";
import { resolve } from "path";
import { marked } from "marked";

export default class Page {
  index: number;
  parsed: marked.TokensList;

  constructor(options: { index?: number; parsed?: marked.TokensList } = {}) {
    if (options.index) this.index = options.index;
    if (options.parsed) this.parsed = options.parsed;
  }

  async load(...pathSegments: string[]) {
    const path = resolve(__dirname, "..", "discord-api-docs", "docs", ...pathSegments);
    const file = await readFile(path, "utf8");
    const parsed = marked.lexer(file);
    this.index = 0;
    this.parsed = parsed;
  }

  next() {
    const next = this.parsed[this.index];
    this.index++;
    return next;
  }

  hasNext() {
    return this.index < this.parsed.length;
  }

  after(index = this.index) {}
}