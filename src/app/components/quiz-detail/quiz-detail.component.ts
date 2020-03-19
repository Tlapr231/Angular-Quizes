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
  private _quiz = '';


  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private location: Location
  ) { }

  ngOnInit() {
    console.log(this._quiz);
  }

  @Input()
   set quiz(quiz: Quiz) {
    this._quiz = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._quiz; }

}