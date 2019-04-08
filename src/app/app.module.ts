import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MasterComponent } from "./master/master.component";
import { DetailComponent } from "./detail/detail.component";
import { FormsModule } from "@angular/forms";
import { MovieService } from "./movie.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SelectedComponent } from "./selected/selected.component";
import { SelectedotherComponent } from "./selectedother/selectedother.component";
import { LikeButtonComponent } from './like-button/like-button.component';
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    DashboardComponent,
    SelectedComponent,
    SelectedotherComponent,
    LikeButtonComponent
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
