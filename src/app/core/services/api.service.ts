import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://mutation-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  getStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stats`);
  }

  getLastSamples(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/list`);
  }
}
