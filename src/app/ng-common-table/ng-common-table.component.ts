import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { TableSortPipe } from "../table-sort.pipe";
@Component({
  selector: "app-ng-common-table",
  templateUrl: "./ng-common-table.component.html",
  styleUrls: ["./ng-common-table.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgCommonTableComponent implements OnInit {
  private dataSource = [];
  @Input("columnDef") columnDef;
  @Input("height") height;
  prop;
  orderBy = "asc";
  constructor(private _pipe: TableSortPipe) { }

  ngOnInit() { }

  @Input()
  set data(data: any) {
    this.dataSource = [...data];
  }

  doOrder = (prop: string) => {
    this.prop = prop;
    this.orderBy = this.orderBy == "asc" ? "desc" : "asc";
    this.dataSource = [
      ...this._pipe.transform(this.dataSource, this.prop, this.orderBy)
    ];
  };

  getClass = prop => {
    return {
      "fa-sort": prop != this.prop,
      "fa-caret-up": prop == this.prop && this.orderBy == "asc",
      "fa-caret-down": prop == this.prop && this.orderBy == "desc"
    };
  };
}
