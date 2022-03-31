import { Constant, Endpoint, Example, Structure } from "../common";

export class Context {
  constants: Constant[];
  endpoints: Endpoint[];
  examples: Example[];
  structures: Structure[];

  constructor({
    constants,
    endpoints,
    examples,
    structures
  }: {
    constants: Constant[];
    endpoints: Endpoint[];
    examples: Example[];
    structures: Structure[];
  }) {
    this.constants = constants;
    this.endpoints = endpoints;
    this.examples = examples;
    this.structures = structures;
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