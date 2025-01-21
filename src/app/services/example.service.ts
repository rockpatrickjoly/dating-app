import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Example {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getExamples(): Observable<Example[]> {
    console.log("passe par getExamples");
    console.log("using this url" + this.apiUrl);
    return this.http.get<Example[]>(`${this.apiUrl}/examples`);
  }
}
