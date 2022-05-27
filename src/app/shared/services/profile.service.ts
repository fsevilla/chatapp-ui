import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getProfile(): Observable<any> {
    const url = environment.apiUrl + 'auth/me';

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': this.authService.get()
    });

    return this.httpClient.get(url, {
      headers: headers
    });
  }
}
