import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { Quiz } from '../../interface/quiz';
import { QuizService } from "../../quiz.service"; 

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {

  quiz: Quiz;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location
  ) { }

  ngOnInit() {
    //temp
    if (+this.route.snapshot.paramMap.get('id') === 1000) {
      this.quizService.getQuiz(+this.route.snapshot.paramMap.get('id')).subscribe(quiz => {
        this.quiz = quiz
        console.log(this.quiz);
      });
    } else {
      this.quiz = this.quizService.getSelectedQuiz();
    }
    console.log(this.quiz);
  }

}