import * as ts from "typescript";

import { createPropertyName } from "../util";
import { renderType } from ".";
import { pascalCase } from "../../util";
import { Structure } from "../../../common";
import { Context } from "../../context";

export function renderStructure(ctx: Context, structure: Structure) {
  const properties: ts.TypeElement[] = [];
  for (const prop of structure.props) {
    let questionToken: ts.QuestionToken;
    if (prop.optional) questionToken = ts.factory.createToken(ts.SyntaxKind.QuestionToken);

    let type = renderType(ctx, prop.type);
    if (prop.nullable) type = ts.factory.createUnionTypeNode([type, ts.factory.createNull()]);

    let property = ts.factory.createPropertySignature(
      undefined,
      createPropertyName(prop.name),
      questionToken,
      type
    );

    if (prop.description)
      property = ts.addSyntheticLeadingComment(
        property,
        ts.SyntaxKind.MultiLineCommentTrivia,
        "* " + prop.description,
        true
      );

    properties.push(property);
  }

  let result = ts.factory.createInterfaceDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ctx.getName(pascalCase(structure.name)),
    undefined,
    undefined,
    properties
  );

  if (structure.description)
    result = ts.addSyntheticLeadingComment(
      result,
      ts.SyntaxKind.MultiLineCommentTrivia,
      "* " + structure.description,
      true
    );

  // const endpoints = ctx.elements.filter(
  //   e =>
  //     e.type === "endpoint" &&
  //     e.path.some(p => p.type === "variable" && structure.tree.includes(p.link))
  // );

  // console.log(endpoints);

  return result;
}