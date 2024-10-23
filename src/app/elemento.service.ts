import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {

  //se define el endpoint para consmumir la api
  private apiUrl = 'http://localhost:8080/api/elementos';

  constructor(private http: HttpClient) { }

  getElementos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}