import { marked } from "marked";
import { decode } from "he";
import { Row } from "../../common";

// get text before the first semicolon
export function cutText(text: string) {
  return text.split(";", 1)[0].trim();
}

// normalize whitespace
export function trimText(text: string) {
  return text
    .replace(/^[\s\\\?*"]+/, "")
    .replace(/[\s\\\?*"]+$/, "")
    .replace(/\s+/g, " ");
}

// token doesnt contain tokens so just any for now
export function flattenBlock(block: any): string {
  // @ts-ignore
  return block.tokens.map(token => decode(token.text)).join("");
}

// turns a table headings and rows into an object
export function formatTable(rawTable: marked.Tokens.Table) {
  const headers: string[] = [];
  rawTable.header.forEach(rawHeader => {
    const header = rawHeader.text.toLowerCase();
    headers.push(header);
  });

  const table: Row[] = [];
  rawTable.rows.forEach(rawRow => {
    const row: Partial<Row> = {};
    rawRow.forEach((value, index) => {
      const key = headers[index];
      row[key] = value;
    });

    table.push(row as Row);
  });

  return table;
}