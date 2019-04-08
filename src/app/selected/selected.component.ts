import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-selected",
  templateUrl: "./selected.component.html",
  styleUrls: ["./selected.component.scss"]
})
export class SelectedComponent implements OnInit {
  constructor() {}

  condition: boolean;

  ngOnInit() {}

  btnName = "like";

  bindingValid() {
    if (this.btnName === "unlike") {
      this.btnName = "like";
      this.condition = true;
    } else {
      this.btnName = "unlike";
      this.condition = null;
    }
  }
}
