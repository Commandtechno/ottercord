import { resolve } from "path";

export const BASE_DIR = resolve(__dirname, "..", "..");
export const DOCS_DIR = resolve(BASE_DIR, "discord-api-docs", "docs");
export const OUTPUT_DIR = resolve(BASE_DIR, "output");