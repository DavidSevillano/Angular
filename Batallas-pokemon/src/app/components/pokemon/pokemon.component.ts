import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BotonEsperaPipe } from '../../pipes/BotonEspera-pipe';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {

  @Input() pokemonImagen: string = '';
  @Input() pokemon: any;
  @Input() vida: number = 0;
  @Input() vidaMax: number = 0;
  @Input() pokemonId: number = 0;
  @Input() turno: number = 0;
  @Output() ataque = new EventEmitter<string>();
  customValueBoton: string = "";


  mostrarBoton(): boolean {
    if (this.pokemonId === 54) {
      return this.turno % 2 === 0 || this.vida <= 0;
    } else {
      return this.turno % 2 !== 0 || this.vida <= 0;
    }
  }

  cambioColor(): string {

  
    if (this.vida >= this.vidaMax *0.7){
      return 'success'
    }else if (this.vida >= this.vidaMax *0.3) {
      return 'warning'
    }else
    return 'danger'
    }

  ataca() {
    this.ataque.emit(this.pokemon.name);
  }
}
