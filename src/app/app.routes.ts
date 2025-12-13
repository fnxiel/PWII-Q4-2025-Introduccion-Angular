import { Routes } from '@angular/router';
import { PaginaMusica } from './pagina-musica/pagina-musica';
import { PaginaArtistas } from './pagina-artistas/pagina-artistas';
import { PaginaPokemons } from './pagina-pokemons/pagina-pokemons';

export const routes: Routes = [
    {
        path: '', component: PaginaPokemons
    },
    {
        path: 'musica', component: PaginaMusica
    },
    {
        path: 'artistas', component: PaginaArtistas
    },
    {
        path: 'pokemons', component: PaginaPokemons
    }
];
