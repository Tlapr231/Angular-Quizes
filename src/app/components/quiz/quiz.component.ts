import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Quiz } from '../../interface/quiz';
import { QuizService } from '../../quiz.service';
import { User } from '../../interface/user';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
//rm after
  users$: User[];
  
  quizes: Quiz[];

  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.getQuizes();
    return  this.quizService.getUsers().subscribe(data => this.users$ = data);
  }

  getQuizes(): void {
    this.quizService.getQuizes().subscribe(quizes => this.quizes = quizes);
  }

  

}