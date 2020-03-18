import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component'

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'}
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  // {path: 'home', component: HomeComponent},
  { path: 'quiz', component: QuizComponent },
  { path: 'questions', component: QuestionComponent },
  // { path: 'question/:id', component: QuestionComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }