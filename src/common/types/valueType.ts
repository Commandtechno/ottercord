import { BaseType } from "./baseType";

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