export interface question {
  id: number;
  category: string;
  difficulty: string;
  question: string;
  anwsers: string[];
  correctAnw: string;
  incorrectAnw: string[];
}