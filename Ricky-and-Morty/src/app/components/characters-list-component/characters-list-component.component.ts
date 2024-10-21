import { Component, OnInit } from '@angular/core';
import { characterList, Characters } from '../../models/characters.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters-list-component',
  templateUrl: './characters-list-component.component.html',
  styleUrl: './characters-list-component.component.css'
})
export class CharactersListComponentComponent implements OnInit{

  characters: Characters[] = [];

  constructor (private characterService: CharacterService){}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((respuesta: any) => {
      this.characters = respuesta.results;

    })
  }

  getCharacterId(image: string): number {
    var id = image.slice(49,51);
    return parseInt(id);
  }

  getCharacterImage(id : number) {
    return `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;    
   
}
}
