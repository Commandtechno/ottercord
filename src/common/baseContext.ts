import { Constant, Endpoint, Example, Structure } from ".";

export class BaseContext {
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
}