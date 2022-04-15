import { SyntaxKind, factory } from "typescript";

import { renderValueType } from "./valueType";
import { ReferenceType } from "../../../../common";
import { pascalCase } from "../../../util";
import { Context } from "../../../context";

export function renderReferenceType(
  ctx: Context,
  referenceType: ReferenceType
) {
  const constant = ctx.elements.find(
    c => c.type === "constant" && c.tree.includes(referenceType.link)
  );

  if (constant)
    return factory.createIndexedAccessTypeNode(
      factory.createTypeQueryNode(
        factory.createIdentifier(pascalCase(constant.name))
      ),
      factory.createTypeOperatorNode(
        SyntaxKind.KeyOfKeyword,
        factory.createTypeQueryNode(
          factory.createIdentifier(pascalCase(constant.name))
        )
      )
    );

  const structure = ctx.elements.find(
    s => s.type === "structure" && s.tree.includes(referenceType.link)
  );

  if (structure)
    return factory.createTypeReferenceNode(
      factory.createIdentifier(pascalCase(structure.name)),
      undefined
    );

  if (referenceType.fallback)
    return renderValueType(ctx, referenceType.fallback);

  return factory.createKeywordTypeNode(SyntaxKind.AnyKeyword);
}