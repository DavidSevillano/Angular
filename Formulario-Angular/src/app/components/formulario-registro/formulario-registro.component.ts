import { Component } from '@angular/core';
import { PersonaDto } from '../../models/persona.dto';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  
  comoConocio = ['Buscando en Google', 'A través de un amigo', 'Por mi profesor', 'Otros'];
  persona = new PersonaDto('', '', 0, '','','','');
  submitted = false;

  constructor() {}  

  addPersona() {
    console.log(this.persona);
    this.submitted = true;
  }
}
