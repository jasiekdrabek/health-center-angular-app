export interface Medicine {
  _id: string;
  name: string;
  activeSubstance: string;
  dose: number;
  quantity?: number;
}
