import { marked } from "marked";

import { BaseElement } from "../../common";

import { FactoryHandler, TreeHandler } from "../handlers";

export type Row = { [key: string]: marked.Tokens.TableCell };

export interface Context {
  tree: TreeHandler;
  factories: FactoryHandler[];

  result: Factory[];
}

export interface Factory extends BaseElement {
  ready: boolean;
  blocked: boolean;

  process(block: marked.Token): void;
}