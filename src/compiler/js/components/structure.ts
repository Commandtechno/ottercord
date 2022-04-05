import * as ts from "typescript";

import { Structure } from "../../../common";

import { pascalCase } from "../../util";
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

    let property = ts.factory.createPropertySignature(
      undefined,
      ts.factory.createStringLiteral(prop.name),
      questionToken,
      type
    );

    if (prop.description)
      property = ts.addSyntheticLeadingComment(
        property,
        ts.SyntaxKind.MultiLineCommentTrivia,
        "* " + prop.description
      );

    properties.push(property);
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