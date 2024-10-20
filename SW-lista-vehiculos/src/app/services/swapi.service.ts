import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interfaces/vehiculo.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(`https://swapi.dev/api/vehicles/`);
  }
}
