import { Component, OnInit } from '@angular/core';

import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'dw-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = {};

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: response => {
        console.log('Perfil: ', response);
        this.user = response;
      },
      error: err => {
        console.log('Error: ', err);
      }
    })
  }

}
