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
muestra = ""
numero1 = 0
numero2 = 0
resultado = 0

addNumber(numero: number) {

  if(this.numero1 != 0){
    this.numero1 = numero
  }else{
    this.numero2 = numero
  }
  
}

sumar(){


}

restar(){

}

resultadoSuma(){

 alert(this.numero1 + this.numero2)

}

}


