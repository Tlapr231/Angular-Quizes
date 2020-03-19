import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Quiz } from '../../interface/quiz';
import { QuizService } from '../../quiz.service';
import { User } from '../../interface/user';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  quizes: Quiz[];

  //Dropdown Data
  category: any = [
    "Any Category",
    "Animals",
    "Art",
    "Entertainment: Books", 
    "General Knowledge", 
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Celebrities",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoon & Animations",
  ]

  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.getQuizes();
  }

  getQuizes(): void {
    this.quizService.getQuizes().subscribe(quizes => this.quizes = quizes);
  }

  newQuiz(numQuest: number, cate: string, diff: string) {
    this.quizService.addQuiz(numQuest, cate, diff).subscribe(data => {
      data.id = "1001"; //TODO genID();
      data.category = cate;
      data.difficulty = diff;
      data.numberOfQuestions = numQuest;
      data.questions = data.results;
      delete data.response_code;
      delete data.results;
      console.log(data);
      this.quizes.push(data);
    })
  }
}