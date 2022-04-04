import { BaseEngine, StructureType, Type } from ".";

export interface Endpoint extends BaseEngine {
  extends?: string;

  method: string;
  path: EndpointParam[];

  query?: StructureType;
  request?: EndpointRequest;
  response?: Type;
}

export interface EndpointParamLiteral {
  type: "literal";
  value: string;
}

export interface EndpointParamVariable {
  type: "variable";
  name: string;
  link: string;
}

export type EndpointParam = EndpointParamLiteral | EndpointParamVariable;

export interface EndpointRequest {
  json: boolean;
  form: boolean;
  type: Type | Type[];
}