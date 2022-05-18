import * as ts from "typescript";

import { renderType } from ".";
import { camelCase } from "../../util";
import { Endpoint } from "../../../common";
import { Context } from "../../context";

export function renderEndpoint(ctx: Context, endpoint: Endpoint) {
  if (endpoint.extends) {
    const extended = ctx.elements.find(
      e => e.type === "endpoint" && e.tree.includes(endpoint.extends)
    );

    if (extended) endpoint = { ...extended, ...endpoint };
  }

  let parameters: ts.ParameterDeclaration[] = [];
  let returnType: ts.TypeNode;
  let path: ts.Expression;
  let headers: ts.ObjectLiteralElementLike[] = [];
  let fetchProperties: ts.ObjectLiteralElementLike[] = [];

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

    path = ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(path, "concat"),
      undefined,
      [expression]
    );
  }

  if (endpoint.request) {
    parameters.push(
      ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        "body",
        undefined,
        ts.factory.createTypeReferenceNode("toJSON", [renderType(ctx, endpoint.request.type)])
      )
    );

    fetchProperties.push(
      ts.factory.createPropertyAssignment(
        "body",
        ts.factory.createCallExpression(
          ts.factory.createPropertyAccessExpression(
            ts.factory.createIdentifier("JSON"),
            "stringify"
          ),
          undefined,
          [ts.factory.createIdentifier("body")]
        )
      )
    );
  }

  headers.push(
    ts.factory.createPropertyAssignment(
      ts.factory.createIdentifier("Authorization"),
      ts.factory.createCallExpression(ts.factory.createIdentifier("getAuth"), undefined, undefined)
    )
  );

  if (endpoint.response)
    returnType = ts.factory.createTypeReferenceNode(ts.factory.createIdentifier("Promise"), [
      renderType(ctx, endpoint.response)
    ]);

  fetchProperties.push(
    ts.factory.createPropertyAssignment("method", ts.factory.createStringLiteral(endpoint.method)),
    ts.factory.createPropertyAssignment("path", path),
    ts.factory.createPropertyAssignment(
      "headers",
      ts.factory.createObjectLiteralExpression(headers)
    )
  );

  let result = ts.factory.createFunctionDeclaration(
    undefined,
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    undefined,
    ctx.getName(camelCase(endpoint.name)),
    undefined,
    parameters,
    returnType,
    ts.factory.createBlock(
      [
        ts.factory.createReturnStatement(
          ts.factory.createCallExpression(ts.factory.createIdentifier("fetch"), undefined, [
            ts.factory.createObjectLiteralExpression(fetchProperties, true)
          ])
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