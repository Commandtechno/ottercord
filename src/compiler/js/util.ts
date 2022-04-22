import ts = require("typescript");

export function createPropertyName(prop: string) {
  return /^[^0-9][a-zA-Z0-9$_]+$/.test(prop)
    ? prop
    : /^[0-9]+$/.test(prop)
    ? ts.factory.createNumericLiteral(prop)
    : ts.factory.createStringLiteral(prop);
}