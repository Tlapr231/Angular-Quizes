export interface user {
  id: number;
  firstName: string; 
  lastName: string;
  email: string;
  password: string;
  completedQuizes: [];
  correct_answers: number;
  incorrect_answers: number;
}