var typeCache = new Map();
var prefix = "";
var index = 0;

function resolveRawType(raw) {
  switch (typeof raw) {
    case "string":
      return "string";

    case "number":
      return "number";

    case "boolean":
      return "boolean";

    case "object":
      if (raw === null) {
        return "null";
      }

      if (Array.isArray(raw)) {
        const items = [];
        for (const item of raw) items.push(resolveRawType(item));

        return "[" + items.join(",") + "]";
      }

      if (typeCache.has(raw)) {
        return typeCache.get(raw);
      }

      const id = "$" + index++;
      typeCache.set(raw, id);

      const obj = Object.entries(raw)
        .map(([key, value]) => JSON.stringify(key) + ":" + resolveRawType(value))
        .join(",");

      prefix += "type " + id + " = {" + obj + "};";
      return id;

    default:
      return "unknown";
  }
}

function resolveType(raw) {
  typeCache = new Map();
  prefix = "";
  index = 0;

  const type = resolveRawType(raw);
  return prefix + "export type T = " + type + ";";
}