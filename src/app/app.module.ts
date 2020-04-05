import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CommonService } from "./common.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TableSortPipe } from "./table-sort.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, DashboardComponent, TableSortPipe],
  bootstrap: [AppComponent],
  providers: [CommonService]
})
export class AppModule {}
