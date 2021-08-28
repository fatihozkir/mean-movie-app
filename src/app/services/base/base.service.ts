import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export abstract class BaseService {
  constructor(private httpClient: HttpClient) {}

  getAll(fullUrl: string): Observable<any> {
    return this.httpClient.get<any>(fullUrl);
  }

  getById(fullUrl: string, id: string): Observable<any> {
    return this.httpClient.get<any>(fullUrl);
  }

  update() {}

  add() {}

  delete(fullUrl: string): Observable<any> {
    return this.httpClient.delete(fullUrl);
  }
}


