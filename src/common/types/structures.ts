import { Meta, Type } from ".";

export interface Structure extends Meta {
  properties: StructureProperty[];
}

export interface StructureProperty extends Meta {
  type: Type;
}