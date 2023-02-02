import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  request(): Observable<any> {
    console.log("sending request");
    return this.http.get("https://www.google.com")
  }
}
