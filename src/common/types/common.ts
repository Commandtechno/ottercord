import { marked } from "marked";

export type Row = { [key: string]: marked.Tokens.TableCell };

export interface Meta {
  name: string;
  description?: string;
}

export interface BaseType {
  array: boolean;
  partial: boolean;
  deprecated: boolean;
}

export interface ValueType extends BaseType {
  type: "value";
  value: string;
}

export interface ReferenceType extends BaseType {
  type: "reference";
  reference: string;
}

export interface UnionType extends BaseType {
  type: "union";
  values: Type[];
}

export type Type = ValueType | ReferenceType | UnionType;