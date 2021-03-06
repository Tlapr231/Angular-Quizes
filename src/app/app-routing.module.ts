import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizDetailComponent } from './components/quiz-detail/quiz-detail.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionAnwserComponent } from './components/question-anwser/question-anwser.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/:id', component: QuizDetailComponent},
  { path: 'questions', component: QuestionComponent },
  { path: 'questiona/:id', component: QuestionAnwserComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }