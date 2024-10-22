import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { People } from '../../models/people-list.interface';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit {

  peopleList: People[] = [];
  constructor(private PeopleService: PeopleService) {}

  ngOnInit(): void {
    this.PeopleService.getPeopleList().subscribe((resp) => {
      this.peopleList = resp.results;
    });
  }
  
  getPeopleId(url: string): number {
    var id = url.split('/')[5];
    return parseInt(id);
  }

  getPeopleImage(id : number) {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    
  }
}
