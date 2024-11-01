import { Component } from '@angular/core';
import { PersonaDto } from '../../models/persona.dto';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  
  comoConocio = ['Buscando en Google', 'A través de un amigo', 'Por mi profesor', 'Otros'];
  persona = new PersonaDto('', '', 0, '','','','','');
  letraNIF: string = ''
  submitted = false;
  mensajeError: string = '';

  constructor() {}  

  calcularLetraNIF() {
      const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      this.letraNIF = letras.charAt(this.persona.NIF % 23);
  }

  validacionContrasenia(): boolean {
    return this.persona.contrasenia === this.persona.confirmarContrasenia;
  }

  addPersona() {
    console.log(this.persona);
    this.submitted = true;
  }

  registrar() {
    this.mensajeError= ''

    if (!this.validacionContrasenia()) {
      this.mensajeError = 'Las contraseñas no coinciden.';
      return;
    }
  }
}
