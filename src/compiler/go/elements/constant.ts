import { pascalCase } from "../../util";
import { Constant } from "../../../common";
import { Context } from "../../context";

export function renderConstant(ctx: Context, constant: Constant) {
  let props = [];
  for (const prop of constant.props) {
    const name = ctx.getName(pascalCase(constant.name, prop.name));
    const value = JSON.stringify(prop.value);
    props.push("\t" + name + " = " + value);
  }

  let code = `const (\n${props.join("\n")}\n)`;
  return code;
}