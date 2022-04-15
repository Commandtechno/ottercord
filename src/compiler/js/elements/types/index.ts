import { factory } from "typescript";

import { Type } from "../../../../common";

import { renderStructureType } from "./structureType";
import { renderReferenceType } from "./referenceType";
import { renderValueType } from "./valueType";
import { Context } from "../../../context";

export function renderType(ctx: Context, type: Type | Type[]) {
  if (Array.isArray(type)) {
    return factory.createUnionTypeNode(type.map(_ => renderType(ctx, _)));
  }

  let renderedType;
  switch (type.type) {
    case "value":
      renderedType = renderValueType(ctx, type);
      break;

    case "structure":
      renderedType = renderStructureType(ctx, type);
      break;

    case "reference":
      renderedType = renderReferenceType(ctx, type);
      break;
  }

  if (type.partial)
    renderedType = factory.createTypeReferenceNode(
      factory.createIdentifier("Partial"),
      [renderedType]
    );

  if (type.array)
    renderedType = factory.createTypeReferenceNode(
      factory.createIdentifier("Array"),
      [renderedType]
    );

  return renderedType;
}