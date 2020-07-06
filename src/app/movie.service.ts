import {Injectable} from '@angular/core';
import {fakeMovies} from './fake-movies';
import {Movie} from '../models/movie';

import {Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Observable<Movie[]> {
    return of(fakeMovies);
  }

  constructor() {
  }
}
