import { Meta, BaseElement } from ".";

export interface Constant extends BaseElement {
  type: "constant";
  props: ConstantProperty[];
}

export interface ConstantProperty extends Meta {
  value: string | number;
}