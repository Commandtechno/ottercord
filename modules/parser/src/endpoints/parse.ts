import { Endpoint, EndpointParam } from ".";
import { formatText } from "../util";

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
  const [rawName, rawMethodPath] = rawText.split("%");
  if (!rawName || !rawMethodPath) return;

  const [rawMethod, rawPath] = rawMethodPath.trim().split(" ");
  if (!rawMethod || !rawPath) return;

  const name = formatText(rawName);
  const method = formatText(rawMethod);

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