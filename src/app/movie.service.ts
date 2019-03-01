import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { listMovie } from './fakemovie';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class MovieService {
  getMovie(): Observable<Movie[]> {
    return of(listMovie);
  }

  getMovieById(id): Observable<Movie> {
    return of(listMovie.find(movie => movie.id === id));
  }
  constructor() {}
}
