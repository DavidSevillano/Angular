import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './custom-Progress-Bar-Component.html',
  styleUrl: './custom-Progress-Bar-Component.css'
})
export class BarraProgresoComponent {

  @Input() color = ''
  @Input() value = 0;
 
}
