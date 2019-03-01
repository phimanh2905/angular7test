import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "../movie.service";
@Component({
  selector: "app-selected",
  templateUrl: "./selected.component.html",
  styleUrls: ["./selected.component.scss"]
})
export class SelectedComponent implements OnInit {
  text = 'manh';
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // this.movieService.setTextFromSelected(this.text);
  }

  OnButtonClicked(){
    
    this.movieService.setTextFromSelected(this.text);
  }
}
