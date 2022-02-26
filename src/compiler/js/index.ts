import { Project, SourceFile, StructureKind } from "ts-morph";
import { resolve } from "path";

import { Constant } from "../../common";
import { JS_OUTPUT_DIR } from "../constants";
import { Input } from "../types";
import { pascal } from "../util";

export default class {
  file: SourceFile;
  nameCache = new Set<string>();

  constructor({ constants, endpoints, examples, structures }: Input) {
    const path = resolve(JS_OUTPUT_DIR, "index.ts");
    const project = new Project();

    this.file = project.createSourceFile(path);
    for (const constant of constants) this.addConstant(constant);
  }

  getName(name: string) {
    if (this.nameCache.has(name)) {
      name = "_" + name;
      return this.getName(name);
    }

    this.nameCache.add(name);
    return name;
  }

  addConstant(constant: Constant) {
    this.file.addEnum({
      kind: StructureKind.Enum,
      name: this.getName(pascal(constant.name)),
      isExported: true,
      docs: constant.description && [
        {
          kind: StructureKind.JSDoc,
          tags: [
            { kind: StructureKind.JSDocTag, tagName: "description", text: constant.description }
          ]
        }
      ],
      members: constant.properties.map(({ key, value, description }) => ({
        name: /^\d+$/.test(key) ? "$" + key : pascal(key),
        value,
        docs: description && [
          {
            kind: StructureKind.JSDoc,
            tags: [{ kind: StructureKind.JSDocTag, tagName: "description", text: description }]
          }
        ]
      }))
    });
  }
}