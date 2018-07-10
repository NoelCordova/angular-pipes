import { Component } from '@angular/core';
// import { resolve } from 'path';
// import { reject } from '../../node_modules/@types/q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string = "Noel";

  arreglo:any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  PI:number = Math.PI;

  a:number = 0.234;

  costo:number = 12345.67;

  directorio:{} = {
    nombre: {
      nombres: "Diana Karina",
      appat: "Medina",
      apmat: "Collazo"
    },
    edad: 23,
    direccion: {
      calle: "Alguna loma",
      numero: 123
    }
  };

  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve('Llegó la información!'), 3500);
  // });

  frase:string = "ora prro, KYC ALV mushasho";

}
