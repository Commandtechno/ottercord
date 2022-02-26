import ts from "typescript";

export function render(node: ts.Node) {
  const file = ts.createSourceFile("", "", ts.ScriptTarget.ESNext, false, ts.ScriptKind.TS);
  const printer = ts.createPrinter();
  const result = printer.printNode(ts.EmitHint.Unspecified, node, file);
  return result;
}