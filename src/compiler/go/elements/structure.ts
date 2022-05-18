import { Structure } from "../../../common";
import { Context } from "../../context";

import { pascalCase } from "../../util";
import { renderType } from "./types";

export function renderStructure(ctx: Context, structure: Structure) {
  let props = [];
  for (const prop of structure.props) {
    const name = pascalCase(prop.name);
    const type = renderType(ctx, prop.type);

    let rendered = "\t" + name + " " + type;
    if (name !== prop.name) rendered += " `json:" + JSON.stringify(prop.name) + "`";

    props.push(rendered);
  }

  let code = `type ${ctx.getName(pascalCase(structure.name))} struct {\n${props.join("\n")}\n}`;
  return code;
}