import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

import { QuizService } from './quiz.service';
import { QuestionComponent } from './components/question/question.component';
import { QuestionService } from './question.service';
import { QuizDetailComponent } from './components/quiz-detail/quiz-detail.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionAnwserComponent } from './components/question-anwser/question-anwser.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  declarations: [ 
    AppComponent,
    UserComponent, 
    UserDetailComponent, 
    QuizComponent, 
    QuestionComponent, 
    QuizDetailComponent, 
    QuestionDetailComponent, 
    QuestionAnwserComponent, HomeComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ QuizService, QuestionService ]
})
export class AppModule { }
