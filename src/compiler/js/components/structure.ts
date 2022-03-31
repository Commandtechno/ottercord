import * as ts from "typescript";

import { pascalCase } from "change-case";

import { Structure } from "../../../common";
import { Context } from "../../context";

import { renderType } from ".";

export function renderStructure(ctx: Context, structure: Structure) {
  const properties: ts.TypeElement[] = [];
  for (const prop of structure.props) {
    let questionToken: ts.QuestionToken;
    if (prop.optional)
      questionToken = ts.factory.createToken(ts.SyntaxKind.QuestionToken);

    let type = renderType(ctx, prop.type);
    if (prop.nullable)
      type = ts.factory.createUnionTypeNode([type, ts.factory.createNull()]);

    properties.push(
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createStringLiteral(prop.name),
        questionToken,
        type
      )
    );
  }

  return ts.factory.createInterfaceDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ctx.getName(pascalCase(structure.name)),
    undefined,
    undefined,
    properties
  );
}