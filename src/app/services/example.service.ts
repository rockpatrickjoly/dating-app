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
  private apiUrl = '/api/examples';

  constructor(private http: HttpClient) {}

  getExamples(): Observable<Example[]> {
    console.log("passe par getExamples");
    return this.http.get<Example[]>(this.apiUrl);
  }
}
