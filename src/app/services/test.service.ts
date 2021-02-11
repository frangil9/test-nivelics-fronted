import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private testUrl: string = 'https://d2rpzhocglww2h.cloudfront.net/test/test.json';

  constructor(private http: HttpClient) { }

  getJsonTest(): Observable<any> {
    return this.http.get<any>(this.testUrl);
  }
}
