import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

titulo = "Calculadora"
operacion: string = ''
numeroActual: string = ''
numeroAnterior: string = ''
resultado: string = '0'
suma: string = '+'
resta: string = '-'

ActualizarPantalla() {

  if (this.numeroActual && !this.operacion){
  this.resultado = this.numeroActual;
  } else if (this.numeroActual && this.operacion){
    this.resultado = this.numeroAnterior.concat(this.operacion + this.numeroActual)
  }
}

addNumber(numero: string) {

  if(this.numeroActual === '0'){
    this.numeroActual = numero;
  }else{
    this.numeroActual += numero;
  }
  this.ActualizarPantalla();
}

asignarOperador (op: string): void {

  this.resultado = this.numeroActual.concat(op)
  this.operacion = op;
  this.numeroAnterior = this.numeroActual;
  this.numeroActual = '';
}

calcular() {

  const anterior = parseInt(this.numeroAnterior);
  const actual = parseInt(this.numeroActual);
  let resultadoFinal: number;
  
  if (this.operacion === '+') {
    resultadoFinal = anterior + actual;
  } else if (this.operacion === '-') {
    resultadoFinal = anterior - actual;
  } else
    return;
  
  
  this.resultado = resultadoFinal.toString();
  this.numeroActual = resultadoFinal.toString();
  this.operacion = '';
  this.numeroAnterior = '';
}

limpiar() {
  this.operacion = '';
  this.resultado = '0';
  this.numeroActual = '';
  this.numeroAnterior = '';
  }
}

