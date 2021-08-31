const { execSync } = require("child_process");
const extract = require("extract-zip");
const marked = require("marked");
const lodash = require("lodash");
const https = require("https");
const fs = require("fs-extra");

const top = [];
const types = ["string", "number", "boolean"];

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
  const endpoints = {};
  const api = { endpoints };

  log("Parsing docs", true);
  const reference = marked.lexer(await fs.readFile("docs/Reference.md", "utf-8"));

  reference.filter(({ type, text }, i) => {
    if (api.base && api.version) return;
    if (type !== "heading") return;
    if (text === "Base URL") {
      const code = reference.slice(i + 1).find(({ type }) => type === "code");
      api.base = code.text;
    } else if (text === "API Versioning") {
      const table = reference.slice(i + 1).find(({ type }) => type === "table");
      api.version = +table.rows[0][0].text;
    }
  });

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

      extra.forEach(({ type, text }, i) => {
        if (type !== "heading") return;
        if (text !== "Query String Params") return;

        query ??= {};
        const table = extra.slice(i + 1).find(({ type }) => type === "table");
        table.rows.forEach(([field, type, description, required]) => {
          field.text = field.text.replace(/[^\w]+$/, "");
          query[lodash.camelCase(field.text)] = {
            type: type.text,
            name: field.text,
            description: description.text,
            required: boolean(required?.text)
          };
        });
      });

      log("Getting body for " + name);
      let body;

      extra.forEach(({ type, text }, i) => {
        if (type !== "heading") return;
        if (text !== "JSON/Form Params" && !text.startsWith("JSON Params")) return;

        body ??= {};
        const table = extra.slice(i + 1).find(({ type }) => type === "table");
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
      });

      endpoints[name] = { method, path, params, query, body };
    });
  }

  return api;
}

async function compile(api) {
  log("Compiling to TypeScript", true);
  const prefix =
    [
      "const hostname = '" + new URL(api.base).hostname + "'",
      "const prefix = '/api/v" + api.version + "'",
      "const request = require('../request')",
      "import { Stream } from 'stream'",
      "interface File { name: string, value: string | Buffer | Stream }"
    ].join("\n") + "\n";

  const lib = sort(
    Object.entries(api.endpoints).map(([key, { method, path, params, query, body }]) => {
      const requestArgs = ["'" + method + "'", "'" + path + "'"];
      const args = [];

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
        args.push("body:" + key + "Body");
        requestArgs.push(...parseBody(key, body));
      } else requestArgs.push("null");

      log("Creating query for " + path);
      if (query) {
        args.push("query:" + key + "Query={}");
        requestArgs.push(...parseQuery(key, query));
      } else requestArgs.push("null");

      let res = key + "(" + args + "){return $(" + requestArgs + ")},";
      if (method !== "GET") {
        let last = args.pop();
        if (last) {
          if (last.startsWith("query:")) {
            args.push("files:File[]");
            args.push(last);
          } else {
            args.push(last);
            args.push("files:File[]");
          }

          requestArgs.push("files");
          res += "\n" + key + "Files(" + args + "){return $(" + requestArgs + ")},";
        }
      }

      return res;
    })
  ).join("\n");

  return (
    prefix +
    sort(top).join("\n") +
    "\nexport = function(token: string) {\nconst $ = request(hostname, prefix, token)\nreturn {\n" +
    lib +
    "\n}\n}"
  );
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

function sort(array) {
  return array.sort(({ length: a }, { length: b }) => a - b);
}

function parseQuery(name, query) {
  let transform = [];
  top.push(
    "interface " +
      name +
      "Query{" +
      sort(
        Object.entries(query).map(([key, { required, type, name }]) => {
          transform.push("['" + name + "',query." + key + "]");
          return key + (required === true ? "" : "?") + ":" + (types.includes(type) ? type : "string");
        })
      ) +
      "}"
  );

  return ["[" + sort(transform) + "]"];
}

function parseBody(name, body) {
  let transform = [];
  top.push(
    "interface " +
      name +
      "Body{" +
      sort(
        Object.entries(body).map(([key, { required, type, name }]) => {
          transform.push(name + ":body." + key);
          return key + (required === true ? "" : "?") + ":" + (types.includes(type) ? type : "any");
        })
      ) +
      "}"
  );

  return ["{" + sort(transform) + "}"];
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
  const parsed = await parse();
  if (!process.argv.slice(2).some(a => a.toLowerCase() === "-k" || a.toLowerCase() === "--keep"))
    await fs.rm("docs", { recursive: true });

  const compiled = await compile(parsed);
  await fs.writeFile("index.ts", compiled);

  log("Compiling to JavaScript", true);
  execSync("tsc index.ts -d --outdir dist");
  if (!process.argv.slice(2).some(a => a.toLowerCase() === "-k" || a.toLowerCase() === "--keep"))
    await fs.unlink("index.ts");

  log("Completed", true);
})();