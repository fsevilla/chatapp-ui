import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Chat App';

  example: string = "primary";

  @Output() onToggle: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.onToggle.emit();
  }

}
