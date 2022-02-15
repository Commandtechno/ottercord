import { marked } from "marked";
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
  return text.replace("partial", "").trim();
}

export function stripArray(text: string) {
  return text
    .replace(/((an|a)\s)?(array|list)(\sof)?/i, "")
    .replace(/s$/, "")
    .trim();
}

export function stripDeprecated(text: string) {
  return text.replace(/[\(\*]+deprecated[\)\*]+/i, "").trim();
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