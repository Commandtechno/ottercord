import { marked } from "marked";

export type Row = { [key: string]: marked.Tokens.TableCell };

export interface Type {
  // reference properties for linking
  reference: boolean;
  partial: boolean;

  // idk properties
  required: boolean;
  nullable: boolean;
  // default?: string; add later idk

  // value properties
  array: boolean;
  value: string | string[];
}

export interface Param extends Type {
  name: string;
  description?: string;

  deprecated: boolean;
}