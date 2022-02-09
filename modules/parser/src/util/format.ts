import { marked } from "marked";
import { decode } from "he";
import { Row } from "../../../common";

export function formatText(str: string) {
  if (typeof str !== "string") return;
  return str
    .replace(/\(.*?\)/g, "")
    .replace(/\[.*?\]/g, "")
    .replace(/^[\s"'\\\/\?\*]+/, "")
    .replace(/[\s"'\\\/\?\*]+$/, "");
}

export function flattenBlock(block: any): string {
  if (block.tokens) return block.tokens.map(flattenBlock).join(" ");
  if (block.text) return formatText(decode(block.text));
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