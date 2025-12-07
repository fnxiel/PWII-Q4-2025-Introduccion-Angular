import { Component, Input } from '@angular/core';
import { ITarjeta } from '../tarjeta/ITarjeta';
import { Tarjeta } from '../tarjeta/tarjeta';

@Component({
  selector: 'app-listado-tarjetas',
  imports: [Tarjeta],
  templateUrl: './listado-tarjetas.html',
  styleUrl: './listado-tarjetas.scss',
})
export class ListadoTarjetas {
  @Input() titulo: string = ''
  @Input() listadoTarjetas: ITarjeta[] = []
}
