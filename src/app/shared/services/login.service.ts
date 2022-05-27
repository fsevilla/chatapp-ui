import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Credentials } from '../interfaces/credentials';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: Credentials): Observable<any> {
    const url = environment.apiUrl + 'auth';
    return this.httpClient.post(url, credentials);
  }
}


