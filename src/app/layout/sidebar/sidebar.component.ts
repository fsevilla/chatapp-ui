import { Component, OnInit } from '@angular/core';

import { MenuOption } from 'src/app/shared/interfaces/menu-option';

@Component({
  selector: 'dw-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  options: MenuOption[] = [
    {
      icon: '',
      label: 'Mi Perfil',
      path: 'profile'
    },
    {
      label: 'Salas',
      path: 'rooms'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log('El evento subio al padre');
  }

}



