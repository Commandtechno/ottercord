import { pascalCase } from "../../util";
import { Constant } from "../../../common";
import { Context } from "../../context";

export function renderConstant(ctx: Context, constant: Constant) {
  const type = constant.props.every(p => typeof p.value === "string")
    ? "string"
    : constant.props.every(p => typeof p.value === "number")
    ? "int"
    : null;

  const typeName = type && ctx.getName(pascalCase(constant.name));
  const props = [];

  for (const prop of constant.props) {
    const name = ctx.getName(pascalCase(constant.name, prop.name));
    const value = JSON.stringify(prop.value);

    let rendered = "\t" + name;
    if (typeName) rendered += " " + typeName;
    rendered += " = " + value;
    props.push(rendered);
  }

  let rendered = `const (\n${props.join("\n")}\n)`;
  if (type) rendered = `type ${typeName} = ${type}\n\n${rendered}`;

  return rendered;
}