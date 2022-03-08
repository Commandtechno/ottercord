import { Property, Type } from "../../common";

// temp
export function generateType(value: any): Type {
  switch (typeof value) {
    case "string":
      return {
        array: false,
        partial: false,

        type: "value",
        value: "string"
      };

    case "number":
      return {
        array: false,
        partial: false,

        type: "value",
        value: "integer"
      };

    case "boolean":
      return {
        array: false,
        partial: false,

        type: "value",
        value: "boolean"
      };

    case "object":
      if (value === null)
        return {
          array: false,
          partial: false,

          type: "value",
          value: "null"
        };

      const props: Property[] = [];
      for (const key in value)
        props.push({
          optional: false,
          nullable: false,
          deprecated: false,

          name: key,
          type: generateType(value[key])
        });

      return {
        array: false,
        partial: false,

        type: "structure",
        props
      };
  }
}