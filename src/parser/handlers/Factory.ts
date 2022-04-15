import { marked } from "marked";

import { ContextHandler, TreeHandler } from ".";
import { Factory } from "../util";

export interface Current extends Factory {
  root: marked.Token;
}

export class FactoryHandler {
  ctx: ContextHandler;

  factory: new (block: marked.Token) => Factory;
  current: Current;

  constructor(
    ctx: ContextHandler,
    factory: new (block: marked.Token) => Factory
  ) {
    this.ctx = ctx;
    this.factory = factory;
  }

  block() {
    if (this.current && !this.current.blocked) this.current = null;
  }

  flush() {
    if (this.current && this.current.ready) {
      this.current.tree = this.ctx.tree.clear();
      this.ctx.elements.push(this.current);

      for (const factory of this.ctx.factories)
        if (
          factory.current &&
          factory.current !== this.current &&
          factory.current.root &&
          factory.current.root === this.current.root
        )
          factory.current = null;

      this.current = null;
    }
  }

  process(block: marked.Token) {
    try {
      const next = new this.factory(block);
      this.flush();
      this.current = Object.assign(next, { root: block });
    } catch (err) {
      if (err !== "invalid") console.error(err);
      else if (this.current) this.current.process(block);
    }

    if (this.current && this.current.blocked) throw "blocked";
  }
}