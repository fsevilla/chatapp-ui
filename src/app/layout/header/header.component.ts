import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'dw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Chat App';

  example: string = "primary";

  isLoggedIn: boolean = false;

  @Output() onToggle: EventEmitter<void> = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.loginStatus.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  toggleMenu() {
    this.onToggle.emit();
  }

}
