import { Type, Param } from ".";

export interface Endpoint {
  name: string;
  description?: string;

  method: string;
  path: string;

  params: EndpointParam[];
  query: EndpointQuery[];

  request?: EndpointRequest;
  response?: Type | Param[];
}

export interface EndpointParam {
  // type: string;
  name: string;
  anchor: string;
}

export interface EndpointQuery {
  type: string;
  name: string;
  description: string;
  required: boolean;
}

export interface EndpointRequest {
  json: boolean;
  form: boolean;
  params: Param[];
}