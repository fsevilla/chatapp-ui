import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpService: HttpService) { }

  getRooms(): Observable<any> {
    return this.httpService.get('rooms/find');
  }
}
