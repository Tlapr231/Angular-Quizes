import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { QuizComponent } from './components/quiz/quiz.component';

import { QuizService } from './quiz.service';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserComponent, UserDetailComponent, QuizComponent ],
  bootstrap:    [ AppComponent ],
  providers: [QuizService, InMemoryDataService]
})
export class AppModule { }
