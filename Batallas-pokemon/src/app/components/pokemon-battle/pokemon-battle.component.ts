import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailResponse } from '../../models/pokemon-details.interface';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrl: './pokemon-battle.component.css'
})
export class PokemonBattleComponent {

  pokemon: PokemonDetailResponse | undefined;
  pokemonId: any

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getOnePokemon(this.pokemonId).subscribe((resp) => {
      this.pokemon = resp;
    });

}

}
