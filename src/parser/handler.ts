import { marked } from "marked";

import { Status } from "./types";
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

let tree: Tree = [];

export class Handler<T extends Engine> extends Array<InstanceType<T>> {
  engine: T;
  current: InstanceType<T>;

  constructor(engine: T) {
    super();
    this.engine = engine;
  }

  clear() {
    if (this.current) {
      if (this.current.ready) {
        this.push(this.current);
      } else {
        tree = [];
      }

      this.current = null;
    }
  }

  flush() {
    if (this.current) {
      if (this.current.ready) {
        // this.push(this.current);
      }

      this.current = null;
    }
  }

  process(
    block: marked.Token,
    link: string,
    _tree: Tree,
    _clearTree: () => void,
    clearHandlers: () => void,
    callback?: () => void
  ) {
    if (link) tree.push(link);

    try {
      // im not sure why this is needed but these type things are interesting
      let next = new this.engine(block) as InstanceType<T>;
      if (this.current)
        if (this.current.ready) {
          clearHandlers();
        }

      this.current = next;
      // if (link) {
      this.current.tree.push(...tree);
      // }
    } catch (err) {
      if (typeof err !== "string") {
        // an actual error
        console.error(err);
        return;
      }

      if (this.current) this.current.process(block);
    }

    if (this.current) {
      // if (this.current.status === Status.Completed) {
      //   this.current.tree = [...tree];
      //   clearTree();

      //   this.push(this.current);
      //   clearHandlers();
      //   return;
      // }

      if (this.current.block) {
        return;
      }
    }

    if (callback) callback();
  }
}