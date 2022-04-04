import { request } from "https";

type toJSON<T> =
  | T
  | { toJSON(): any }
  | (T extends object ? { [K in keyof T]: toJSON<T[K]> } : never)
  | (T extends Array<any> ? Array<toJSON<T[number]>> : never);

export let token: string;

export function getAuth() {
  return `Bot ${token}`;
}

export function setToken(newToken: string) {
  token = newToken;
}

export function fetch({
  method,
  path,
  body,
  headers
}: {
  method: string;
  path: string;
  body?: string;
  headers?: { [key: string]: string };
}): Promise<any> {
  return new Promise((resolve, reject) => {
    const req = request(
      "https://discord.com/api/v9" + path,
      { method, headers },
      res => {
        let chunks: Buffer[] = [];
        res.on("data", chunk => chunks.push(chunk));
        res.on("end", () => {
          let text = Buffer.concat(chunks).toString();
          if (res.statusCode === 200) {
            if (res.headers["content-type"] === "application/json")
              resolve(JSON.parse(text));
            else resolve(text);
          } else reject(JSON.parse(text));
        });
      }
    );

    if (body) req.write(body);
    req.end();
  });
}
export const AchievementLocaleObject = {
    /** the default locale for the achievement*/ "Default": "default",
    /** object of locales as the key and achievement translations as the value*/ "Localizations": "localizations?"
} as const;
export const ApplicationCommandOptionType = {
    "SubCommand": 1,
    "SubCommandGroup": 2,
    "String": 3,
    "Integer": 4,
    "Boolean": 5,
    "User": 6,
    "Channel": 7,
    "Role": 8,
    "Mentionable": 9,
    "Number": 10,
    "Attachment": 11
} as const;
