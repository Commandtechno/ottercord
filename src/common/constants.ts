import { resolve } from "path";

export const BASE_DIR = resolve(__dirname, "..", "..");
export const REPO_DIR = resolve(BASE_DIR, "discord-api-docs");
export const DOCS_DIR = resolve(REPO_DIR, "docs");
export const OUTPUT_DIR = resolve(BASE_DIR, "output");