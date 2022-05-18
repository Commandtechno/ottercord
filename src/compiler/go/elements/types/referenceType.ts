import { ReferenceType } from "../../../../common";
import { Context } from "../../../context";

import { renderValueType } from "./valueType";
import { pascalCase } from "../../../util";

export function renderReferenceType(ctx: Context, referenceType: ReferenceType) {
  const structure = ctx.elements.find(
    s => s.type === "structure" && s.tree.includes(referenceType.link)
  );

  if (structure) return "*" + pascalCase(structure.name);

  if (referenceType.fallback) return renderValueType(ctx, referenceType.fallback);

  return "interface{}";
}