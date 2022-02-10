export interface Constant {
  name: string;
  description?: string;

  values: ConstantValue[];
}

export interface ConstantValue {
  name: string;
  description?: string;

  value: string | number;
}