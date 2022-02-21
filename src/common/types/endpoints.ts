import { Meta, ReferenceType, Structure } from ".";

export interface Endpoint extends Meta {
  method: string;
  path: string;
  params: Structure;
  query?: Structure;

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