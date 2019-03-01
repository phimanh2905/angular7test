import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-selectedother",
  templateUrl: "./selectedother.component.html",
  styleUrls: ["./selectedother.component.scss"]
})
export class SelectedotherComponent implements OnInit {
  textFromSelected: string;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.textFromSelected$.subscribe(
      text => (this.textFromSelected = text)
    );
  }
}
