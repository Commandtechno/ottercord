import { Element } from "../common";

export class Context {
  elements: Element[];

  constructor(elements: Element[]) {
    this.elements = elements;
  }

  nameCache = new Set<string>();

  getName(name: string) {
    if (this.nameCache.has(name)) {
      name += "_";
      return this.getName(name);
    }

    this.nameCache.add(name);
    return name;
  }
}