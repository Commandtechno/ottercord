export type Context = "none" | "constant";

export interface Constant {
  name: string;
  description?: string;
  values: ConstantValue[];
}

export interface ConstantValue {
  name: string;
  value: string | number;
  description?: string;
}