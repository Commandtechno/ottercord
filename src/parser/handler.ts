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
  _next: InstanceType<T>;

  constructor(engine: T) {
    super();
    this.engine = engine;
  }

  process(block: marked.Token) {
    if (this.current) {
      this.current.process(block);
      // if (this.current.block) {
      //   return;
      // }
    }
  }

  next(block: marked.Token) {
    try {
      const next = new this.engine(block) as InstanceType<T>;
      this._next = next;
    } catch {}
  }

  clean(clear: () => void) {
    if (this._next) {
      if (this.current && this.current.ready) {
        this.push(this.current);
        clear();
      }

      this.current = this._next;
      this._next = undefined;
    }
  }

  clear() {
    if (this.current) {
      this.current = undefined;
    }
  }
}