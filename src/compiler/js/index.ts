import * as ts from "typescript";

import { readFileSync } from "fs";
import { resolve } from "path";

import { Context } from "../context";
import { renderConstant, renderEndpoint, renderStructure } from "./components";

export function JS(data) {
  const ctx = new Context(data);
  const nodes: ts.Node[] = [];

  for (const constant of ctx.constants)
    nodes.push(renderConstant(ctx, constant));

  for (const structure of ctx.structures)
    nodes.push(renderStructure(ctx, structure));

  for (const endpoint of ctx.endpoints)
    nodes.push(renderEndpoint(ctx, endpoint));

  const file = ts.createSourceFile(
    "",
    "",
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS
  );

  const runtime = readFileSync(resolve(__dirname, "runtime.ts"), "utf-8");
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const code =
    runtime +
    printer.printList(
      ts.ListFormat.MultiLine,
      ts.factory.createNodeArray(nodes),
      file
    );

  return code;
}