import { REPO_DIR } from "../../common";

import { basename, dirname, extname, relative, sep } from "path";
import { marked } from "marked";

import { splitFirst } from "../util";

export class TreeHandler {
  base: string;
  parent: string = "";
  current: string[] = [];

  constructor(path: string) {
    this.base = [
      ...dirname(relative(REPO_DIR, path)).split(sep),
      basename(path, extname(path))
    ]
      .join("_")
      .toUpperCase();
  }

  clear() {
    const current = this.current;
    this.current = [];
    return current;
  }

  process(block: marked.Token) {
    if (block.type === "heading") {
      if (block.type === "heading") {
        // https://github.com/discord/discord-api-docs/issues/4708#issuecomment-1079834021
        let anchor = splitFirst(block.text, "%")[0]
          .trim()
          .replace(/[.,/#!$%^&*;:{}=\-_—–`'~()?]/g, "") // remove punctuation
          .replace(/\s+/g, "-") // turn spaces into dashes
          .toLowerCase();

        if (block.depth < 5) this.parent = anchor + "-";
        else anchor = this.parent + anchor;

        this.current.push(this.base + "/" + anchor);
      }
    }
  }
}