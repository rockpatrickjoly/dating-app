import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Example {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  private apiUrl = 'http://3.80.92.79:8080/examples';

  constructor(private http: HttpClient) {}

  getExamples(): Observable<Example[]> {
    return this.http.get<Example[]>(this.apiUrl);
  }
}
