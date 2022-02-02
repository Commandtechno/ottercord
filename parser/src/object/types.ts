export type Context = "none" | "object" | "structure";

//  Object is reserved lol
export interface _Object {
  name: string;
  description?: string;
  structures: Structure[];
}

export interface StructureParam {
  type: string;
  name: string;
  description: string;
  required: boolean;
}