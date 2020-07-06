import {Injectable} from '@angular/core';
import {fakeMovies} from './fake-movies';
import {Movie} from '../models/movie';

import {Observable} from 'rxjs';
import {of} from 'rxjs';

import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Observable<Movie[]> {
    this.messageService.add(`${new Date().toLocaleString()}. Get movie list`);
    return of(fakeMovies);
  }

  getMovieFromId(id: number): Observable<Movie> {
    return of(fakeMovies.find(movie => movie.id === id));
  }

  constructor(public messageService: MessageService) {
  }
}
