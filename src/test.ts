import * as ts from "typescript";

const file = ts.createSourceFile(
  "",
  "",
  ts.ScriptTarget.ESNext,
  false,
  ts.ScriptKind.TS
);

const nodes = [
  ts.factory.createJSDocComment("hello"),
  ts.factory.createEnumDeclaration(
    undefined,
    undefined,
    ts.factory.createIdentifier("test"),
    [
      ts.addSyntheticLeadingComment(
        ts.factory.createEnumMember(
          "cock",
          ts.factory.createStringLiteral("balls")
        ),
        ts.SyntaxKind.MultiLineCommentTrivia,
        "*\n* hello\n* hello\n",
        true
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