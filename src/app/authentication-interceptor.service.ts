import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(
    req: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set(
        "x-rapidapi-host", "corona-virus-world-and-india-data.p.rapidapi.com",
      ).set(
        "x-rapidapi-key", "7fe567987fmshbd02982389c551ap136a59jsn3a72bfcfe2fe"
      )
    })
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log("response recived successfully");
      }
      return event;
    }), catchError((error: HttpErrorResponse) => {
      console.error("http request failed--->>>", req.url);
      return throwError(error);
    }));
  }

}