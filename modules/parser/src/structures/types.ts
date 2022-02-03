import { Type } from "../util";

export type Context = "none" | "structure";

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