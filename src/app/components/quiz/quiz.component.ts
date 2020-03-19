import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Quiz } from '../../interface/quiz';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizes: Quiz[];

  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.getQuizes();
  }

  getQuizes(): void {
    this.quizService.getQuizes().subscribe(quizes => this.quizes = quizes);
  }

  generateQuiz (numQuest: number, cate: string, diff: string){
    console.log('number : ' + numQuest + ' | Category : ' + cate + ' | Difficulty : ' + diff);

    this.quizService.addQuiz(numQuest, cate, diff);
    console.log('quiz.component.ts is generating quiz');
  }

}