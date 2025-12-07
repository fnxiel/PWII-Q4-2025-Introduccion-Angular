import { Component } from '@angular/core';
import { ListadoTarjetas } from '../listado-tarjetas/listado-tarjetas';
import { ITarjeta } from '../tarjeta/ITarjeta';
import { Notificaciones } from '../notificaciones';

@Component({
  selector: 'app-pagina-artistas',
  imports: [ListadoTarjetas],
  templateUrl: './pagina-artistas.html',
  styleUrl: './pagina-artistas.scss',
})
export class PaginaArtistas {
  constructor(public notificacionesService: Notificaciones){}
enlacesArtistas: ITarjeta[] = [
    {
      id: 1,
      titulo: 'Super recarga',
      descripcion: 'Una super recarga para llamar y navegar',
      enlace: {
        href: 'https://tigo.com.hn/prepago',
        texto: 'Super Recarga'
      }
    },
    {
      id: 2,
      titulo: 'Servicios residenciales',
      descripcion: 'Servicios para su casa',
      enlace: {
        href: 'https://tigo.com.hn/residencial',
        texto: 'Servicios residenciales'
      }
    },
    {
      id: 3,
      titulo: 'Pagar facturas',
      descripcion: 'Pague su deuda',
      enlace: {
        href: 'https://tigo.com.hn/pagar',
        texto: 'Pagar facturas'
      }
    },
  {
    id: 4,
      titulo: 'Otros enlaces',
      descripcion: 'Enlaces importantes',
      enlace: {
        href: 'https://tigo.com.hn/enlaces',
        texto: 'Otros enlaces'
      }
    }]
}
