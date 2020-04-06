import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CommonService } from "./common.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TableSortPipe } from "./table-sort.pipe";
import { AuthenticationInterceptorService } from './authentication-interceptor.service';
import { Covid19Service } from './covid19.service';
import { AnalyticsDashboardComponent } from './analytics-dashboard/analytics-dashboard.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, DashboardComponent, TableSortPipe, AnalyticsDashboardComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true, providers: [Covid19Service] }]

})
export class AppModule { }
