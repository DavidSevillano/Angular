import { Component } from '@angular/core';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrl: './car-component.component.css'
})
export class CarComponentComponent {

  modelo = 'Tesla Model X'
  precio = '298$/day'
  tipo = 'Automatic/manual'
  imagen = 'assets/coche_1.png'
}
