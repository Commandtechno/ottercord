import { marked } from "marked";
import { unescape } from ".";
import { Row } from "../../common";

export function cleanText(text: string) {
  return text
    .split(";", 1)[0]
    .replace(/\(.*?\)/g, "")
    .replace(/\[.*?\]/g, "")
    .replace(/^[\s\\\\?*"]+/, "")
    .replace(/[\s\\\\?*"]+$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function stripPartial(text: string) {
  return cleanText(text).replace("partial", "").trim();
}

export function stripArray(text: string) {
  return cleanText(text)
    .replace(
      /((an|a)\s)?(array|list)(\sof(\s(\d+|zero|one|two|three|four|five|six|seven|eight|nine)))?/i,
      ""
    )
    .replace(/s$/, "")
    .trim();
}

export function stripDeprecated(text: string) {
  return cleanText(text)
    .replace(/[\(\*]+deprecated[\)\*]+/i, "")
    .trim();
}

export function flattenBlock(block: any): string {
  // @ts-ignore
  return block.tokens.map(token => unescape(token.text)).join(" ");
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