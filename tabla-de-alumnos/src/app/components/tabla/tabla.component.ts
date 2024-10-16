import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

export interface PeriodicElement {
  numeroAlumno: number;
  nombre: string;
  apellidos: string;
  NIF: String;
  edad: number;
  cursoMatriculado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numeroAlumno: 1, nombre: 'Jesus', apellidos: 'Pérez', NIF: '11111111A', edad: 19, cursoMatriculado: '2024-2025'},
  {numeroAlumno: 2, nombre: 'Manuel', apellidos: 'Rodriguez', NIF: '22222222B', edad: 20, cursoMatriculado: '2024-2025'},
  {numeroAlumno: 3, nombre: 'Pedro', apellidos: 'García', NIF: '33333333C', edad: 21, cursoMatriculado: '2024-2025'},
  {numeroAlumno: 4, nombre: 'Marcos', apellidos: 'Sanchez', NIF: '44444444D', edad: 22, cursoMatriculado: '2024-2025'},
  {numeroAlumno: 5, nombre: 'Luis', apellidos: 'Pineda', NIF: '55555555E', edad: 23, cursoMatriculado: '2024-2025'},
  {numeroAlumno: 6, nombre: 'Adrian', apellidos: 'Moreno', NIF: '66666666F', edad: 24, cursoMatriculado: '2024-2025'},
  {numeroAlumno: 7, nombre: 'Alvaro', apellidos: 'Gutierrez', NIF: '77777777G', edad: 25, cursoMatriculado: '2024-2025'},
  {numeroAlumno: 8, nombre: 'David', apellidos: 'Rubio', NIF: '88888888H', edad: 26, cursoMatriculado: '2024-2025'},
  {numeroAlumno: 9, nombre: 'Raul', apellidos: 'Hernandez', NIF: '99999999H', edad: 27, cursoMatriculado: '2024-2025'},
  {numeroAlumno: 10, nombre: 'Lucas', apellidos: 'Prados', NIF: '12345678I', edad: 28, cursoMatriculado: '2024-2025'},
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  displayedColumns: string[] = ['numeroAlumno', 'nombre', 'apellidos', 'NIF', 'edad', 'cursoMatriculado'];
  dataSource = ELEMENT_DATA;

  setAll(evento: MatCheckboxChange, columna: string) {
    if (evento.checked) {
      this.displayedColumns.push(columna);
    } else {
      this.displayedColumns = this.displayedColumns.filter(col => col !== columna);
    }
  }
}
