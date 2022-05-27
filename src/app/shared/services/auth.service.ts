import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private key: string = 'dw-chat-token';

  constructor() { }

  save(token: string): void {
    localStorage.setItem(this.key, token);
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
  }
}
