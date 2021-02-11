import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  savePublication(publication): Observable<any> {
    let body = JSON.stringify(publication);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${environment.baseUrl}/api/publications`, body, { headers });
  }

  getAllPublications(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/publications`);
  }

}
