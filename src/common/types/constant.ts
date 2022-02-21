import { Meta } from ".";

export interface Constant extends Meta {
  properties: ConstantProperty[];
}

export interface ConstantProperty extends Meta {
  value: string | number;
}