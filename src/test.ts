import * as ts from "typescript";

const file = ts.createSourceFile(
  "",
  "",
  ts.ScriptTarget.ESNext,
  false,
  ts.ScriptKind.TS
);

const nodes = [
  ts.factory.createEnumDeclaration(
    undefined,
    undefined,
    ts.factory.createIdentifier("test"),
    [
      ts.factory.createEnumMember(
        "cock",
        ts.factory.createStringLiteral("balls")
      )
    ]
  )
];

const printer = ts.createPrinter();
const output = printer.printList(
  ts.ListFormat.MultiLine,
  ts.factory.createNodeArray(nodes),
  file
);

console.log(output);