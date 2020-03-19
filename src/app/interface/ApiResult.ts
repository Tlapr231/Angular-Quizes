export interface ApiResult{
  response_code: number,
  results: {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answer: string,
  }[]
}