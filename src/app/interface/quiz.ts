import { Question } from './question';

export interface quiz {
  id: number;
  category: string;
  difficulty: string;
  numberOfQuestions: number;
  questions: Question[];
}