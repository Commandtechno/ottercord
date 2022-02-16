import { Type } from ".";

export interface Structure {
  name: string;
  description: string;

  properties: StructureProperty[];
}

export interface StructureProperty {
  name: string;
  description?: string;

  type: Type;
}