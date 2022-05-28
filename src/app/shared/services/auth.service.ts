import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private key: string = 'dw-chat-token';

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loginStatus.next(this.isLoggedIn());
  }

  save(token: string): void {
    localStorage.setItem(this.key, token);
    this.loginStatus.next(true);
  }

  get(): string {
    const token = localStorage.getItem(this.key);
    return token ? token : '';
  }

  isLoggedIn(): boolean {
    return !!this.get();
  }

  remove(): void {
    localStorage.removeItem(this.key);
    this.loginStatus.next(false);
  }
}
