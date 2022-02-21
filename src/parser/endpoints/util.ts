// import { Endpoint, EndpointParam } from "../../common";
// import { parseAnchor } from "../util";

// export function parseParam(rawParam: string): EndpointParam {
//   const [name, link] = rawParam.slice(1, -1).split("#");
//   const anchor = parseAnchor(link);
//   return { name, anchor };
// }

// export function parsePath(rawPath: string) {
//   const params: EndpointParam[] = [];
//   const path = rawPath.replace(/\{.+?\}/g, rawParam => {
//     const param = parseParam(rawParam);
//     params.push(param);
//     return `{${param.name}}`;
//   });

//   return { path, params };
// }

// export function parseEndpoint(rawText: string) {
//   const [rawName, rawMethodPath] = rawText.split("%");
//   if (!rawName || !rawMethodPath) return;

//   const [rawMethod, rawPath] = rawMethodPath.trim().split(" ");
//   if (!rawMethod || !rawPath) return;

//   const name = rawName.trim();
//   const method = rawMethod.trim();

//   const { path, params } = parsePath(rawPath.trim());
//   const endpoint: Endpoint = {
//     name,
//     method,

//     path,
//     params
//   };

//   return endpoint;
// }