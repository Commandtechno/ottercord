import { BaseMeta, BaseEngine } from ".";

export interface Constant extends BaseEngine {
  props: ConstantProperty[];
}

export interface ConstantProperty extends BaseMeta {
  value: string | number;
}