import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, of, from } from "rxjs";
import { catchError, map } from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class CommonService {
  readonly _URL = "https://jsonplaceholder.typicode.com/users";
  constructor(private _http: HttpClient) { }

  getData = (): Observable<any> => {
    return this._http.get<any>(`${this._URL}`).pipe(
      map(res => res),
      catchError(err => {
        return throwError(err);
      })
    );
  };
}
