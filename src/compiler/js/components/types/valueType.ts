import { SyntaxKind, factory } from "typescript";

import { ValueType } from "../../../../common";
import { Context } from "../../../context";

export function renderValueType(ctx: Context, valueType: ValueType) {
  switch (valueType.value) {
    case "null":
      return factory.createNull();

    case "string":
      return factory.createKeywordTypeNode(SyntaxKind.StringKeyword);

    case "float":
    case "integer":
      return factory.createKeywordTypeNode(SyntaxKind.NumberKeyword);

    case "bigint":
      return factory.createKeywordTypeNode(SyntaxKind.BigIntKeyword);

    case "boolean":
      return factory.createKeywordTypeNode(SyntaxKind.BooleanKeyword);

    case "object":
      return factory.createKeywordTypeNode(SyntaxKind.ObjectKeyword);

    case "date":
      return factory.createIdentifier("Date");

    case "binary":
      return factory.createIdentifier("Buffer");

    case "file":
      return factory.createStringLiteral("balls");

    case "snowflake":
      return factory.createUnionTypeNode([
        factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
        factory.createKeywordTypeNode(SyntaxKind.BigIntKeyword)
      ]);

    case "any":
      return factory.createKeywordTypeNode(SyntaxKind.AnyKeyword);

    default:
      throw new Error("Unknown type: " + valueType.value);
  }
}