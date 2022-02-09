import { marked } from "marked";

export type Row = { [key: string]: marked.Tokens.TableCell };

export interface BaseType {
  array: boolean;
  reference: boolean;

  value: string;
}

export interface Type extends BaseType {
  name: string;
  description?: string;

  optional: boolean;
  nullable: boolean;
}