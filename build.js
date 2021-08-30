const { execSync } = require("child_process");
const extract = require("extract-zip");
const marked = require("marked");
const lodash = require("lodash");
const https = require("https");
const fs = require("fs-extra");

const prefix = 'export const token="";import{request as raw}from"https";' + request.toString();
const types = ["string", "number", "boolean"];
const top = [];

async function download() {
  log("Downloading docs", true);
  await new Promise(resolve => {
    https.get(
      "https://github.com/discord/discord-api-docs/archive/refs/heads/master.zip",
      ({ headers: { location } }) =>
        https.get(location, res => res.pipe(fs.createWriteStream("temp.zip")).on("close", resolve))
    );
  });

  log("Extracting docs", true);
  await extract(__dirname + "/temp.zip", { dir: __dirname + "/temp" });
  log("Deleting docs");
  await fs.unlink("temp.zip");
  log("Moving docs");
  await fs.move("temp/discord-api-docs-master/docs", "docs");
  log("Deleting temporary folder");
  await fs.rm("temp", { recursive: true });
}

async function parse() {
  const api = {};

  log("Parsing docs", true);
  const files = await fs.readdir("docs/resources");
  for await (const file of files) {
    log("Reading " + file);
    const data = await fs.readFile("docs/resources/" + file, "utf-8");
    log("Parsing " + file);
    const blocks = marked.lexer(data);

    blocks.forEach((block, blockIndex) => {
      if (!validate(block)) return;
      let extraComplete = false;
      const extra = blocks.slice(blockIndex + 1).filter(extraBlock => {
        if (extraComplete) return;
        if (validate(extraBlock)) {
          extraComplete = true;
          return;
        }

        return true;
      });

      let split = block.text.split(" % ");
      let [name] = split;
      name = lodash.camelCase(name);

      log("Getting params for " + name);
      let params = [];
      let [method, path] = split[1].split(" ");

      path = path.replace(/\{[^\{\}]+\}/g, block => {
        let [param] = block.slice(1, -1).split("#");
        param = lodash.camelCase(param);
        params.push(param);
        return ":" + param;
      });

      log("Getting query for " + name);
      let query;
      let queryIndex;

      extra.forEach(({ type, text }, i) => {
        if (queryIndex) return;
        if (type !== "heading") return;
        if (text !== "Query String Params") return;
        queryIndex = i;
      });

      if (queryIndex) {
        query = {};
        const table = extra[queryIndex + 1];
        table.rows.forEach(([field, type, description, required]) => {
          field.text = field.text.replace(/[^\w]+$/, "");
          query[lodash.camelCase(field.text)] = {
            type: type.text,
            name: field.text,
            description: description.text,
            required: boolean(required?.text)
          };
        });
      }

      log("Getting body for " + name);
      let body;
      let bodyIndex;

      extra.forEach(({ type, text }, i) => {
        if (bodyIndex) return;
        if (type !== "heading") return;
        if (text !== "JSON/Form Params" && text !== "JSON Params") return;
        bodyIndex = i;
      });

      if (bodyIndex) {
        body = {};
        const table = extra[bodyIndex + 1];
        table.rows.forEach(([field, type, description, required]) => {
          type.text = type.text.replace(/\[[^\]]+\]\([^\)]+\)/g, hyperlink => hyperlink.slice(1, -1).split("](")[0]);
          field.text = field.text
            .replace("(deprecated)", "")
            .replace(/^\?/, "")
            .replace(/[^\w]+$/, "")
            .trim();

          description.text = description.text
            .replace("(deprecated)", "")
            .replace(/[^\w]+$/, "")
            .replace(/\[[^\]]+\]\([^\)]+\)/g, hyperlink => hyperlink.slice(1, -1).split("](")[0])
            .trim();

          body[lodash.camelCase(field.text)] = {
            type: type.text,
            name: field.text,
            description: description.text,
            required: boolean(required?.text)
          };
        });
      }

      api[name] = { method, path, params, query, body };
    });
  }

  return api;
}

