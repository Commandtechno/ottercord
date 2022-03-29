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
  currentRoot: marked.Token;

  constructor(engine: T) {
    super();
    this.engine = engine;
  }

  block() {
    if (this.current && !this.current.block) {
      this.current = null;
      this.currentRoot = null;
    }
  }

  flush(tree: string[], handlers: Array<Handler<Engine>>) {
    if (this.current && this.current.ready) {
      this.current.tree = [...tree];
      while (tree.length) tree.shift();

      this.push(this.current);
      for (const handler of handlers)
        if (
          this !== handler &&
          handler.currentRoot &&
          handler.currentRoot === this.currentRoot
        ) {
          handler.current = null;
          handler.currentRoot = null;
        }

      this.current = null;
      this.currentRoot = null;
    }
  }

  process(
    block: marked.Token,
    tree: string[],
    handlers: Array<Handler<Engine>>
  ) {
    try {
      const next = new this.engine(block) as InstanceType<T>;
      this.flush(tree, handlers);
      this.current = next;
      this.currentRoot = block;
    } catch {
      if (this.current) {
        this.current.process(block);
      }
    }

    if (this.current && this.current.block) {
      throw "block";
    }
  }
}