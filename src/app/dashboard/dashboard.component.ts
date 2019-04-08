import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { Movie } from "../../model/movie";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    this.movieService
      .getMovie()
      .subscribe(listMovie => (this.movies = listMovie));
  }
}
