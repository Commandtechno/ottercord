import { Base } from ".";

export interface Constant extends Base {
  properties: ConstantProperty[];
}

export interface ConstantProperty {
  description?: string;

  key: string;
  value: string | number;
}