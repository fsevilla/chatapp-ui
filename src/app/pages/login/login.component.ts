import { Component, OnInit } from '@angular/core';

import { Credentials } from 'src/app/shared/interfaces/credentials';

@Component({
  selector: 'dw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = { email: '', password: '' };
  fieldType: string = 'password';

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log('Enviar datos...', this.credentials);
  }

  togglePassword() {
    this.fieldType = this.fieldType === 'password' ? 'text' : 'password';
  }

  isValid() {
    return this.credentials.email && this.credentials.password;
  }

}
