import { BaseType, Type } from ".";

export interface Endpoint {
  name: string;
  method: string;
  description?: string;

  path: string;
  params: EndpointParam[];
  query: EndpointQuery[];

  response?: Type[];
  body?: EndpointBody;
}

export interface EndpointParam {
  // type: string;
  name: string;
  link: string;
}

export interface EndpointQuery {
  type: string;
  name: string;
  description: string;
  required: boolean;
}

export interface EndpointBody {
  json: boolean;
  form: boolean;
  params: Type[];
}