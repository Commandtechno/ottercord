import { BaseContext } from "../common";

export class Context extends BaseContext {
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