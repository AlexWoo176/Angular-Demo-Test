import {Injectable} from '@angular/core';
import {Movie} from '../models/movie';

import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesURL = 'http://localhost:3000/movies';

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesURL).pipe(
      tap(receivedMovies => console.log(`receivedMovies = ${JSON.stringify(receivedMovies)}`)),
      catchError(error => of([]))
    );
  }

  getMovieFromId(id: number): Observable<Movie> {
    const url = `${this.moviesURL}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(selectedMovie => console.log(`selected movie = ${JSON.stringify(selectedMovie)}`)),
      catchError(error => of(new Movie()))
    );
  }
  /** PUT: update the movie on the server */
  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(`${this.moviesURL}/${movie.id}`, movie, httpOptions).pipe (
      tap(updatedMovie => console.log(`updated movie = ${JSON.stringify(updatedMovie)}`)),
      catchError(error => of(new Movie()))
    );

  }
  /** POST: add a new movie to the server */
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesURL, newMovie, httpOptions).pipe(
      tap((movie: Movie) => console.log(`inserted movie = ${JSON.stringify(movie)}`)),
      catchError(error => of(new Movie()))
    );
  }

  constructor(
    private http: HttpClient,
    public messageService: MessageService) {
  }
}
