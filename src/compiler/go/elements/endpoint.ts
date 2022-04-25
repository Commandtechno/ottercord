import { camelCase } from "../../util";
import { Endpoint } from "../../../common";
import { Context } from "../../context";

export function renderEndpoint(ctx: Context, endpoint: Endpoint) {
  let name = ctx.getName(camelCase(endpoint.name));
  let params = [];
  let body = [];
  for (const part of endpoint.path) {
    if (part.type === "variable") {
      params.push(camelCase(part.name) + " string");
    }
  }

  let code = `func (client *Client) ${name} (${params.join(", ")}) {\n${body.join("\n\n")}\n}`;
  return code;
}