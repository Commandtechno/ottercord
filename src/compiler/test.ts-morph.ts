import { Project, StructureKind } from "ts-morph";

const project = new Project({});

const myEnumFile = project.createSourceFile("test.ts-morph.output.ts", {
  statements: [
    {
      kind: StructureKind.Enum,
      name: "MyEnum",
      isExported: true,
      members: [{ name: 'BotHttpInteractions"balls', value: 1 << 19 }]
    }
  ]
});

myEnumFile.save();