import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  name: string = 'Francisco';
  texto: string = "hola mundo";

  isLoggedIn: boolean = false;

  @ViewChild('drawer', { static: false}) drawer!: MatDrawer;

  constructor(private authService: AuthService, private changeRef: ChangeDetectorRef) {
    
  }

  hazAlgo(e: any) {
    console.log('Hiciste click!', e);
  }

  ngAfterViewInit(): void {
    this.authService.loginStatus.subscribe(status => {
      this.isLoggedIn = status;
      if(!status) {
        this.drawer.close();
      } else {
        this.drawer.open();
      }
    });
    this.changeRef.detectChanges();
  }
}
