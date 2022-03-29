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
        ts.factory.createStringLiteral("hello"),
        undefined
      ),
      ts.factory.createEnumMember(
        ts.factory.createIdentifier("test"),
        undefined
      )
    ]
  ),
  ts.factory.createEnumDeclaration(
    undefined,
    undefined,
    ts.factory.createIdentifier("test"),
    [
      ts.factory.createEnumMember(
        ts.factory.createStringLiteral("hello"),
        undefined
      ),
      ts.factory.createEnumMember(
        ts.factory.createIdentifier("test"),
        undefined
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