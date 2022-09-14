import { REST } from "@discordjs/rest";

type ClassParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
type JSON<T> =
  | T
  | { toJSON(): any }
  | (T extends object ? { [K in keyof T]: JSON<T[K]> } : never)
  | (T extends Array<any> ? Array<JSON<T[number]>> : never);

/* __CONSTANTS__ */
/* __STRUCTURES__ */

export namespace API {
  export class Client {
    rest: REST;

    constructor(token?: string, ...options: ClassParameters<typeof REST>) {
      this.rest = new REST(...options);
      if (token) this.rest.setToken(token);
    }

    /* __ENDPOINTS__ */
  }
}
