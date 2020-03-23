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
  questionNum: number;
  chosenAnswer: string;
  results: number[];

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
        this.mixAnswers();
      });
    } else {
      this.quiz = this.quizService.getSelectedQuiz();
      this.mixAnswers();
    }
    this.questionNum = 0;
    this.results = [0, 0];
    console.log(this.quiz);
  }

  mixAnswers() {
    console.log("inside mixAnswer");
    console.log(this.quiz);
    for(var i = 0; i < this.quiz.questions.length; i++){
      let question = this.quiz.questions[i];
      let answer = [ question.correct_answer, question.incorrect_answers[0], question.incorrect_answers[1], question.incorrect_answers[2] ];
      this.shuffle(answer); 
      question.answer = answer;
      this.quiz.questions[i] = question;
    }
    console.log("Done with mixAnswer");
  }

  onClickAnswer(answer: string) {
    this.questionNum = this.questionNum + 0.5;
    this.chosenAnswer = answer;
  }

  onClickNextStep(num: number){
    this.questionNum = this.questionNum + 0.5;
    this.results[num] ++;
  }

  goBack(): void {
    this.location.back();
    console.log("closing");
  }
  
// questionNum % 1 !== 0 && chosenAnswer === question.correct_answer
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