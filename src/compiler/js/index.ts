import * as ts from "typescript";

import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

import { JS_OUTPUT_DIR } from "../constants";
import { Context } from "../context";

import { renderConstant, renderEndpoint, renderStructure } from "./elements";

export async function JS(ctx: Context) {
  const nodes: ts.Node[] = [];
  for (const element of ctx.elements) {
    switch (element.type) {
      case "constant":
        nodes.push(renderConstant(ctx, element));
        break;

      case "structure":
        nodes.push(renderStructure(ctx, element));
        break;

      case "endpoint":
        nodes.push(renderEndpoint(ctx, element));
        break;
    }
  }

  const file = ts.createSourceFile("", "", ts.ScriptTarget.ESNext, false, ts.ScriptKind.TS);

  const runtime = await readFile(resolve(__dirname, "runtime.ts"), "utf-8");
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const code = [
    runtime,
    printer.printList(ts.ListFormat.MultiLine, ts.factory.createNodeArray(nodes), file)
  ].join("\n");

  const path = resolve(JS_OUTPUT_DIR, "index.ts");
  await writeFile(path, code);

  const program = ts.createProgram([path], { declaration: true });
  program.emit();
}