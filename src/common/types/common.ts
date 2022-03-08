import { Property } from "./structure";
import { marked } from "marked";

export type Row = { [key: string]: marked.Tokens.TableCell };
export type Tree = string[];

export interface BaseMeta {
  name: string;
  description?: string;
}

export interface BaseEngine extends BaseMeta {
  tree: Tree;
}

export interface BaseType {
  array: boolean;
  partial: boolean;
}

export interface ValueType extends BaseType {
  type: "value";
  value:
    | "null"
    | "string"
    | "float"
    | "integer"
    | "bigint"
    | "boolean"
    | "object"

    // special types
    | "date"
    | "binary"
    | "file"
    | "snowflake"

    // fallback
    | "any";
}

export interface ReferenceType extends BaseType {
  type: "reference";
  link: string;
  fallback?: ValueType;
}

export interface StructureType extends BaseType {
  type: "structure";
  props: Property[];
}

export type Type = ValueType | ReferenceType | StructureType;