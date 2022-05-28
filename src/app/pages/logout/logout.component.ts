import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'dw-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.remove();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
