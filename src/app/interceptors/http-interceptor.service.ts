import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  tempToken: string = "Bearer 1A2b3C4d5E6f7G8h9IAgBKClD"

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tempToken) {
      if (request.url.includes('jsonplaceholder.typicode.com')) {
        console.log("ankit inside");

        request = request.clone({
          setHeaders: {
            'Access-Control-Allow-Origin': '*',
          },
          params: request.params.set(
            'userId',
            '7'
          )
        });
      }
      else {
        request = request.clone({
          setHeaders: {
            Authorization: this.tempToken,
            'Access-Control-Allow-Origin': '*',

          }
        });
      }
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data: any;
        data = {
          reason: error.status,
          status: error.error.message ? error.error.message : error.error.error,
          message: error.error.message ? error.error.message : error.statusText
        };
        let errMsg: any;
        if (data.reason === 401) {

          return throwError(error);
        } else if (data.reason === 0)
          errMsg = 'notification.error.server.0';
        else if (data.reason === 404)
          errMsg = 'notification.error.server.404';
        else if (data.reason === 500) {
          data.message ? errMsg = data.message :
            errMsg = 'notification.error.server.500';
        }
        else if (data.reason === 302)
          errMsg = data.message;
        else
          errMsg = 'notification.error.server.global';

        data.title = "Sorry . . ."
        data.text = errMsg;
        return throwError(error);
      }));
  }
}