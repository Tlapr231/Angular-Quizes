import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Quiz } from "./interface/quiz";

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

  addQuiz(numQuest: number, cate: string, diff: string): Observable<Quiz[]> {
    let apiUrl = 'https://opentdb.com/api.php?amount=';
    
    this.log('number : ' + numQuest + ' | Category : ' + cate + ' | Difficulty : ' + diff);

    apiUrl = apiUrl + numQuest;
    if (cate !== 'Any Category') {
      apiUrl = apiUrl + '&category=' + categoryId["Art"];
    }  

    if (diff === 'Any Difficulty'){
      apiUrl = apiUrl + '&diffuculty=' + diff;
    }

    apiUrl = apiUrl + '&type=multiple';

    this.log('Fetched from the api with : ' + apiUrl)
    return this.http.get<Quiz[]>(apiUrl).pipe(
      tap(_ => this.log('Fetched from the api with : ' + apiUrl))
    );

  }


  //TODO (only going to use get quizes for testing for now)
  //Could implement more search Options later
  // getQuizByCategory(category: string): Observable<Quiz[]>{

  // }


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
