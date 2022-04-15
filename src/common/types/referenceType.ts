import { BaseType } from "./baseType";
import { ValueType } from "./valueType";

export interface ReferenceType extends BaseType {
  type: "reference";
  link: string;
  fallback?: ValueType;
}