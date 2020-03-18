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
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions
      this.mixAnw()});
  }

  mixAnw() {
    console.log("Swapping")
    console.log(this.questions);
    for (let question of this.questions) {
      console.log(question);
      let anwser = [question.correctAnw, question.incorrectAnw[0], question.incorrectAnw[1], question.incorrectAnw[2] ]

      this.shuffle(anwser); 

      question.anwser = anwser;

      console.log(question);
    }
  }

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

  // getQuestion() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.questionService.getQuestion(id).subscribe(question => this.question = question);
  // }

}