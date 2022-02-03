import { writeFileSync } from "fs";

import { Constant, Endpoint, Structure } from "../types";
import { pascal } from "../util";

export function js(constants: Constant[], endpoints: Endpoint[], structures: Structure[]) {
  let output = "";
  for (const constant of constants) {
    output += "export type " + pascal(constant.name) + " = {";
    for (const value of constant.values) {
      output += "\n " + JSON.stringify(value.name) + ": " + JSON.stringify(value.value) + ",";
    }
  }

  writeFileSync("output.ts", output);
}