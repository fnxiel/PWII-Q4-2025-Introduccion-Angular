import { Component, Input } from '@angular/core';
import { ITarjeta } from './ITarjeta';
import { IEnlace } from './IEnlace';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.scss',
})
export class Tarjeta implements ITarjeta {
  @Input() titulo: string = "Titulo"
  @Input() descripcion: string = "Descripcion"
  @Input() enlace: IEnlace = {
    href: '/',
    texto: 'No definido'
  };
}
