import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`https://rickandmortyapi.com/api/character`)
  }
}
