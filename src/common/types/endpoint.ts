import { BaseEngine, StructureType, Type } from ".";

export interface Endpoint extends BaseEngine {
  method: string;
  path: string;
  params: EndpointParam[];
  query?: StructureType;

  request?: EndpointRequest;
  response?: Type;
}

export interface EndpointParam {
  name: string;
  link: string;
}

export type EndpointRequest = {
  json: boolean;
  form: boolean;
  type: Type | Type[];
};