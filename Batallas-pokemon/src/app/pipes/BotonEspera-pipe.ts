import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BotonEspera'
})
export class BotonEsperaPipe implements PipeTransform {

  transform(value: boolean): string{
    if (value){
      return "Ataca!!!"
    }
    return "Espera..."

  }

}
