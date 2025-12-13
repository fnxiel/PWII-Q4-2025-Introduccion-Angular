import { Component, OnInit } from '@angular/core';
import { Pokeapi } from '../pokeapi';
import { IListadoPokemon } from '../types/IListadoPokemon';

@Component({
  selector: 'app-pagina-pokemons',
  imports: [],
  templateUrl: './pagina-pokemons.html',
  styleUrl: './pagina-pokemons.scss',
})
export class PaginaPokemons implements OnInit {
  listadoPokemon?: IListadoPokemon
  conteo: number = 150

  constructor(public pokeapi: Pokeapi){}
  ngOnInit(): void {
    this.pokeapi.getPokemons(this.conteo).subscribe(resultado => 
    {
      this.listadoPokemon = resultado
      console.log(resultado.results) 
    })
  }
  
}
