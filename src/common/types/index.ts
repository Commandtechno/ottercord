export * from "./baseType";
export * from "./referenceType";
export * from "./structureType";
export * from "./valueType";

import { ReferenceType, StructureType, ValueType } from ".";
export type Type = ReferenceType | StructureType | ValueType;