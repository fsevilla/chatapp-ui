import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private authService: AuthService, private httpClient: HttpClient) { }

  private getHeaders() {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': this.authService.get()
    });

    return headers;
  }

  get(url: string): Observable<any> {
    url = environment.apiUrl + url;
    const headers = this.getHeaders();
    return this.httpClient.get(url, { headers });
  }

  post(url: string, data: any): Observable<any> {
    url = environment.apiUrl + url;
    const headers = this.getHeaders();
    return this.httpClient.post(url, data, { headers });
  }

}
