import { ReferenceType, Structure } from ".";

export interface Endpoint {
  name: string;
  description?: string;

  method: string;

  path: string;
  params: EndpointParam[];
  query?: Param[];

  request?: EndpointRequest;
  response?: EndpointResponse;
}

export interface EndpointParam {
  name: string;
}

export interface EndpointRequest extends Structure {
  json: boolean;
  form: boolean;
}

export type EndpointResponse = ReferenceType | Structure;