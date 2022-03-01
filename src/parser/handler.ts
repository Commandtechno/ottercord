import { marked } from "marked";

import { Action } from "./types";
import { Tree } from "../common";

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

  process(block: marked.Token, tree: Tree, callback?: () => void) {
    console.log(this.engine.name);
    try {
      // im not sure why this is needed but these type things are interesting
      let next = new this.engine(block) as InstanceType<T>;
      if (this.current) this.push(this.current);

      next.tree = [...tree];
      this.current = next;
    } catch (err) {
      if (typeof err !== "string") {
        // an actual error
        console.error(err);
      }

      if (!this.current) {
        if (callback) callback();
        return;
      }

      this.current.process(block);
      switch (this.current.action) {
        case Action.Next:
          if (callback) callback();
          break;

        case Action.Save:
          this.push(this.current);
          this.current = undefined;
          break;

        case Action.Block:
          break;
      }
    }
  }
}