import { Type, Param } from ".";

export interface Endpoint {
  name: string;
  description?: string;

  method: string;
  path: string;

  params: EndpointParam[];
  query?: Param[];
  request?: EndpointRequest;
  response?: Type | Param[];
}

export interface EndpointParam {
  // type: string;
  name: string;
  anchor: string;
}

export interface EndpointRequest {
  json: boolean;
  form: boolean;
  params: Param[];
}