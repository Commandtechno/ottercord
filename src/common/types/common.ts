import { marked } from "marked";

export type Row = { [key: string]: marked.Tokens.TableCell };

// export interface Type {
//   // reference properties for linking
//   reference: boolean;
//   partial: boolean;

//   // idk properties
//   optional: boolean;
//   nullable: boolean;
//   // default?: string; add later idk

//   // value properties
//   array: boolean;
//   value: string | string[];
// }

// export interface Param extends Type {
//   name: string;
//   description?: string;

//   deprecated: boolean;
// }

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