import { BaseEngine } from ".";

export interface Example extends BaseEngine {
  language: string;
  content: string;
}