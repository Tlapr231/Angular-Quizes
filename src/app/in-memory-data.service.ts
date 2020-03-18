import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from './interface/user';
import { Quiz } from './interface/quiz';
import { Question } from './interface/question'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  //this db will only be temporairly used to test components (and then to store data after)
  createDb() {
    const quizes = [
      {
        numberOfQuestion: 10,
        category: 'Entertainment: Film',
        difficulty: 'mixed',
        questions: [
          { //1
            category: 'Entertainment: Film',
            difficulty: 'easy',
            question: 'Who directed the movies "Pulp Fiction", "Reservoir Dogs" and "Django Unchained"?',
            correctAnw: 'Quentin Tarantino',
            incorrect_answers: ['Martin Scorcese','Steven Spielberg','James Cameron']
          },
          { //2
            category: 'Entertainment: Film',
            difficulty: 'easy',
            question: 'The Queen song "A Kind Of Magic" is featured in which 1986 film?',
            correctAnw: 'Highlander',
            incorrect_answers: ['Flash Gordon','Labyrinth','Howard the Duck']
          },
          { //3
            category: 'Entertainment: Film',
            difficulty: 'easy',
            question: 'What was the title of the first Bond movie, released in 1962?',
            correctAnw: 'Dr. No',
            incorrect_answers: ['From Russia with Love','Goldfinger','Thunderball']
          },
          { //4
            category: 'Entertainment: Film',
            difficulty: 'medium',
            question: 'This movie contains the quote, "I love the smell of napalm in the morning!"',
            correctAnw: 'Apocalypse Now',
            incorrect_answers: ['Platoon','The Deer Hunter','Full Metal Jacket']
          },
          { //5
            category: 'Entertainment: Film',
            difficulty: 'hard',
            question: 'In the movie "Scream" who is Ghost Face?',
            correctAnw: 'Billy Loomis and Stu Macher',
            incorrect_answers: ['Dewey Riley','Sidney Prescott','Archie Prescott and Philip Marv']
          },
          { //6
            category: 'Entertainment: Film',
            difficulty: 'easy',
            question: 'The 2016 Disney animated film "Moana"; is based on which culture?',
            correctAnw: 'Polynesian',
            incorrect_answers: ['Native American','Japanese','Nordic']
          },
          { //7
            category: 'Entertainment: Film',
            difficulty: 'hard',
            question: 'In "Star Trek Nemesis", why was Praetor Shinzon created?',
            correctAnw: 'To replace Picard as a Romulan Agent',
            incorrect_answers: ['To destroy the Enterprise','To become Picard\'s friend ','To steal the Enterprise']
          },
          { //8
            category: 'Entertainment: Film',
            difficulty: 'medium',
            question: 'What is Lilo\'s last name from Lilo and Stitch?',
            correctAnw: 'Pelekai',
            incorrect_answers: ['Anoa\'i","Kealoha","Ku\'ulei']
          },
          { //9
            category: 'Entertainment: Film',
            difficulty: 'medium',
            question: 'Which actor and martial artist starred as Colonel Guile in the 1994 action film adaptation of Street Fighter?',
            correctAnw: 'Jean-Claude Van Damme',
            incorrect_answers: ['Chuck Norris','Steven Seagal','Scott Adkins']
          },
          { //10
            category: 'Entertainment: Film',
            difficulty: 'hard',
            question: 'In the film "Harry Potter and the Order of The Phoenix", why was Harry Potter\'s scream, after Sirius Black died, muted?',
            correctAnw: 'Too Agonizing',
            incorrect_answers: ['Too Loud','Too Harsh','Too Violent']
          },
        ]   
      }
    ]

    return {quizes};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11; 
  }

}