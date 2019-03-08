import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListCalendarComponent } from "./list-calendar/list-calendar.component";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DetailCalendarComponent } from "./list-calendar/detail-calendar/detail-calendar.component";

@NgModule({
  declarations: [AppComponent, ListCalendarComponent, DetailCalendarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents: [DetailCalendarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
