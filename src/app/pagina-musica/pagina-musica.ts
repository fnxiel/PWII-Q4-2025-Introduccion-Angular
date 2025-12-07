import { Component, OnInit } from '@angular/core';
import { ListadoTarjetas } from '../listado-tarjetas/listado-tarjetas';
import { ActivatedRoute } from '@angular/router';
import { ITarjeta } from '../tarjeta/ITarjeta';
import { Notificaciones } from '../notificaciones';

@Component({
  selector: 'app-pagina-musica',
  imports: [ListadoTarjetas],
  templateUrl: './pagina-musica.html',
  styleUrl: './pagina-musica.scss',
})
export class PaginaMusica implements OnInit {

  idMusica: number = 0
  musicaFiltrada: ITarjeta[] = []

//Inyeccion de dependencias - Patron de programacion
constructor(private ruta: ActivatedRoute, public notificacionesService: Notificaciones){
  console.log("Ejecutando constructor")
}

  ngOnInit(): void {
    console.log("Ejecutando ngOnInit")
    this.ruta.queryParams.subscribe(params =>{
      console.log(params)

      if(params['id']){
        this.idMusica = Number(params['id'])
        console.log("Filtrando por id", this.idMusica)
        this.musicaFiltrada = this.enlacesMusica.filter(musica => musica.id === this.idMusica)
      }else{
        this.musicaFiltrada = this.enlacesMusica
      }
    })

    this.ruta.url.subscribe(url =>{
      console.log(url)
    })
  }



enlacesMusica: ITarjeta[] = [
    {
      id: 1,
      titulo: 'Productos relacionados',
      descripcion: 'Equipo de computadora',
      enlace: {
        href: 'https://hola.com.hn/computadoras',
        texto: 'Productos relacionados'
      }
    },
    {
      id: 2,
      titulo: 'Productos de celulares',
      descripcion: 'Celulares',
      enlace: {
        href: 'https://celulares.com.hn/dispositivos',
        texto: 'Celulares'
      }
    }]
}
