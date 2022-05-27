import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { SignupService } from 'src/app/shared/services/signup.service';
import { SignupData } from 'src/app/shared/interfaces/signup-data';


@Component({
  selector: 'dw-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      code: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    }, {
      validators: () => this.matchPasswords()
    });
  }

  ngOnInit(): void {
  }

  signup() {
      if(this.form.valid) {
        const data: SignupData = this.form.getRawValue();
        this.signupService.signup(data).subscribe({
          next: () => {
            console.log('Se registro correctamente');
            this.matSnackBar.open('User registered successfully', 'Success');
            this.router.navigate(['/login']);
          },
          error: (err) => {
            console.log('Error: ', err);
            this.matSnackBar.open(err.error.message, 'Error');
          },
          complete: () => {}
        });
      }
  }

  matchPasswords() {
    if (!this.form) return null;
    const { password, confirm } = this.form.getRawValue();
    return password === confirm ? null : { mismatch: true };
  }

}
