import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignupData } from '../interfaces/signup-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  signup(data: SignupData) {
    // console.log('Enviar los siguientes datos: ', data);
    const url = environment.apiUrl + 'signup';
    return this.httpClient.post(url, data);
  }
}
