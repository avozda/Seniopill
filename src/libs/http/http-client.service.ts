import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options?: any): Observable<T> {
      return this.httpClient.get(url, options).pipe(map((response: any) => response ));
  }
  post<T>(url: string, body: any, options?: any): Observable<T> {
      return this.httpClient.post(url, body, options).pipe(map((response: any) => response));
  }
  put<T>(url: string, body: any, options?: any): Observable<T> {
      return this.httpClient.put(url, body, options).pipe(map((response: any) => response));
  }
  delete(url: string, options?: any) {
      return this.httpClient.delete(url, options).pipe(map((response: any) => response));
  }
}
