import * as ts from "typescript";

import { renderType } from ".";
import { camelCase } from "../../util";
import { Endpoint } from "../../../common";
import { Context } from "../../context";

export function renderEndpoint(ctx: Context, endpoint: Endpoint) {
  if (endpoint.extends) {
    const extended = ctx.elements.find(e => e.type === "endpoint" && e.tree.includes(endpoint.extends));

    if (extended) endpoint = { ...extended, ...endpoint };
  }

  let parameters: ts.ParameterDeclaration[] = [];
  let returnType: ts.TypeNode;
  let path: ts.Expression;
  let requestProperties: ts.ObjectLiteralElementLike[] = [];

  for (const param of endpoint.path) {
    let expression: ts.Expression;
    switch (param.type) {
      case "literal":
        expression = ts.factory.createStringLiteral(param.value);
        break;

      case "variable":
        expression = ts.factory.createIdentifier(camelCase(param.name));
        parameters.push(
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            camelCase(param.name),
            undefined,
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
          )
        );

        break;
    }

    if (!path) {
      path = expression;
      continue;
    }

    path = ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(path, "concat"), undefined, [
      expression
    ]);
  }

  if (endpoint.request) {
    parameters.push(
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        "body",
        undefined,
        ts.factory.createTypeReferenceNode("JSON", [renderType(ctx, endpoint.request.type)])
      )
    );

    requestProperties.push(ts.factory.createPropertyAssignment("body", ts.factory.createIdentifier("body")));

    if (endpoint.request.form) {
      parameters.push(
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          "files",
          ts.factory.createToken(ts.SyntaxKind.QuestionToken),
          ts.factory.createArrayTypeNode(ts.factory.createTypeReferenceNode("RawFile"))
        )
      );

      requestProperties.push(ts.factory.createPropertyAssignment("files", ts.factory.createIdentifier("files")));
    }
  }

  if (endpoint.response)
    returnType = ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Promise"), [
      renderType(ctx, endpoint.response)
    ]);

  requestProperties.push(
    ts.factory.createPropertyAssignment("method", ts.factory.createStringLiteral(endpoint.method)),
    ts.factory.createPropertyAssignment("fullRoute", path)
  );

  let result = ts.factory.createMethodDeclaration(
    undefined,
    undefined,
    undefined,
    ctx.getName(camelCase(endpoint.name)),
    undefined,
    undefined,
    parameters,
    returnType,
    ts.factory.createBlock(
      [
        ts.factory.createReturnStatement(
          ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(ts.factory.createThis(), "request"),
            undefined,
            [ts.factory.createObjectLiteralExpression(requestProperties, true)]
          )
        )
      ],
      true
    )
  );

  if (endpoint.description)
    result = ts.addSyntheticLeadingComment(
      result,
      ts.SyntaxKind.MultiLineCommentTrivia,
      "* " + endpoint.description,
      true
    );

  return result;
}
