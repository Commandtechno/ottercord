const FormData = require("form-data");

const { request: raw } = require("https");

function RatelimitProvider() {
  const routes = {};

  function getLastRequestTime(route) {
    return routes[route]?.lastRequestTime;
  }

  function setLastRequestTime(route, time) {
    routes[route] ??= {};
    routes[route].lastRequestTime = time;
  }

  function getRequestAllowance(route) {
    if (!routes[route]?.reset) return 0;
    return routes[route].reset - Date.now();
  }

  function setRequestAllowance(route, remaining, reset) {
    if (remaining && reset && remaining >= 0) routes[route].reset = reset;
  }

  return {
    getLastRequestTime,
    setLastRequestTime,
    getRequestAllowance,
    setRequestAllowance
  };
}

function RateLimiter() {
  const provider = new RatelimitProvider();
  async function invoke(route) {
    const time = getDelay(route);
    if (time) await delay(getDelay(route));
    provider.setLastRequestTime(route, Date.now());
  }

  function getDelay(route) {
    return Math.max(0, provider.getRequestAllowance(route) - (Date.now() - provider.getLastRequestTime(route)));
  }

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  function setAllowance(route, remaining, reset) {
    provider.setRequestAllowance(route, remaining, reset);
  }

  return { invoke, getDelay, delay, setAllowance };
}

const RateLimiterInstance = new RateLimiter();

module.exports = function (hostname, prefix, token) {
  return async function (method, path, body, query, files) {
    const headers = { Authorization: "Bot " + token };

    if (body) {
      headers["Content-Type"] = "application/json";
      if (typeof body !== "string") body = JSON.stringify(body);
    }

    let form;
    if (files) {
      headers["Content-Type"] = "multipart/form-data";
      form = new FormData();
      files.forEach(file => form.append(file.name, file.value, file.name));
      if (body) form.append("payload_json", body);
      Object.assign(headers, form.getHeaders());
    }

    if (query) {
      query = query.filter(([{}, val]) => val);
      if (query.length) path += "?" + new URLSearchParams(query).toString();
    }

    await RateLimiterInstance.invoke(path);
    return new Promise((resolve, reject) => {
      const req = raw(
        {
          method,
          headers,
          hostname,
          path: prefix + path
        },
        res => {
          RateLimiterInstance.setAllowance(
            path,
            res.headers["x-ratelimit-remaining"],
            res.headers["x-ratelimit-reset"]
          );
          if (res.statusCode < 200 || res.statusCode >= 400) reject(Error(res.statusCode + ": " + res.statusMessage));
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