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
  _test: boolean = false;

  constructor(engine: T) {
    super();
    this.engine = engine;
  }

  process(block: marked.Token, handlers) {
    this._test = false;
    try {
      const next = new this.engine(block) as InstanceType<T>;
      this.flush(handlers);
      this.current = next;
      this._test = true;
    } catch {
      if (this.current) {
        this.current.process(block);
      }
    }
  }

  flush(handlers) {
    if (this.current && this.current.ready) {
      this.push(this.current);
      for (const handler of handlers) {
        if (!handler._test) {
          handler.current = null;
        }
      }
    }
  }
}