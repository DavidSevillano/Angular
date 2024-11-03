import { Component } from '@angular/core';
import { PersonaDto } from '../../models/persona.dto';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css',
})
export class FormularioRegistroComponent {
  comoConocio = [
    'Buscando en Google',
    'A través de un amigo',
    'Por mi profesor',
    'Otros',
  ];
  persona = new PersonaDto('', '', 0, '', '', '', '', '', '', false);
  letraNIF: string = '';
  submitted = false;
  mensajeError: string = '';

  constructor() {}

  calcularLetraNIF(): string {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    this.letraNIF = letras.charAt(this.persona.NIF! % 23);
    return this.letraNIF;
  }

  validacionContrasenia(): boolean {
    if (
      this.persona.contrasenia === this.persona.confirmarContrasenia
    ) {
      return true;
    } else {
      return false;
    }
  }

  addPersona() {
      this.submitted = true;
      console.log (this.persona)
}
}
