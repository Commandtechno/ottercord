import { camelCase } from "../../util";
import { Endpoint } from "../../../common";
import { Context } from "../../context";

export function renderEndpoint(ctx: Context, endpoint: Endpoint) {
  let name = ctx.getName(camelCase(endpoint.name));
  let params = [];
  let body = [];
  let path = {
    template: "",
    variables: []
  };

  for (const part of endpoint.path) {
    if (part.type === "variable") {
      params.push(camelCase(part.name) + " string");
      path.template += "%s";
      path.variables.push(camelCase(part.name));
    }

    if (part.type === "literal") {
      path.template += part.value;
    }
  }

  if (endpoint.request) {
    params.push("body interface{}");
  }

  body.push(
    "\treturn fmt.Sprintf(" + JSON.stringify(path.template) + ", " + path.variables.join(", ") + ")"
  );

  let code = `func (client *Client) ${name}(${params.join(", ")}) string {\n${body.join(
    "\n\n"
  )}\n}`;
  return code;
}
