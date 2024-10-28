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
  @Input() pokemon: any;
  @Input() vida: number = 0;
  @Input() pokemonId: number = 0;
  @Input() turno: number = 0;
  @Output() ataque = new EventEmitter<void>();


  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((resp) => {
      this.pokemonList = resp.results;
    });
    
  }

  mostrarBoton(): boolean {
    if (this.pokemonId === 54) {
      return this.turno % 2 === 0 || this.vida <= 0;
    } else {
      return this.turno % 2 !== 0 || this.vida <= 0;
    }
  }

  ataca() {
    this.ataque.emit();
    }
  }


