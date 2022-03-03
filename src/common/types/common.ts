import { marked } from "marked";

export type Row = { [key: string]: marked.Tokens.TableCell };
export type Tree = string[];

export interface Base {
  tree: Tree;

  name: string;
  description?: string;
}

export interface Property {
  description?: string;

  key: string;
  type: Type | Type[];

  optional: boolean;
  nullable: boolean;
}

export interface BaseType {
  array?: boolean;
  partial?: boolean;
  deprecated?: boolean;
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
}

export interface StructureType extends BaseType {
  type: "structure";
  properties: Property[];
}

export type Type = ValueType | ReferenceType | StructureType;