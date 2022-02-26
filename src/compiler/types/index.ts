import { Constant, Endpoint, Example, Structure } from "../../common";

export interface Input {
  constants: Constant[];
  endpoints: Endpoint[];
  examples: Example[];
  structures: Structure[];
}