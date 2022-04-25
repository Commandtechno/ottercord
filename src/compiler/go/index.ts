import { writeFile } from "fs/promises";
import { resolve } from "path";

import { GO_OUTPUT_DIR } from "../constants";
import { Context } from "../context";

import { renderConstant, renderEndpoint } from "./elements";

export async function GO(ctx: Context) {
  let nodes = ["package main", "type Client struct {}"];
  for (const element of ctx.elements) {
    switch (element.type) {
      case "constant":
        nodes.push(renderConstant(ctx, element));
        break;

      case "endpoint":
        nodes.push(renderEndpoint(ctx, element));
        break;
    }
  }

  const code = nodes.join("\n\n");
  const path = resolve(GO_OUTPUT_DIR, "main.go");
  await writeFile(path, code);
}