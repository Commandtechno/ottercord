export * from "./baseElement";
export * from "./constant";
export * from "./endpoint";
export * from "./example";
export * from "./structure";

import { Constant, Endpoint, Example, Structure } from ".";
export type Element = Constant | Endpoint | Example | Structure;