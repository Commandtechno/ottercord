import { BaseElement } from ".";

export interface Example extends BaseElement {
  type: "example";
  language: string;
  content: string;
}