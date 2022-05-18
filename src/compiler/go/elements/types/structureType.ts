import { StructureType } from "../../../../common";
import { Context } from "../../../context";

import { pascalCase } from "../../../util";

export function renderStructureType(ctx: Context, structureType: StructureType) {
  const props = [];
  for (const prop of structureType.props) {
    const name = pascalCase(prop.name);
    props.push("\t" + name + " interface{}");
  }

  let code = `struct {\n${props.join("\n")}\n}`;
  return code;
}
