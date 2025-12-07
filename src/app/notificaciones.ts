import { Injectable } from '@angular/core';
import { INotificaciones } from './types/INotificaciones';

@Injectable({
  providedIn: 'root',
})
export class Notificaciones {
  notificaciones: INotificaciones[] = []

  agregarNotificacion(pantalla: string){
    const id = this.notificaciones.length + 1
    this.notificaciones.push({
      id: id,
      titulo: `${pantalla} - Notificacion ${id}`,
      descripcion: 'Una nueva notificacion generada desde el servicio',
      tipo: 'info'
    })
  }

  limpiarNotificaciones(){
    this.notificaciones = []
  }
}

