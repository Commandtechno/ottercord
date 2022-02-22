import { Meta, StructureType, Type } from ".";

export interface Endpoint extends Meta {
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

export interface EndpointRequest extends StructureType {
  json: boolean;
  form: boolean;
}