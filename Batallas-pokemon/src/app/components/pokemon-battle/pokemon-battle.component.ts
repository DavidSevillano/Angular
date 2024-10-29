import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailResponse } from '../../models/pokemon-details.interface';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css',
})
export class PokemonBattleComponent {
  pokemon1: PokemonDetailResponse | undefined;
  pokemon2: PokemonDetailResponse | undefined;
  pokemonId1: number = 54;
  pokemonId2: number = 68;

  turno: number = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getOnePokemon(this.pokemonId1).subscribe((resp) => {
      this.pokemon1 = resp;
    });
    this.pokemonService.getOnePokemon(this.pokemonId2).subscribe((resp) => {
      this.pokemon2 = resp;
    });
  }

  ataca(pokemonName: string) {
    if (pokemonName === this.pokemon1!.name) {
      this.pokemon2!.stats[1].base_stat -= 10;
    } else {
      this.pokemon1!.stats[1].base_stat -= 10;
    }
    this.turno++;
  }

  turnoNombre() {
    let vidaPokemon1 = this.pokemon1!.stats[1].base_stat;
    let vidaPokemon2 = this.pokemon2!.stats[1].base_stat;

    if (this.turno % 2 != 0 && vidaPokemon1 > 0) {
      return `El turno es de ${this.pokemon1!.name}`;
    } else if (vidaPokemon1 <= 0) {
      return `El ganador del combate es ${this.pokemon2!.name}!`;
    }
    if (this.turno % 2 === 0 && vidaPokemon2 > 0) {
      return `El turno es de ${this.pokemon2!.name}`;
    } else if (vidaPokemon2 <= 0) {
      return `El ganador del combate es ${this.pokemon1!.name}!`;
    }
    return '';
  }
}
