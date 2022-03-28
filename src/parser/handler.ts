import { marked } from "marked";

import {
  EndpointEngine,
  ExampleEngine,
  StructureEngine,
  ConstantEngine
} from "./engines";

export type Engine = new (block: marked.Token) =>
  | EndpointEngine
  | ExampleEngine
  | StructureEngine
  | ConstantEngine;

export class Handler<T extends Engine> extends Array<InstanceType<T>> {
  engine: T;
  current: InstanceType<T>;

  constructor(engine: T) {
    super();
    this.engine = engine;
  }

  flush() {
    if (this.current && this.current.ready) {
      this.push(this.current);
      this.current = null;
    }
  }

  process(block: marked.Token) {
    try {
      const next = new this.engine(block) as InstanceType<T>;
      this.flush();
      this.current = next;
    } catch {
      if (this.current) {
        this.current.process(block);
      }
    }

    if (this.current && this.current.block) {
      throw "h";
    }
  }
}