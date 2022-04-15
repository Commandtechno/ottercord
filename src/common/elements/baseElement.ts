export interface Meta {
  name: string;
  description?: string;
}

export interface BaseElement extends Meta {
  tree: string[];
}