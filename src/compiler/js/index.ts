import { readFileSync } from "fs";
import { resolve } from "path";

import * as ts from "typescript";

import {
  Constant,
  Endpoint,
  Example,
  Structure,
  ValueType,
  StructureType,
  ReferenceType,
  Type
} from "../../common";

import { camel, pascal } from "../util";

export class JS {
  nodes: ts.Node[] = [];

  constants: Constant[];
  endpoints: Endpoint[];
  examples: Example[];
  structures: Structure[];

  constructor({
    constants,
    endpoints,
    examples,
    structures
  }: {
    constants: Constant[];
    endpoints: Endpoint[];
    examples: Example[];
    structures: Structure[];
  }) {
    this.constants = constants;
    this.endpoints = endpoints;
    this.examples = examples;
    this.structures = structures;
  }

  get code() {
    const file = ts.createSourceFile(
      "",
      "",
      ts.ScriptTarget.ESNext,
      false,
      ts.ScriptKind.TS
    );

    const printer = ts.createPrinter();
    return (
      readFileSync(resolve(__dirname, "runtime.ts"), "utf-8") +
      printer.printList(
        ts.ListFormat.MultiLine,
        ts.factory.createNodeArray(this.nodes),
        file
      )
    );
  }

  renderValueType(valueType: ValueType) {
    switch (valueType.value) {
      case "null":
        return ts.factory.createNull();

      case "string":
        return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);

      case "float":
      case "integer":
        return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);

