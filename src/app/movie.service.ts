import { Injectable } from "@angular/core";
import { Movie } from "../model/movie";
import { listMovie } from "./fakemovie";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { of } from "rxjs";

@Injectable()
export class MovieService {
  private _textFromSelectedSubject: BehaviorSubject<
    string
  > = new BehaviorSubject<string>("");
  textFromSelected$: Observable<
    string
  > = this._textFromSelectedSubject.asObservable();

  setTextFromSelected(text: string) {
    this._textFromSelectedSubject.next(text);
  }

  getMovie(): Observable<Movie[]> {
    return of(listMovie);
  }

  getMovieById(id): Observable<Movie> {
    return of(listMovie.find(movie => movie.id === id));
  }
  constructor() {}
}
