import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Question } from '/interface/question';

@Injectable()
export class QuestionService {

  constructor( private http: HttpClient ) { }

  // private questionUrl = 'https://my-json-server.typicode.com/Tlapr231/Angular-Quizes-DB/questions'
  private questionUrl = "http://localhost:3001/api/questions";

  htppOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionUrl).pipe(
      tap(_ => this.log('Fetched All Questions')),
      catchError(this.handleError<Question[]>('getQuestion', []))
    )
  }

  getQuestion(id: number): Observable<Question> {
    const url = `${this.questionUrl}/${id}`;

    return this.http.get<Question>(url).pipe(
      tap(_ => this.log(`Fetched Question with id: ${id}`)),
      catchError(this.handleError<Account>(`getQuestion id: ${id}`))
    );
  }

  //Private Functions  
  private log(message: string){
    console.log(`Question Service: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?:T){
    return (error: any) : Observable<T> => {
      
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    
    }
  }

}