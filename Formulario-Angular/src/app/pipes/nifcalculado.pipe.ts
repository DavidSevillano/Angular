import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NIFCalculado'
})
export class NIFCalculadoPipe implements PipeTransform {

  transform(NIF: number, letra: string): string {
    return `${NIF}${letra}`;
  }

}
