import { readdir, readFile } from "fs/promises";
import { marked } from "marked";
import { basename, extname, parse, resolve } from "path";
import { BASE_DIR } from "./constants";

export type Row = { [key: string]: marked.Tokens.TableCell };

export function splitAt(str: string, index: number) {
  return [str.slice(0, index), str.slice(index + 1)];
}

export function firstSplit(str: string, separator: string) {
  const index = str.indexOf(separator);
  if (index < 0) return [];

  return splitAt(str, index);
}

export function lastSplit(str: string, separator: string) {
  const index = str.indexOf(separator);
  if (index < 0) return [];

  return splitAt(str, index);
}

export function flattenBlock(block: marked.Token) {
  // @ts-ignore
  if (block.tokens) {
    // @ts-ignore
    return block.tokens.map(flattenBlock).join("");
  }

  // @ts-ignore
  if (block.text) {
    // @ts-ignore
    return block.text;
  }

  return "";
}

export function formatTable(rawTable: marked.Tokens.Table) {
  const headers: string[] = [];
  rawTable.header.forEach(rawHeader => {
    const header = rawHeader.text.toLowerCase();
    headers.push(header);
  });

  const rows: Row[] = [];
  rawTable.rows.forEach(rawRow => {
    const row: Row = {};
    rawRow.forEach((value, index) => {
      const key = headers[index];
      row[key] = value;
    });

    rows.push(row);
  });

  return rows;
}

export function resolveType(block: marked.Tokens.TableCell) {
  let type: any = block.text;
  if (block.text.toLowerCase().includes("object")) {
    for (const token of block.tokens) {
      if (token.type === "link") {
        resolveTypeLink(token.href);
      }
    }
  }

  return type;
}

// #DOCS_RESOURCES_CHANNEL/attachment-object
export async function resolveTypeLink(rawLink: string) {
  const link = rawLink.slice(1);
  const [rawPath, rawAnchor] = lastSplit(link, "/");

  const parts = rawPath.split("_");
  let path = BASE_DIR;

  let i = 0;
  for (i = 0; i < parts.length; i++) {
    const files = await readdir(path);

    const dirName = parts[i].toLowerCase();
    const dir = files.find(file => file.toLowerCase() === dirName);
    if (dir) {
      path = resolve(path, dir);
      continue;
    }

    const fileName = parts.slice(i).join("_").toLowerCase();
    const file = files.find(file => basename(file, extname(file)).toLowerCase() === fileName);
    if (file) {
      path = resolve(path, file);
      break;
    }

    // write actual error
    console.log("error");
    return;
  }

  const file = await readFile(path, "utf8");
  const page = marked.lexer(file);

  for (const block of page) {
    if (block.type === "heading") {
      if (block.text.toLowerCase().replace(/\s/g, "-") === rawAnchor.toLowerCase()) {
        return block;
      }
    }
  }

  console.log("cum");
}