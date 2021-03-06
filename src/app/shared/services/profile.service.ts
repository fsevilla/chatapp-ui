import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpService: HttpService) { }

  getProfile(): Observable<any> {
    return this.httpService.get('auth/me');
  }
}
