import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  @Input() pokemon: any;
  @Input() vida: number = 0;
  @Input() pokemonId: number = 0;
  @Input() turno: number = 0;
  @Output() ataque = new EventEmitter<string>();

  mostrarBoton(): boolean {
    if (this.pokemonId === 54) {
      return this.turno % 2 === 0 || this.vida <= 0;
    } else {
      return this.turno % 2 !== 0 || this.vida <= 0;
    }
  }

  ataca() {
    this.ataque.emit(this.pokemon.name);
  }
}
