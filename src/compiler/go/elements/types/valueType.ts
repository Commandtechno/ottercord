import { ValueType } from "../../../../common";
import { Context } from "../../../context";

export function renderValueType(ctx: Context, valueType: ValueType) {
  switch (valueType.value) {
    case "null":
      return "interface{}";

    case "string":
      return "string";

    case "float":
      return "float64";

    case "integer":
      return "int64";

    case "bigint":
      return "int64";

    case "boolean":
      return "bool";

    case "object":
      return "interface{}";

    case "date":
      return "time.Time";

    case "binary":
      return "bytes.Buffer";

    case "file":
      return "string";

    case "snowflake":
      return "string";

    case "any":
      return "interface{}";

    default:
      throw new Error("Unknown type: " + valueType.value);
  }
}