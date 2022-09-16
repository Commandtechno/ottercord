import * as ts from "typescript";

import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

import { JS_OUTPUT_DIR } from "../constants";
import { Context } from "../context";

import { renderConstant, renderEndpoint, renderStructure } from "./elements";

export async function JS(ctx: Context) {
  const constants: ts.Node[] = [];
  const structures: ts.Node[] = [];
  const endpoints: ts.Node[] = [];
  for (const element of ctx.elements) {
    switch (element.type) {
      case "constant":
        constants.push(renderConstant(ctx, element));
        break;

      case "structure":
        structures.push(renderStructure(ctx, element));
        break;

      case "endpoint":
        endpoints.push(renderEndpoint(ctx, element));
        break;
    }
  }

  const file = ts.createSourceFile("", "", ts.ScriptTarget.ESNext, false, ts.ScriptKind.TS);

  const runtime = await readFile(resolve(__dirname, "runtime.ts"), "utf-8");
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const code = runtime
    .replace(
      "/* __CONSTANTS__ */",
      printer.printList(ts.ListFormat.MultiLine, ts.factory.createNodeArray(constants), file)
    )
    .replace(
      "/* __STRUCTURES__ */",
      printer.printList(ts.ListFormat.MultiLine, ts.factory.createNodeArray(structures), file)
    )
    .replace(
      "/* __ENDPOINTS__ */",
      printer.printList(ts.ListFormat.MultiLine, ts.factory.createNodeArray(endpoints), file)
    );

  const path = resolve(JS_OUTPUT_DIR, "index.ts");
  await writeFile(path, code);

  ts.createProgram([path], {
    declaration: true,
    target: ts.ScriptTarget.ES2015,
    module: ts.ModuleKind.CommonJS
  }).emit();
}
