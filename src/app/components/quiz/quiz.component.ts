import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

import { Quiz } from '../../interface/quiz';
import { QuizService } from '../../quiz.service';
import { User } from '../../interface/user';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  //========== Constructor and init ==========//
  constructor(
    private quizService: QuizService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getQuizes();
  }

  //========== Variables ==========//
  quizes: Quiz[];

  //========== Dropdown Data ==========//
  categories: any = [
   "Any Category",
   "Animals",
   "Art",
   "Celebrities",
   "Entertainment: Board Games",
   "Entertainment: Books",
   "Entertainment: Cartoon & Animations",
   "Entertainment: Comics",
   "Entertainment: Film",
   "Entertainment: Japanese Anime & Manga",
   "Entertainment: Music",
   "Entertainment: Musicals & Theatres",
   "Entertainment: Television",
   "Entertainment: Video Games",
   "General Knowledge",
   "Geography",
   "History",
   "Mythology",
   "Politics",
   "Science & Nature",
   "Science: Computers",
   "Science: Gadgets",
   "Science: Mathematics",
   "Sports",
   "Vehicles"
  ]

  difficulties : any = [
    "Any Difficulty",
    "Easy",
    "Medium",
    "Hard"
  ]

  //========== Form ==========//
  genQuizForm = this.fb.group({
    category: ['', [Validators.required] ],
    difficulty: ['', [Validators.required] ],
    numberOfQuestions: ['', [Validators.required] ]
  });

  onClickTake(){
    
  }

  onSubmit(){
    if (!this.genQuizForm.valid) {
      return false;
    } else {
      this.newQuiz(this.numberOfQuestions.value, this.category.value, this.difficulty.value);
    }

  }

  //========== Functions ==========//
  getQuizes(): void {
    this.quizService.getQuizes().subscribe(quizes => this.quizes = quizes);
  }

  newQuiz(numQuest: number, cate: string, diff: string) {
    this.quizService.requestQuiz(numQuest, cate, diff).subscribe(data => {
      if (data.response_code !== 0){
        console.log("Not a valid request.");
        return;
      }
      data.id = this.genId(this.quizes); 
      data.category = cate;
      data.difficulty = diff;
      data.numberOfQuestions = numQuest;
      data.questions = data.results;

      //assign questions their ids.
      for (let i: number = 0; i < data.questions.length; i++) {
        data.questions[i].id = i;
      }

      delete data.response_code;
      delete data.results;

      //quizService.addQuiz(data);
      this.quizes.push(data);
    })
  }

  genId(quizes: Quiz[]): number {
    return quizes.length > 0 ? Math.max(...quizes.map(quiz => quiz.id)) + 1 : 1000; 
  }

  //========== Getters ==========//
  get category() { return this.genQuizForm.get('category'); }
  get difficulty() { return this.genQuizForm.get('difficulty'); }
  get numberOfQuestions() { return this.genQuizForm.get('numberOfQuestions'); }
}