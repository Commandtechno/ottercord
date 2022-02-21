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
  link: string;
}

export interface UnionType extends BaseType {
  type: "union";
  types: Type[];
}

export interface StructureType extends BaseType {
  type: "structure";
  properties: Type[];
}

export interface PropertyType extends BaseType {
  type: "property";
  optional: boolean;
  nullable: boolean;
}

export type Type = ValueType | ReferenceType | UnionType | StructureType | PropertyType;