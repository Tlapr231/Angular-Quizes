import { Question } from './question'

export interface quiz {
  numberOfQuestions: number;
  category: string;
  difficulty: string;
  questions: Question[];
}