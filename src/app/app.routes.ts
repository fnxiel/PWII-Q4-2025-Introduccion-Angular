import { Routes } from '@angular/router';
import { PaginaMusica } from './pagina-musica/pagina-musica';
import { PaginaArtistas } from './pagina-artistas/pagina-artistas';

export const routes: Routes = [
    {
        path: '', component: PaginaMusica
    },
    {
        path: 'musica', component: PaginaMusica
    },
    {
        path: 'artistas', component: PaginaArtistas
    }
];
