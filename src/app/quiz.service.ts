import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Quiz } from "./interface/quiz";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  private quizUrl = "api/quizes";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getQuizes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizUrl).pipe(
      tap(_ => this.log("Fetched All Quizes")),
      catchError(this.handleError<Quiz[]>("getQuizes", []))
    );
  }

  //TODO (only going to use get quizes for testing for now)
  //Could implement more search Options later
  // getQuizByCategory(category: string): Observable<Quiz[]>{

  // }

  // addQuiz()

  // deleteQuiz()

  // updateQuiz()

  //Going to need for Quiz-Detail Soon
  // searchQuiz()

  //private functions
  private log(message: string) {
    console.log(`QuizService: ${message}`);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
