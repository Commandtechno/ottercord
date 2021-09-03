const { request: raw } = require("https");
const { AsyncQueue } = require("@sapphire/async-queue");
const FormData = require("form-data");

module.exports = function (hostname, prefix, authorization) {
  const store = {};
  const queue = new AsyncQueue();
  return async function (bucket, method, path, body, query, files) {
    const headers = { authorization };

    if (body) {
      headers["Content-Type"] = "application/json";
      if (typeof body !== "string") body = JSON.stringify(body);
    }

    let form;
    if (files?.length) {
      headers["Content-Type"] = "multipart/form-data";
      form = new FormData();

      if (body) form.append("payload_json", body);
      if (typeof files.forEach !== "function") files = [files];

      files.forEach(file => form.append(file.name, file.value, file.name));
      Object.assign(headers, form.getHeaders());
    }

    if (query) {
      query = query.filter(([{}, val]) => val);
      if (query.length) path += "?" + new URLSearchParams(query).toString();
    }

    return new Promise(async (resolve, reject) => {
      await queue.wait();
      const ratelimit = store[bucket];
      if (ratelimit) {
        await new Promise(resolve => setTimeout(resolve, -(Date.now() - ratelimit * 1000)));
        store[bucket] = 0;
      }

      const req = raw(
        {
          method,
          headers,
          hostname,
          path: prefix + path
        },
        res => {
          queue.shift();
          if (res.headers["x-ratelimit-remaining"] === "0") store[bucket] = res.headers["x-ratelimit-reset"];
          if (res.statusCode < 200 || res.statusCode >= 400)
            reject(Error(method + " " + path + " returned " + res.statusCode + ": " + res.statusMessage));
          else {
            let text = "";
            res.on("data", chunk => (text += chunk));
            res.on("end", () => resolve(res.headers["content-type"] === "application/json" ? JSON.parse(text) : text));
          }
        }
      );

      if (form) form.pipe(req);
      else if (body) req.write(body);

      req.end();
    });
  };
};