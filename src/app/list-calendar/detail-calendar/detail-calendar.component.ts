import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-detail-calendar",
  templateUrl: "./detail-calendar.component.html",
  styleUrls: ["./detail-calendar.component.scss"]
})
export class DetailCalendarComponent implements OnInit {
  editMode: string = "";
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.setTitle();
  }

  setTitle(): any {
    this.editMode = "Thêm";
  }

  /**
   * đóng form detail
   * Created by: manhph:08.03.19
   */
  cancel() {
    this.activeModal.close("Modal Closed");
  }

  submit() {
    console.log(`submit`);
  }
}
