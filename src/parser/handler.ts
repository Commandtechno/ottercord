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

export class Handler<T extends Engine> extends Array<InstanceType<T>> {
  engine: T;
  current: InstanceType<T>;

  constructor(engine: T) {
    super();
    this.engine = engine;
  }

  process(
    block: marked.Token,
    tree: Tree,
    clearTree: () => void,
    callback?: () => void
  ) {
    try {
      // im not sure why this is needed but these type things are interesting
      let next = new this.engine(block) as InstanceType<T>;
      if (this.current)
        if (
          this.current.status === Status.Ready ||
          this.current.status === Status.Completed
        ) {
          this.current.tree = [...tree];
          clearTree();

          this.push(this.current);
        }

      this.current = next;
    } catch (err) {
      if (typeof err !== "string") {
        // an actual error
        console.error(err);
        return;
      }

      if (this.current) {
        this.current.process(block);
        if (this.current.status === Status.Completed) {
          this.current.tree = [...tree];
          clearTree();

          this.push(this.current);
          this.current = undefined;
          return;
        } else if (this.current.status === Status.Ready) {
          return;
        }
      }
    }

    if (callback) callback();
  }
}