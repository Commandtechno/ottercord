import { Constant, Endpoint, Example, Structure } from "../common";

export class Base {
  code = "";
  indent = 0;
  newLine = false;

  nameCache = new Set<string>();

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

  getName(name: string) {
    if (this.nameCache.has(name)) {
      name += "_";
      return this.getName(name);
    }

    this.nameCache.add(name);
    return name;
  }

  write(str: string) {
    this.code += str;
  }

  tab() {
    this.code += "\t".repeat(this.indent);
  }

  line(str?: string) {
    this.code += "\n";

    if (str) {
      this.tab();
      this.write(str);
    }
  }
}