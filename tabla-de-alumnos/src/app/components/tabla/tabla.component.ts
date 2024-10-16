import { Component } from '@angular/core';

export interface PeriodicElement {
  numeroAlumno: number;
  name: string;
  apellidos: string;
  NIF: String;
  Edad: number;
  CursoMatriculado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numeroAlumno: 1, name: 'Hydrogen', apellidos: 'Pérez', NIF: '11111111A', Edad: 19, CursoMatriculado: '2024-2025'},
  {numeroAlumno: 2, name: 'Helium', apellidos: 'Rodriguez', NIF: '22222222B', Edad: 20, CursoMatriculado: '2024-2025'},
  {numeroAlumno: 3, name: 'Lithium', apellidos: 'García', NIF: '33333333C', Edad: 21, CursoMatriculado: '2024-2025'},
  {numeroAlumno: 4, name: 'Beryllium', apellidos: 'Sanchez', NIF: '44444444D', Edad: 22, CursoMatriculado: '2024-2025'},
  {numeroAlumno: 5, name: 'Boron', apellidos: 'Pineda', NIF: '55555555E', Edad: 23, CursoMatriculado: '2024-2025'},
  {numeroAlumno: 6, name: 'Carbon', apellidos: 'Moreno', NIF: '66666666F', Edad: 24, CursoMatriculado: '2024-2025'},
  {numeroAlumno: 7, name: 'Nitrogen', apellidos: 'Gutierrez', NIF: '77777777G', Edad: 25, CursoMatriculado: '2024-2025'},
  {numeroAlumno: 8, name: 'Oxygen', apellidos: 'Rubio', NIF: '88888888H', Edad: 26, CursoMatriculado: '2024-2025'},
  {numeroAlumno: 9, name: 'Fluorine', apellidos: 'Hernandez', NIF: '99999999H', Edad: 27, CursoMatriculado: '2024-2025'},
  {numeroAlumno: 10, name: 'Neon', apellidos: 'Prados', NIF: '12345678I', Edad: 28, CursoMatriculado: '2024-2025'},
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
