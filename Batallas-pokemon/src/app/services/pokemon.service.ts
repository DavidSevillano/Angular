import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailResponse } from '../models/pokemon-details.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getOnePokemon(id: number): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
}
