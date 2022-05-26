import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Francisco';
  texto: string = "hola mundo";

  constructor() {
    setTimeout(() => {
      this.name = 'Juan Perez';
    }, 3000);
  }

  hazAlgo(e: any) {
    console.log('Hiciste click!', e);
  }
}
