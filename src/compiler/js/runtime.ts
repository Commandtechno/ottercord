import { REST, RawFile } from "@discordjs/rest";

type JSON<T> =
  | T
  | { toJSON(): any }
  | (T extends object ? { [K in keyof T]: JSON<T[K]> } : never)
  | (T extends Array<any> ? Array<JSON<T[number]>> : never);

/* __CONSTANTS__ */
/* __STRUCTURES__ */

export class API extends REST {
  /* __ENDPOINTS__ */
}
