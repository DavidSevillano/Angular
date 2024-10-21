import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/characters.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters-list-component',
  templateUrl: './characters-list-component.component.html',
  styleUrl: './characters-list-component.component.css'
})
export class CharactersListComponentComponent implements OnInit{

  characters: Character[] = [];
 

  constructor (private characterService: CharacterService){}

  
  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((respuesta) => {
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
