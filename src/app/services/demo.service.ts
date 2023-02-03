import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  request(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

  post(): Observable<any> {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", null)
  }
}
