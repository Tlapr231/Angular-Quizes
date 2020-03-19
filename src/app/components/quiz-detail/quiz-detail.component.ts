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

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  @Input() quiz: Quiz;

  getQuiz() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id).subscribe(quiz => this.quiz = quiz);
  }

}