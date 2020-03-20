import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { Question } from '../../interface/question';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-question-anwser',
  templateUrl: './question-anwser.component.html',
  styleUrls: ['./question-anwser.component.css']
})
export class QuestionAnwserComponent implements OnInit {

  @Input() question: Question;

  constructor(    
    private route: ActivatedRoute,
    private questionSercice: QuestionService,
    private location: Location){ }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionSercice.getQuestion(id).subscribe(question => {
      this.question = question;
      this.mixAnwsers();
    });
  }

  mixAnwsers() {
    let anwser = [ this.question.correct_answers, this.question.incorrect_answers[0], this.question.incorrect_answers[1], this.question.incorrect_answers[2] ];
    this.shuffle(anwser); 
    this.question.anwser = anwser;
  }

  //======= Private Function ======//

  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  private shuffle(array: any[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


}