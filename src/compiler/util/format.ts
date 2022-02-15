// this is temporary

import * as lodash from "lodash";

export const snake = lodash.snakeCase;
export const camel = lodash.camelCase;
export const kebab = lodash.kebabCase;
export const pascal = (str: string) => lodash.upperFirst(camel(str));