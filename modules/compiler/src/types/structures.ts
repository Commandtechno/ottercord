import { Type } from "./common";

export interface Structure {
  name: string;
  params: StructureParam[];
}

export interface StructureParam {
  type: Type;
  name: string;
  description: string;
  required: boolean;
}