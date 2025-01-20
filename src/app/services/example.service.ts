import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  //private apiUrl = 'http://3.80.92.79/:8080/examples';
  private apiUrl = 'http://localhost/:8080/examples';

  constructor(private http: HttpClient) {}

  getExamples(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
