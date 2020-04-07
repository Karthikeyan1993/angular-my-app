import { Component, OnInit } from "@angular/core";
import { Covid19Service } from "../covid19.service";
@Component({
  selector: "app-analytics-dashboard",
  templateUrl: "./analytics-dashboard.component.html",
  styleUrls: ["./analytics-dashboard.component.css"]
})
export class AnalyticsDashboardComponent implements OnInit {
  data = [];
  displayColumns = [];
  prop;
  orderBy = "asc";
  constructor(private _service: Covid19Service) {
    this.displayColumns = [
      { prop: 'country_name', displayName: 'Country Name' },
      { prop: 'cases', displayName: 'Cases' },
      { prop: 'active_cases', displayName: 'Active Cases' },
      { prop: 'deaths', displayName: 'Deaths' },
      { prop: 'new_cases', displayName: 'New Cases' },
      { prop: 'new_deaths', displayName: 'New Deaths' },
      { prop: 'serious_critical', displayName: 'Serious Critical' },
      { prop: 'total_recovered', displayName: 'Totoal Recovered' }
    ]
  }

  ngOnInit() {
    this.getData();
  }

  getData = () => {
    this._service.getAllData().subscribe((res)=>{
      this.data = res.countries_stat;
    });
  };

  doOrder = (prop: string) => {
    this.prop = prop;
    this.orderBy = this.orderBy == "asc" ? "desc" : "asc";
  };

  getClass = (prop) => {
    return {
      "fa-sort": prop != this.prop,
      "fa-caret-up": prop == this.prop && this.orderBy == "asc",
      "fa-caret-down": prop == this.prop && this.orderBy == "desc"
    };
  };
}
