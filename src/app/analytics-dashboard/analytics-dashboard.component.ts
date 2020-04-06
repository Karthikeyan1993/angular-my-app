import { Component, OnInit } from "@angular/core";
import { Covid19Service } from "../covid19.service";
@Component({
  selector: "app-analytics-dashboard",
  templateUrl: "./analytics-dashboard.component.html",
  styleUrls: ["./analytics-dashboard.component.css"]
})
export class AnalyticsDashboardComponent implements OnInit {
  data = [];
  constructor(private _service: Covid19Service) { }

  ngOnInit() {
    // this.getData();
   }

  getData = () => {
    this._service.getAllData().subscribe(
      res => {
        this.data = res;
      },
      err => {
        console.log(err);
      }
    );
  };
}
