import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component'

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'}
  // {path: 'home', component: HomeComponent},
  { path: 'quiz', component: QuizComponent },
  { path: 'question/:id', component: QuestionComponent },
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [ RouterModule ]
})
export class AppRoutingModule { }