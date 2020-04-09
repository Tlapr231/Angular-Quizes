import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

import { Quiz } from '../../interface/quiz';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(    
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

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

  onSubmit(){
    if (!this.genQuizForm.valid) {
      return false;
    } else {
      this.newQuiz(this.numberOfQuestions.value, this.category.value, this.difficulty.value);
    }

  }

  newQuiz(numQuest: number, cate: string, diff: string) {

  }

  genId(quizes: Quiz[]): number {
    return quizes.length > 0 ? Math.max(...quizes.map(quiz => quiz.id)) + 1 : 1000; 
  }

  //========== Getters ==========//
  get category() { return this.genQuizForm.get('category'); }
  get difficulty() { return this.genQuizForm.get('difficulty'); }
  get numberOfQuestions() { return this.genQuizForm.get('numberOfQuestions'); }

}