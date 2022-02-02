import { Endpoint, EndpointParam } from ".";

export function parseParam(rawParam: string): EndpointParam {
  const [name, link] = rawParam.slice(1, -1).split("#");
  return { name, link };
}

export function parsePath(rawPath: string) {
  const params: EndpointParam[] = [];
  const path = rawPath.replace(/\{.+?\}/g, rawParam => {
    const param = parseParam(rawParam);
    params.push(param);
    return `{${param.name}}`;
  });

  return { path, params };
}

export function parseEndpoint(rawText: string) {
  const [rawName, rawMethodAndPath] = rawText.split("%");
  if (!rawMethodAndPath) return;

  const [rawMethod, rawPath] = rawMethodAndPath.trim().split(" ");
  if (!rawPath) return;

  const name = rawName.trim();
  const method = rawMethod.trim();

  const { path, params } = parsePath(rawPath.trim());
  const query = [];
  const endpoint: Endpoint = {
    name,
    method,

    path,
    params,
    query
  };

  return endpoint;
}