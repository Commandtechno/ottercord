const { request: raw } = require("https");
const { AsyncQueue } = require("@sapphire/async-queue");
const FormData = require("form-data");

module.exports = function (hostname, prefix, authorization) {
  const store = {};
  const queue = new AsyncQueue();
  return async function (bucket, method, path, body, query, files) {
    path = prefix + path;
    const headers = { authorization };

    if (body) {
      headers["Content-Type"] = "application/json";
      if (typeof body !== "string") body = JSON.stringify(body);
    }

    let form;
    if (files) {
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
        await new Promise(resolve => setTimeout(resolve, ratelimit - Date.now()));
        delete store[bucket];
      }

      const req = raw(
        {
          path,
          method,
          headers,
          hostname
        },
        res => {
          queue.shift();
          if (res.headers["x-ratelimit-remaining"] === "0")
            store[bucket] = res.headers["x-ratelimit-reset"] * 1000;
          if (res.statusCode < 200 || res.statusCode >= 400) {
            const err = Error(
              method + " " + path + " returned " + res.statusCode + ": " + res.statusMessage
            );
            err.path = path;
            err.body = body;
            err.files = files;
            err.query = query;
            err.method = method;
            err.status = res.statusCode;
            err.statusMsg = res.statusMessage;

            let text = "";
            res.on("data", chunk => (text += chunk));
            res.on("end", () => {
              err.response =
                res.headers["content-type"] === "application/json" ? JSON.parse(text) : text;
              err.message = err.response.message ?? err.response;
              reject(err);
            });
          } else {
            let text = "";
            res.on("data", chunk => (text += chunk));
            res.on("end", () =>
              resolve(res.headers["content-type"] === "application/json" ? JSON.parse(text) : text)
            );
          }
        }
      );

      if (form) {
        form.pipe(req);
        form.on("end", () => req.end());
      } else if (body) {
        req.write(body);
        req.end();
      }
    });
  };
};