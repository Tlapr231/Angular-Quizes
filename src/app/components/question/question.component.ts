import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Question } from '../../interface/question';
import { QuestionService } from '../../question.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  //shuflle(arr);

  questions: Question[];

  constructor( 
    private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
    this.mixAnw();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => this.questions = questions);
  }

  mixAnw() {
    for (var counter: number = 0; counter < this.questions.length ; counter ++) {
      var question = this.questions[counter];

      console.log(question);

    }
  }

  // getQuestion() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.questionService.getQuestion(id).subscribe(question => this.question = question);
  // }

}