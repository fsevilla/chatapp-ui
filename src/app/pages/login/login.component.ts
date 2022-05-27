import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Credentials } from 'src/app/shared/interfaces/credentials';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'dw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = { email: '', password: '' };
  fieldType: string = 'password';
  error: boolean = false;

  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.credentials).subscribe({
      next: response => {
        this.error = false;
        console.log('Response: ', response);
        this.authService.save(response.token);
        this.router.navigate(['/']);
      },
      error: err => {
        this.error = true;
      },
      complete: () => {}
    });
  }

  togglePassword() {
    this.fieldType = this.fieldType === 'password' ? 'text' : 'password';
  }

  isValid() {
    return this.credentials.email && this.credentials.password;
  }

}
