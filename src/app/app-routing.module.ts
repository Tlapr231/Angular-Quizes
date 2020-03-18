import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionAnwserComponent } from './components/question-anwser/question-anwser.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'}
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  // {path: 'home', component: HomeComponent},
  { path: 'quiz', component: QuizComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'questiona/:id', component: QuestionAnwserComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }