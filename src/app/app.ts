import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjeta } from './tarjeta/tarjeta';
import { ITarjeta } from './tarjeta/ITarjeta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Aplicacion de Programacion Web II';
  descripcion = 'Esta es mi primer aplicacion de angular'

  enlacesPrincipales: ITarjeta[] = [
    {
      titulo: 'Super recarga',
      descripcion: 'Una super recarga para llamar y navegar',
      enlace: {
        href: 'https://tigo.com.hn/prepago',
        texto: 'Super Recarga'
      }
    },
    {
      titulo: 'Servicios residenciales',
      descripcion: 'Servicios para su casa',
      enlace: {
        href: 'https://tigo.com.hn/residencial',
        texto: 'Servicios residenciales'
      }
    },
    {
      titulo: 'Pagar facturas',
      descripcion: 'Pague su deuda',
      enlace: {
        href: 'https://tigo.com.hn/pagar',
        texto: 'Pagar facturas'
      }
    }]
}

