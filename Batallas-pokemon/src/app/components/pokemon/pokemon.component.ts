import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonDetailResponse } from '../../models/pokemon-details.interface';
import { Pokemon } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemonList: Pokemon[] = [];
  @Input() pokemonId1: any;
  @Input() pokemonId2: any;
  pokemon1: PokemonDetailResponse | undefined;
  pokemon2: PokemonDetailResponse | undefined;
  @Output() ataque = new EventEmitter<number>();


  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((resp) => {
      this.pokemonList = resp.results;
    });
    this.pokemonService.getOnePokemon(parseInt(this.pokemonId1)).subscribe(response => {
      this.pokemon1 = response;
    });
    this.pokemonService.getOnePokemon(parseInt(this.pokemonId2)).subscribe(response => {
      this.pokemon2 = response;
    });
  }


  ataca() {
    if(this.pokemon1){
    this.ataque.emit(this.pokemon1.stats[1].base_stat);
    this.ataque.emit(this.pokemonId1);
    }else{
    this.ataque.emit(this.pokemon2!.stats[1].base_stat);
    this.ataque.emit(this.pokemonId2);


    }
  }

}
