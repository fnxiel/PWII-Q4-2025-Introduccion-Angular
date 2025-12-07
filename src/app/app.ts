import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Notificaciones } from './notificaciones';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Aplicacion de Programacion Web II';
  descripcion = 'Esta es mi primer aplicacion de angular'

  constructor(public notificacionesService : Notificaciones){}
    
}

