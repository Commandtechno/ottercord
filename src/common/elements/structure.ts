import { BaseElement, StructureProperty } from "..";

export interface Structure extends BaseElement {
  type: "structure";
  props: StructureProperty[];
}