      case "bigint":
        return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BigIntKeyword);

      case "boolean":
        return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);

      case "object":
        return ts.factory.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword);

      case "date":
        return ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier("Date"),
          undefined
        );

      case "binary":
        return ts.factory.createIdentifier("Buffer");

      case "file":
        return ts.factory.createStringLiteral("balls");

      case "snowflake":
        return ts.factory.createUnionTypeNode([
          ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          ts.factory.createKeywordTypeNode(ts.SyntaxKind.BigIntKeyword)
        ]);

      case "any":
        return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);

      default:
        throw new Error("Unknown type: " + valueType.value);
    }
  }

  renderStructureType(structureType: StructureType) {
    return ts.factory.createTypeLiteralNode(
      structureType.props.map(prop =>
        ts.factory.createPropertySignature(
          undefined,
          ts.factory.createIdentifier(prop.name),
          prop.optional
            ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
            : undefined,
          this.renderType(prop.type)
        )
      )
    );
  }

  renderReferenceType(referenceType: ReferenceType) {
    const constant = this.constants.find(c =>
      c.tree.includes(referenceType.link)
    );

    if (constant)
      return ts.factory.createIndexedAccessTypeNode(
        ts.factory.createTypeQueryNode(
          ts.factory.createIdentifier(pascal(constant.name))
        ),
        ts.factory.createTypeOperatorNode(
          ts.SyntaxKind.KeyOfKeyword,
          ts.factory.createTypeQueryNode(
            ts.factory.createIdentifier(pascal(constant.name))
          )
        )
      );

    const structure = this.structures.find(s =>
      s.tree.includes(referenceType.link)
    );

    if (structure)
      return ts.factory.createTypeReferenceNode(
        ts.factory.createIdentifier(pascal(structure.name)),
        undefined
      );

    if (referenceType.fallback)
      return this.renderValueType(referenceType.fallback);

    console.log("Could not find reference: " + referenceType.link);
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  }

  renderType(type: Type | Type[]) {
    if (Array.isArray(type)) {
      return ts.factory.createUnionTypeNode(type.map(t => this.renderType(t)));
    }

    let renderedType;
    if (type.type === "value") renderedType = this.renderValueType(type);
    else if (type.type === "structure")
      renderedType = this.renderStructureType(type);
    else if (type.type === "reference")
      renderedType = this.renderReferenceType(type);

    if (type.partial)
      renderedType = ts.factory.createTypeReferenceNode(
        ts.factory.createIdentifier("Array"),
        [renderedType]
      );

    if (type.array)
      renderedType = ts.factory.createTypeReferenceNode(
        ts.factory.createIdentifier("Partial"),
        [renderedType]
      );

    return renderedType;
  }

  renderConstant(constant: Constant) {
    return ts.factory.createVariableStatement(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            ts.factory.createIdentifier(pascal(constant.name)),
            undefined,
            undefined,
            ts.factory.createAsExpression(
              ts.factory.createObjectLiteralExpression(
                constant.props.map(prop =>
                  ts.factory.createPropertyAssignment(
                    ts.factory.createIdentifier(pascal(prop.name)),
                    typeof prop.value === "string"
                      ? ts.factory.createStringLiteral(prop.value)
                      : ts.factory.createNumericLiteral(prop.value)
                  )
                ),
                true
              ),
              ts.factory.createTypeReferenceNode(
                ts.factory.createIdentifier("const"),
                undefined
              )
            )
          )
        ],
        ts.NodeFlags.Const
      )
    );
  }

  renderEndpoint(endpoint: Endpoint) {
    return ts.factory.createFunctionDeclaration(
      undefined,
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      undefined,
      ts.factory.createIdentifier(camel(endpoint.name)),
      undefined,
      endpoint.params.map(param =>
        ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          undefined,
          ts.factory.createIdentifier(camel(param.name)),
          undefined,
          ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          undefined
        )
      ),
      endpoint.response
        ? ts.factory.createTypeReferenceNode(
            ts.factory.createIdentifier("Promise"),
            [this.renderType(endpoint.response)]
          )
        : undefined,
      ts.factory.createBlock([
        ts.factory.createReturnStatement(
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("fetch"),
            undefined,
            [
              ts.factory.createObjectLiteralExpression(
                [
                  ts.factory.createPropertyAssignment(
                    ts.factory.createIdentifier("method"),
                    ts.factory.createStringLiteral(endpoint.method)
                  ),
                  ts.factory.createPropertyAssignment(
                    ts.factory.createIdentifier("path"),
                    ts.factory.createStringLiteral(endpoint.path)
                  ),
                  endpoint.request
                    ? ts.factory.createPropertyAssignment(
                        "body",
                        ts.factory.createCallExpression(
                          ts.factory.createPropertyAccessExpression(
                            ts.factory.createIdentifier("JSON"),
                            ts.factory.createIdentifier("stringify")
                          ),
                          undefined,
                          [ts.factory.createIdentifier("body")]
                        )
                      )
                    : undefined,
                  ts.factory.createPropertyAssignment(
                    ts.factory.createIdentifier("headers"),
                    ts.factory.createObjectLiteralExpression(
                      [
                        endpoint.request
                          ? ts.factory.createPropertyAssignment(
                              ts.factory.createStringLiteral("Content-Type"),
                              ts.factory.createStringLiteral("application/json")
                            )
                          : undefined,
                        ts.factory.createPropertyAssignment(
                          ts.factory.createIdentifier("Authorization"),
                          ts.factory.createBinaryExpression(
                            ts.factory.createStringLiteral("Bot "),
                            ts.factory.createToken(ts.SyntaxKind.PlusToken),
                            ts.factory.createIdentifier("token")
                          )
                        )
                      ].filter(Boolean),
                      false
                    )
                  )
                ].filter(Boolean)
              )
            ]
          )
        )
      ])
    );
  }

  renderStructure(structure: Structure) {
    return ts.factory.createInterfaceDeclaration(
      undefined,
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createIdentifier(pascal(structure.name)),
      undefined,
      undefined,
      structure.props
        .map(prop =>
          ts.factory.createPropertySignature(
            undefined,
            ts.factory.createIdentifier(prop.name),
            prop.optional
              ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
              : undefined,
            this.renderType(prop.type)
          )
        )
        .filter(Boolean)
    );
  }
}