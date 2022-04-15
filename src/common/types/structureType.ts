import { BaseType, Type, Meta } from "..";

export interface StructureProperty extends Meta {
  optional: boolean;
  nullable: boolean;
  deprecated: boolean;

  type: Type | Type[];
}

export interface StructureType extends BaseType {
  type: "structure";
  props: StructureProperty[];
}