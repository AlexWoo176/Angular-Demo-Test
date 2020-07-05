import {Injectable} from '@angular/core';
import {fakeMovies} from './fake-movies';
import {Movie} from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Movie[] {
    return fakeMovies;
  }

  constructor() {
  }
}
