import { Component } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { Vehiculo } from '../../interfaces/vehiculo.interface';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrl: './lista-vehiculos.component.css'
})
export class ListaVehiculosComponent {

  vehiculos: Vehiculo[] = [];

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiService.getVehicles().subscribe((respuesta: any) => {
      this.vehiculos = respuesta.results;
    });
}
  getVehiculoId(url: string): number {
    var id = url.slice(31,34);
    return parseInt(id);
  }

  getVehiculoImage(id : number) {
    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
    
  }
}
