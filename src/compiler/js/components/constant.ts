import * as ts from "typescript";

import { Constant } from "../../../common";

import { pascalCase } from "../../util";
import { Context } from "../../context";

export function renderConstant(ctx: Context, constant: Constant) {
  const properties: ts.ObjectLiteralElementLike[] = [];
  for (const prop of constant.props) {
    let value: ts.Expression;
    switch (typeof prop.value) {
      case "string":
        value = ts.factory.createStringLiteral(prop.value);
        break;

      case "number":
        value = ts.factory.createNumericLiteral(prop.value);
        break;
    }

    let property = ts.factory.createPropertyAssignment(
      ts.factory.createStringLiteral(pascalCase(prop.name)),
      value
    );

    if (prop.description)
      property = ts.addSyntheticLeadingComment(
        property,
        ts.SyntaxKind.MultiLineCommentTrivia,
        "* " + prop.description
      );

    properties.push(property);
  }

  return ts.factory.createVariableStatement(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          ctx.getName(pascalCase(constant.name)),
          undefined,
          undefined,
          ts.factory.createAsExpression(
            ts.factory.createObjectLiteralExpression(properties, true),
            ts.factory.createTypeReferenceNode("const")
          )
        )
      ],
      ts.NodeFlags.Const
    )
  );
}