import { marked } from "marked";

export type Row = { [key: string]: marked.Tokens.TableCell };

export interface Meta {
  name: string;
  description?: string;
}

export interface Property extends Meta {
  type: Type;

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
  value: string;
}

export interface UnionType extends BaseType {
  type: "union";
  values: string[];
}

export interface ReferenceType extends BaseType {
  type: "reference";
  link: string;
}

export interface StructureType extends BaseType {
  type: "structure";
  properties: Property[];
}

export type Type = ValueType | UnionType | ReferenceType | StructureType;