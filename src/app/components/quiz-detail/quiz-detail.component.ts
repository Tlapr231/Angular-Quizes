import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { Quiz } from '../../interface/quiz';
import { Question } from '../../interface/question';
import { QuizService } from '../../quiz.service';
import { QuestionService } from '../../question.service'; 

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {

  quiz: Quiz;
  questions: Question[];
  questionNum: number;
  chosenAnswer: string;
  results: number[];

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private questionService: QuestionService,
    private location: Location
  ) { }

  ngOnInit() {
    this.questionNum = 0;
    this.questions = new Array();     
    this.results = [0, 0];

    this.getQuiz();
  }

  getQuiz() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id).subscribe(quiz => {
      this.quiz = quiz;
      this.getQuestions(quiz.questions); 
      console.log(this.quiz);
      console.log(this.questions);
    });
  }

  getQuestions(ids: number[]) {
    for (let id in ids) {
      this.questionService.getQuestion(+id).subscribe(question => {
        console.log(question);
        question = this.mixAnswers(question),
        this.questions.push(question);
      }); 
    }
  }

  mixAnswers(question: Question): Question {
    let answer = [ question.correct_answer, question.incorrect_answers[0], question.incorrect_answers[1], question.incorrect_answers[2] ];
    this.shuffle(answer); 
    question.answer = answer;
    return question;
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