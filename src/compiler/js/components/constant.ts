import * as ts from "typescript";

import { pascalCase } from "change-case";

import { Constant } from "../../../common";
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

    properties.push(
      ts.factory.createPropertyAssignment(
        ts.factory.createStringLiteral(pascalCase(prop.name)),
        value
      )
    );
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
            ts.factory.createObjectLiteralExpression(properties),
            ts.factory.createTypeReferenceNode("const")
          )
        )
      ],
      ts.NodeFlags.Const
    )
  );
}