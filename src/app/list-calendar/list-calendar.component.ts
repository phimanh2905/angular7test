import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DetailCalendarComponent } from "./detail-calendar/detail-calendar.component";

@Component({
  selector: "app-list-calendar",
  templateUrl: "./list-calendar.component.html",
  styleUrls: ["./list-calendar.component.scss"]
})
export class ListCalendarComponent implements OnInit {
  now: Date = new Date();
  year: number = null;
  month: string = null;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.getMonthYearToString();
  }
  getMonthYearToString(): any {
    this.year = this.now.getFullYear();
    const monthNow = this.now.getMonth() + 1;
    if (monthNow < 10) {
      this.month = `0${monthNow}`;
    }
  }

  showDetail() {
    const modalRef = this.modalService.open(DetailCalendarComponent);

    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
