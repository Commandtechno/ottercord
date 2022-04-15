import { marked } from "marked";

import { TreeHandler, FactoryHandler } from ".";
import { BaseElement } from "../../common";
import { Factory } from "../util";

export class ContextHandler {
  tree: TreeHandler;
  factories: FactoryHandler[] = [];

  elements: BaseElement[] = [];

  setTree(path: string) {
    this.tree = new TreeHandler(path);
  }

  addFactory(factory: new (block: marked.Token) => Factory) {
    this.factories.push(new FactoryHandler(this, factory));
  }

  process(block: marked.Token) {
    try {
      for (const factory of this.factories) factory.process(block);
    } catch (err) {
      if (err !== "blocked") console.error(err);
      else for (const factory of this.factories) factory.block();
    }

    this.tree.process(block);
  }

  flush() {
    for (const factory of this.factories) factory.flush();
  }
}