async function compile(api) {
  log("Compiling to TypeScript", true);
  const lib = Object.entries(api)
    .map(([key, { method, path, params, query, body }]) => {
      const requestArgs = ["'" + method + "'", "'" + path + "'"];
      const args = [];
      const fn = [];
      method = method.toLowerCase();

      log("Creating params for " + path);
      if (params.length)
        args.push(
          ...params.map(param => {
            requestArgs[1] += ".replace(':" + param + "', " + param + ")";
            return param + ":string";
          })
        );

      log("Creating body for " + path);
      if (body) {
        requestArgs.push("b");
        args.push("body:" + key + "Body");
        fn.push(...parseBody(key, body));
      } else requestArgs.push("null");

      log("Creating query for " + path);
      if (query) {
        requestArgs.push("q");
        args.push("query:" + key + "Query");
        fn.push(...parseQuery(key, query));
      } else requestArgs.push("null");

      fn.push("return request(" + requestArgs + ")");
      return "export function " + key + "(" + args + "){" + fn.join(";") + "}";
    })
    .sort(({ length: a }, { length: b }) => a - b)
    .join("\n");

  return prefix + top.sort(({ length: a }, { length: b }) => a - b).join("\n") + "\n" + lib;
}

function request(method, path, body, query) {
  if (!token) Promise.reject("No token provided");
  if (query) path += new URLSearchParams(query).toString();
  return new Promise((resolve, reject) => {
    const req = raw(
      {
        method,
        path: "/api/v9" + path,
        hostname: "discord.com",
        headers: { "content-type": "application/json", authorization: "Bot " + token }
      },
      res => {
        if (res.statusCode < 200 || res.statusCode >= 400) reject(res.statusCode + ": " + res.statusMessage);
        else {
          let text = "";
          res.on("data", chunk => (text += chunk));
          res.on("end", () => resolve(res.headers["content-type"] === "application/json" ? JSON.parse(text) : text));
        }
      }
    );

    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function validate(block) {
  if (block.type !== "heading") return;
  if (!block.text.includes(" % ")) return;
  return true;
}

function boolean(string) {
  if (!string) return;
  if (string === "false") return false;
  if (string === "true") return true;
  return string;
}

function parseQuery(name, query) {
  let transform = [];
  top.push(
    "interface " +
      name +
      "Query{" +
      Object.entries(query).map(([key, { required, type, name }]) => {
        transform.push(name + ":query." + key);
        return key + (required === true ? "" : "?") + ":" + (types.includes(type) ? type : "string");
      }) +
      "}"
  );

  return ["const q={" + transform + "}"];
}

function parseBody(name, body) {
  let transform = [];
  top.push(
    "interface " +
      name +
      "Body{" +
      Object.entries(body).map(([key, { required, type, name }]) => {
        transform.push(name + ":body." + key);
        return key + (required === true ? "" : "?") + ":" + (types.includes(type) ? type : "any");
      }) +
      "}"
  );

  return ["const b={" + transform + "}"];
}

let loggingLevel = "none";
function log(string, important) {
  if (loggingLevel === "none") return;
  if (important) console.log(string);
  else if (loggingLevel === "verbose") console.log(string);
}

(async () => {
  if (process.argv[2]) loggingLevel = process.argv[2];

  const exists = await fs.pathExists("docs");
  if (!exists) await download();
  const api = await parse();
  if (!process.argv.slice(2).some(a => a.toLowerCase() === "k" || a.toLowerCase() === "--keep"))
    await fs.rm("docs", { recursive: true });

  const data = await compile(api);
  await fs.writeFile("index.ts", data);

  log("Compiling to JavaScript", true);
  execSync("tsc index.ts -d --outdir dist");
  if (!process.argv.slice(2).some(a => a.toLowerCase() === "k" || a.toLowerCase() === "--keep"))
    await fs.unlink("index.ts");

  log("Completed", true);
})();