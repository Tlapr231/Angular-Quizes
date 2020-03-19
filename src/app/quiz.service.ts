import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Quiz } from "./interface/quiz";
import { ApiResult } from './interface/ApiResult';

//rm after 
import { User } from './interface/user';

  var categoryId = {
    "General Knowledge": 9, 
    "Entertainment: Books": 10, 
    "Entertainment: Film": 11,
    "Entertainment: Music": 12,
    "Entertainment: Musicals & Theatres": 13,
    "Entertainment: Television": 14,
    "Entertainment: Video Games": 15,
    "Entertainment: Board Games": 16,
    "Science & Nature": 17,
    "Science: Computers": 18,
    "Science: Mathematics": 19,
    "Mythology": 20,
    "Sports": 21,
    "Geography": 22,
    "History": 23,
    "Politics": 24,
    "Art": 25,
    "Celebrities": 26,
    "Animals": 27,
    "Vehicles": 28,
    "Entertainment: Comics": 29,
    "Science: Gadgets": 30,
    "Entertainment: Japanese Anime & Manga": 31,
    "Entertainment: Cartoon & Animations": 32
  }

@Injectable({
  providedIn: "root"
})
export class QuizService {
  private quizUrl = "https://my-json-server.typicode.com/Tlapr231/Angular-Quizes-DB/quizes";


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

  getQuiz(id: number){
    console.log('TODO')//TODO
  }


  // deleteQuiz()

  // updateQuiz()

  //searchQuiz()
  
  requestQuiz(numQuest: number, cate: string, diff: string): Observable<any> {
    let apiUrl = 'https://opentdb.com/api.php?amount=';
    
    apiUrl = apiUrl + numQuest;
    if (cate !== 'Any Category') {
      apiUrl = apiUrl + '&category=' + categoryId[cate];
    }  
    if (diff !== 'Any Difficulty'){
      apiUrl = apiUrl + '&diffuculty=' + diff.toLocaleLowerCase();
    }
    apiUrl = apiUrl + '&type=multiple';

    return this.http.get<any>(apiUrl).pipe(
      tap(_ => this.log('Fetched from the Open Trivia DB with : ' + apiUrl)),
      catchError(this.handleError<any>('addQuiz', []))
    );

  }

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
