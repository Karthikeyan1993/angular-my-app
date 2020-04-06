import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class Covid19Service {
  readonly ALL_URL =
    "https://corona-virus-world-and-india-data.p.rapidapi.com/api";
  constructor(private _http: HttpClient) {}

  getAllData = (): Observable<any> => {
    return this._http.get(`${this.ALL_URL}`).pipe(
      map(res => res['countries_stat']["countries_stat"]),
      catchError(err => {
        return throwError(err);
      })
    );
  };
}
