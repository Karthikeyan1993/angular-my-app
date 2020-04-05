import { Component } from "@angular/core";
import { CommonService } from "./common.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  constructor(private _service: CommonService) { }

  ngOnInit() {
  }
}
