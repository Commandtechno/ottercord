import { BaseMeta, BaseEngine, Type } from ".";

export interface Structure extends BaseEngine {
  props: Property[];
}

export interface Property extends BaseMeta {
  optional: boolean;
  nullable: boolean;
  deprecated: boolean;

  type: Type | Type[];
}