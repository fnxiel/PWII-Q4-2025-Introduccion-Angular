import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IListadoPokemon } from './types/IListadoPokemon';
import { Observable } from 'rxjs';
import { IDetallePokemon } from './types/IDetallePokemon';

@Injectable({
  providedIn: 'root',
})
export class Pokeapi {
  private urlBase = 'https://pokeapi.co/api/v2'

  constructor(private cliente: HttpClient){}

  //Obtener el listado base de los pokemons
  getPokemons(limite: number = 20) : Observable<IListadoPokemon>{
    const resultado = this.cliente.get<IListadoPokemon>(`${this.urlBase}/pokemon?limit=${limite}`)
    return resultado
  }
  
  getDetallePokemon(url:string): Observable<IDetallePokemon>{
    const resultado = this.cliente.get<IDetallePokemon>(`${url}`)
    return resultado
  }
  
}
