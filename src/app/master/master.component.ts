import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
// import { listMovie } from "../fakemovie";
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  // movie: Movie = {
  //   id: 1,
  //   name: 'star war',
  //   releaseYear: 1999
  // };
  // movies = listMovie;
  movies: Movie[];
  // selectedMovie: Movie;
  // onSelected(movie): void {
  //   this.selectedMovie = movie;
  //   console.log(this.selectedMovie);
  // }

  constructor(private movieService: MovieService) {}

  getMovieFromServive(): void {
    // this.movies = this.movieService.getMovie();
    this.movieService
      .getMovie()
      .subscribe(updateMovie => (this.movies = updateMovie));
  }
  ngOnInit() {
    this.getMovieFromServive();
  }
}
