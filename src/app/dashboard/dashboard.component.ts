import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  data = [];
  displayColumns = [];
  prop;
  orderBy = "asc";
  constructor(private _service: CommonService) {
    this.displayColumns = [
      { prop: "name", displayName: "Name" },
      { prop: "username", displayName: "User Name" },
      { prop: "email", displayName: "Email" },
      { prop: "website", displayName: "Website" },
      { prop: "phone", displayName: "Phone Number" }
    ];
  }

  ngOnInit() {
    this.getData();
  }

  getData = () => {
    this._service.getData().subscribe(
      res => {
        this.data = res;
      },
      err => {
        console.log("Error");
      }
    );
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
