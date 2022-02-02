import { marked } from "marked";

export type Row = { [key: string]: string };

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
    rawRow.forEach((rawValue, index) => {
      const key = headers[index];
      const value = rawValue.text;
      row[key] = value;
    });

    rows.push(row);
  });

  return rows;
}