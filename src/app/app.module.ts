import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

import { QuizService } from './quiz.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }), 
  ],
  declarations: [ AppComponent, UserComponent, UserDetailComponent, QuizComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ QuizService, InMemoryDataService ]
})
export class AppModule { }
