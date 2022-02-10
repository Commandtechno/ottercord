import { marked } from "marked";

export type Row = { [key: string]: marked.Tokens.TableCell };

export interface Type {
  // reference properties for linking
  reference: boolean;
  partial: boolean;

  // value properties
  optional: boolean;
  nullable: boolean;
  array: boolean;
  value: string | string[];
}

export interface Param extends Type {
  name: string;
  description?: string;

  deprecated: boolean;
}